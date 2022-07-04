import create from "zustand";

interface BearState {
  activeSongs: [];
  activeSong: null;
  // eslint-disable-next-line no-unused-vars
  changeActiveSongs: (payload: any) => void;
  // eslint-disable-next-line no-unused-vars
  changeActiveSong: (payload: any) => void;
}

export const useStore = create<BearState>((set) => ({
  activeSongs: [],
  activeSong: null,
  changeActiveSongs: (payload: any) => set(() => ({ activeSongs: payload })),
  changeActiveSong: (payload: any) => set(() => ({ activeSong: payload })),
}));
