const tg = window.Telegram.WebApp;

export const useTelegram = () => {
  const close = () => {
    tg.close();
  };

  return {
    close,
    tg,
  };
};
