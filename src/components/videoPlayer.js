import color from "../configurations/color";
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  Animated,
  Easing,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useEffect, useRef, useState } from "react";
import { Slider } from "@miblanchard/react-native-slider";
import { ResizeMode, Video } from "expo-av";

const VideoPlayer = ({ uri }) => {
  const [isPlay, setIsPlay] = useState(false);
  const videoRef = useRef();
  const [spinValue] = useState(new Animated.Value(0));
  const [isShowControllerVideo, setIsShowControllerVideo] = useState(true);
  const [statusVideo, setStatusVideo] = useState({
    durationMillis: 0,
    positionMillis: 0,
    skip: 0,
  });
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const formatMMSS = (second) => {
    let minute = Math.floor(second / 60);
    let sec = Math.floor(second % 60);

    return `${minute < 10 ? "0" : ""}${minute}:${sec < 10 ? "0" : ""}${sec}`;
  };

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true,
        easing: Easing.linear,
      })
    ).start();
  }, []);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <View>
      <TouchableOpacity
        activeOpacity={1}
        style={{
          width: "100%",
          aspectRatio: 16 / 9,
          backgroundColor: color.grey,
          position: "relative",
        }}
        onPress={() => setIsShowControllerVideo(true)}
      >
        <Video
          resizeMode={ResizeMode.CONTAIN}
          style={{ aspectRatio: 16 / 9, width: "100%", position: "absolute" }}
          source={{ uri }}
          ref={videoRef}
          onLoadStart={() => setIsLoading(true)}
          onLoad={() => setIsLoading(false)}
          onPlaybackStatusUpdate={(status) => {
            setStatusVideo({
              skip: status.positionMillis,
              positionMillis: Math.floor(status.positionMillis / 1000),
              durationMillis: Math.floor(status.durationMillis / 1000),
            });

            setProgress(status.positionMillis / status.durationMillis);

            if (status.didJustFinish) {
              setIsPlay(false);
              videoRef.current.setPositionAsync(0);
              setProgress(1);
            }
          }}
        />

        <TouchableOpacity
          activeOpacity={1}
          onPress={() => setIsShowControllerVideo(false)}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            display: isShowControllerVideo ? "flex" : "none",
            backgroundColor: "rgba(0,0,0,.5)",
          }}
        >
          {/* controller */}
          <View
            style={{
              width: "70%",
              zIndex: 9999,
              position: "absolute",
              top: 65,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            {/* backforward */}
            <TouchableOpacity
              onPress={() => {
                if (videoRef.current) {
                  const prev = statusVideo.skip - 10000;
                  videoRef.current.setPositionAsync(prev < 0 ? 0 : prev);
                  setStatusVideo({
                    positionMillis: statusVideo.positionMillis - 10,
                  });
                }
              }}
            >
              <Entypo
                name="controller-jump-to-start"
                size={36}
                color={color.white}
              />
            </TouchableOpacity>

            {/* continue video */}
            <TouchableOpacity
              onPress={() => {
                setIsPlay(!isPlay);
                isPlay
                  ? videoRef.current.pauseAsync()
                  : videoRef.current.playAsync();
              }}
            >
              {isPlay ? (
                <Entypo name="controller-paus" size={52} color={color.white} />
              ) : (
                <Entypo name="controller-play" size={52} color={color.white} />
              )}
            </TouchableOpacity>

            {/* forward */}
            <TouchableOpacity
              onPress={() => {
                if (videoRef.current) {
                  const prev = statusVideo.skip + 10000;
                  videoRef.current.setPositionAsync(
                    prev > statusVideo.durationMillis * 1000
                      ? statusVideo.durationMillis * 1000
                      : prev
                  );
                  setStatusVideo({
                    positionMillis: statusVideo.positionMillis + 10,
                  });
                }
              }}
            >
              <Entypo name="controller-next" size={36} color={color.white} />
            </TouchableOpacity>
          </View>

          <View
            style={{
              alignItems: "center",
              position: "absolute",
              width: "90%",
              flexDirection: "row",
              justifyContent: "space-between",
              bottom: 5,
            }}
          >
            <View style={{ width: "85%" }}>
              <Slider
                value={statusVideo.positionMillis}
                minimumValue={0}
                maximumValue={statusVideo.durationMillis}
                thumbTintColor={color.primary}
                minimumTrackTintColor={color.primary}
                maximumTrackTintColor={color.gray}
                onSlidingComplete={(value) => {
                  if (videoRef.current) {
                    videoRef.current.setPositionAsync(value * 1000);
                    setStatusVideo({ positionMillis: value });
                  }
                }}
                thumbStyle={{ width: 10, height: 10 }}
              />
            </View>
            <Text style={{ color: color.white, fontSize: 14 }}>
              {formatMMSS(statusVideo.positionMillis)}
            </Text>
          </View>
          {isLoading && (
            <Animated.View
              style={{
                transform: [{ rotate: spin }],
                borderRadius: 50,
                overflow: "hidden",
                position: "absolute",
                bottom: 45,
              }}
            >
              <Image
                style={{
                  height: 35,
                  width: 35,
                }}
                source={{
                  uri: "https://media.tenor.com/HEPktnyoNAgAAAAi/loading.gif",
                }}
              />
            </Animated.View>
          )}
        </TouchableOpacity>
      </TouchableOpacity>
      <View
        style={{
          width: `${progress * 100}%`,
          height: 2,
          backgroundColor: color.primary,
        }}
      ></View>
    </View>
  );
};

export default VideoPlayer;
