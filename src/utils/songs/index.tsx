import { Audio } from "expo-av";

export async function sucessSong() {
  const { sound }: any = await Audio.Sound.createAsync(
    require("../songs/audio/sucess.mpeg")
  );

  sound.playAsync();
}
