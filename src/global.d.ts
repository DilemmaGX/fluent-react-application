export {};

declare global {
  interface Window {
    electronAPI: {
      minimize: () => void;
      maximize: () => void;
      unmaximize: () => void;
      close: () => void;
      isMaximized: () => Promise<boolean>;
      onMaximizeState: (callback: (isMaximized: boolean) => void) => void;
    };
  }
}