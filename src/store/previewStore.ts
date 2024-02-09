import { create } from "zustand";

interface PreviewStore {
  isVisible: boolean;
  toggleIsVisible: () => void;
  hidePreview: () => void;
}

export const previewStore = create<PreviewStore>((set) => ({
  isVisible: true,
  toggleIsVisible: () => set((state) => ({ isVisible: !state.isVisible })),
  hidePreview: () => set((state) => ({ isVisible: false })),
}));
