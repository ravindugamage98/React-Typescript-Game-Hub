import { create } from "zustand";

interface GameQuery {
  genreID?: number; // genreID? means number | undefined
  platformID?: number;
  sortOrder?: string;
  searchText?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setGenreID: (genreID: number) => void;
  setPlatformID: (platformID: number) => void;
  setSortOrder: (sortOrder: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setSearchText: (searchText: string) =>
    set(() => ({ gameQuery: { searchText } })),
  setGenreID: (genreID: number) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreID } })),
  setPlatformID: (platformID: number) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformID } })),
  setSortOrder: (sortOrder: string) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
}));

export default useGameQueryStore;
