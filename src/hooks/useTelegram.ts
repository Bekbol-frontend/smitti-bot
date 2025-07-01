import { useCallback } from "react";

const tg = window.Telegram.WebApp;

export const useTelegram = () => {
  const close = useCallback(() => {
    tg.close();
  }, []);

  const onToggleButton = useCallback(() => {
    if (tg.MainButton.isVisible) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  }, []);

  return {
    close,
    onToggleButton,
    tg,
  };
};
