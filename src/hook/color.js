import { create } from "zustand";

const useColorStore = create((set) => ({
  primary: null,
  setPrimaryColor: (input) =>
    set((state) => ({
      primary: input,
    })),
}));

export default useColorStore;
