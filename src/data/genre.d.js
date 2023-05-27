import {
  MaterialCommunityIcons,
  MaterialIcons,
  Feather,
} from "@expo/vector-icons";
import color from "../configurations/color";

export const genreDatas = [
  {
    icon: (
      <MaterialCommunityIcons
        name="sword-cross"
        size={24}
        color={color.primary}
      />
    ),
    title: "Action",
  },
  {
    icon: (
      <MaterialCommunityIcons
        name="magic-staff"
        size={24}
        color={color.primary}
      />
    ),
    title: "Fantasy",
  },
  {
    icon: (
      <MaterialCommunityIcons
        name="cards-heart"
        size={24}
        color={color.primary}
      />
    ),
    title: "Romance",
  },
  {
    icon: (
      <MaterialIcons name="sports-volleyball" size={24} color={color.primary} />
    ),
    title: "Sport",
  },
  {
    icon: (
      <MaterialCommunityIcons
        name="drama-masks"
        size={24}
        color={color.primary}
      />
    ),
    title: "Drama",
  },
  {
    icon: (
      <MaterialCommunityIcons name="brain" size={24} color={color.primary} />
    ),
    title: "Psycological",
  },
  {
    icon: <Feather name="more-horizontal" size={24} color={color.primary} />,
    title: "More",
  },
];
