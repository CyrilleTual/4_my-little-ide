import { create } from "zustand";

interface TestStore {
  user: {
    name: string;
  };
  updateUser: (newName: string) => void;
}

export const testStore = create<TestStore>((set) => ({
  user: {
    name: "toto",
  },

  updateUser: (newName: any) =>
    set((state) => ({
      user: {
        ...state.user,
        name: newName,
      },
    })),
}));