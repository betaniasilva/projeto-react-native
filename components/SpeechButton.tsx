import React, { useEffect, useState } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import * as Speech from "expo-speech";
import { Colors, Spacing, Typography } from "../constants/Theme";

type Props = {
  text: string;
  label?: string;
};

export default function SpeechButton({ text, label = "Ler página" }: Props) {
  const [speaking, setSpeaking] = useState(false);

  useEffect(() => {
    // Ensure speech is stopped when component unmounts
    return () => {
      Speech.stop();
    };
  }, []);

  const handlePress = () => {
    if (!text) return;

    if (speaking) {
      Speech.stop();
      setSpeaking(false);
      return;
    }

    // Start speaking and update state when done/stopped
    Speech.speak(text, {
      onDone: () => setSpeaking(false),
      onStopped: () => setSpeaking(false),
    });
    setSpeaking(true);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[styles.button, speaking ? styles.buttonActive : null]}
      accessibilityLabel={label}
    >
      <Text style={styles.text}>{speaking ? "Parar leitura" : label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.nightLight,
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.md,
    borderRadius: 8,
    alignSelf: "flex-start",
    marginTop: Spacing.sm,
  },
  buttonActive: {
    backgroundColor: Colors.pipoca,
  },
  text: {
    color: Colors.textPrimary,
    fontFamily: "Inter_400Regular",
    fontSize: Typography.fontSize.base,
  },
});
