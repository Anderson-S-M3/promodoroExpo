import React from "react";
import { Vibration } from "react-native";
import { sucessSong } from "../utils/songs";

interface CountDownContextProps {
  time: number;
  timer: number;
  minutos: number | string;
  segundos: number | string;

  active: boolean;
  startCountDown: () => void;
  restartCountDown: () => void;
}

export const CountDownContext = React.createContext(
  {} as CountDownContextProps
);

export function CountDownStorage({ children }: any) {
  const timer = 25 * 60;
  const [time, setTime] = React.useState<number>(timer);
  const [active, setActive] = React.useState<boolean>(false);

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

  function restartCountDown() {
    setTime(timer);
    setActive(false);
    clearTimeout(countDownRegress);
  }

  React.useEffect(() => {
    if (active && time > 0) {
      countDownRegress = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }
    if (active && time == 0) {
      Vibration.vibrate(
        [0.3 * 1000, 0.3 * 1000, 0.3 * 1000, 0.3 * 1000, 1 * 1000],
        false
      );
      sucessSong();
    } else Vibration.cancel();
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
      }}
    >
      {children}
    </CountDownContext.Provider>
  );
}
