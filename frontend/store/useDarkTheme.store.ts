import { create } from "zustand";

type DarkThemeStoreT = {
  darkTheme: boolean;
  setDarkTheme: (b: boolean) => void;
};

const useDarkTheme = create<DarkThemeStoreT>((set) => ({
  darkTheme: false,
  setDarkTheme: (bool: boolean) => set(() => ({ darkTheme: bool })),
}));

export default useDarkTheme;
