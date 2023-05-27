import { create } from "zustand";

const useUserStore = create((set) => ({
  name: null,
  email: null,
  picture: null,
  setUser: (name, email, picture) =>
    set(() => ({
      name: name,
      email: email,
      picture: picture,
    })),
}));

export default useUserStore;
