import React from "react";
import { TouchableOpacity, View } from "react-native";
import Svg, { Path } from "react-native-svg";

import styles from "./styles/buttonsStyle";

interface IOnPress {
  onPress?: () => void;
}

export default function ResetButton({ onPress }: IOnPress) {
  return (
    <View>
      <TouchableOpacity style={styles.iconsContainer} onPress={onPress}>
        <Svg style={styles.icons} width={48} height={48} viewBox="0 0 512 512">
          <Path
            fill="currentColor"
            d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111
            248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200
            200S56 366.5 56 256zm296-80v160c0 8.8-7.2 16-16 
            16H176c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h160c8.8 0 16 7.2 16 16z"
          />
        </Svg>
      </TouchableOpacity>
    </View>
  );
}