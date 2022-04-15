import create, { SetState } from 'zustand';
// import { Videos } from 'data';

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
  setDownloadPage: () => void;
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
        showPlayer: false,
        hideButtons: true,
        isYoutubeVideo: true,
        youtubeUrl: 'https://www.youtube.com/embed/8yNNFJh134Y',
      },
    })),

  // setImpaktGames: () =>
  //   set((state) => ({
  //     ...state,
  //     show: true,
  //     modal: {
  //       path: Videos.impaktGames,
  //     },
  //   })),

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
  setDownloadPage: () =>
    set((state) => ({
      ...state,
      show: true,
      modal: {
        showPlayer: false,
        hideButtons: true,
        isYoutubeVideo: true,
        youtubeUrl: 'https://www.youtube.com/watch/5CIwd9Fj-w0',
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
