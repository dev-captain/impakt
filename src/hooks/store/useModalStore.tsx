import { Videos } from 'data';
import create, { SetState } from 'zustand';

type ModalStore = {
  modal: {
    showPlayer?: boolean;
    path?: string;
    hideButtons?: boolean;
    isYoutubeVideo?: boolean;
    youtubeUrl?: string;
  };
  show: boolean;

  setImpaktGames: (value: boolean) => void;
  setBurnAndEarn: () => void;
  setComputerVision: () => void;
  setBurnEarnNft: () => void;
  toggleShow: () => void;
  onClose: () => void;
};

const useModalStore = create<ModalStore>((set: SetState<ModalStore>) => ({
  modal: {},
  show: false,

  onClose: () => set((state) => ({ ...state, show: false, modal: {} })),
  toggleShow: () => set((state) => ({ show: !state.show })),
  setImpaktGames: () =>
    set((state) => ({
      ...state,
      show: true,
      modal: {
        path: Videos.impaktGames,
      },
    })),
  setBurnAndEarn: () =>
    set((state) => ({
      ...state,
      show: true,
      modal: {
        showPlayer: false,
        hideButtons: true,
        isYoutubeVideo: true,
        youtubeUrl: 'https://www.youtube.com/embed/vEhIeYY-CJc',
      },
    })),
  setComputerVision: () =>
    set((state) => ({
      ...state,
      show: true,
      modal: {
        showPlayer: false,
        hideButtons: true,
        isYoutubeVideo: true,
        youtubeUrl: 'https://www.youtube.com/embed/8yNNFJh134Y',
      },
    })),
  setBurnEarnNft: () =>
    set((state) => ({
      ...state,
      show: true,
      modal: {
        showPlayer: false,
        hideButtons: true,
        isYoutubeVideo: true,
        youtubeUrl: 'https://www.youtube.com/embed/vEhIeYY-CJc',
      },
    })),
}));

export default useModalStore;
