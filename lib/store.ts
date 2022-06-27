import { action, createStore } from "easy-peasy";

export const store = createStore({
  activeSongs: [],
  activeSong: null,
  isPlaying: true,
  changeActiveSongs: action((state: any, payload) => {
    state.activeSongs = payload;
  }),
  changeActiveSong: action((state: any, payload) => {
    state.activeSong = payload;
  }),
  changeSongPlayingStatus: action((state: any, payload) => {
    state.isPlaying = payload;
  }),
});
