import { Audio } from "expo-av";

export async function sucessSong() {
  const { sound }: any = await Audio.Sound.createAsync(
    require("../../../assets/audio/sucess.mpeg")
  );

  sound.playAsync();
}
