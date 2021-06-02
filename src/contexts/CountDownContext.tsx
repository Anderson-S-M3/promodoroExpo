import React from "react";

interface CountDownContextProps {
  time: number;
  timer: number;
  minutos: number | string;
  segundos: number | string;

  active: boolean;
  pauseCountDown: () => void;
  startCountDown: () => void;
  restartCountDown: () => void;
}

export const CountDownContext = React.createContext(
  {} as CountDownContextProps
);

export function CountDownStorage({ children }: any) {
  const timer = 1 * 60;
  const [time, setTime] = React.useState(timer);
  const [active, setActive] = React.useState(false);

  let minutos: number | string = Math.floor(time / 60);
  let segundos: number | string = time % 60;

  if (minutos <= 9) {
    minutos = "0" + minutos;
  }
  if (segundos <= 9) {
    segundos = "0" + segundos;
  }

  let countDownRegress: ReturnType<typeof setTimeout>;

  function startCountDown() {
    setActive(true);
  }

  function pauseCountDown() {
    setActive(false);
    clearTimeout(countDownRegress);
  }

  function restartCountDown() {
    setTime(timer);
    clearTimeout(countDownRegress);
  }

  React.useEffect(() => {
    if (active && time > 0) {
      countDownRegress = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }
  }, [active, time]);

  return (
    <CountDownContext.Provider
      value={{
        time,
        timer,
        minutos,
        segundos,
        startCountDown,
        restartCountDown,
        active,
        pauseCountDown,
      }}
    >
      {children}
    </CountDownContext.Provider>
  );
}
