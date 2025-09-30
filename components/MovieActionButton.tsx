import React from "react";
import { StyleSheet, Text, TouchableOpacity, ViewStyle } from "react-native";
import { BorderRadius, Colors, Spacing, Typography } from "../constants/Theme";

export type MovieActionButtonProps = {
  label: string;
  onPress?: () => void;
  icon?: string;
  style?: ViewStyle;
  accessibilityLabel?: string;
};

export default function MovieActionButton({
  label,
  onPress,
  icon,
  style,
  accessibilityLabel,
}: MovieActionButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, style]}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel ?? label}
      activeOpacity={0.85}
    >
      <Text style={styles.label}>
        {icon ? `${icon} ` : ""}
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.nightLight,
    paddingVertical: Spacing.lg,
    paddingHorizontal: Spacing.lg,
    borderRadius: BorderRadius.lg,
    borderWidth: 1,
    borderColor: Colors.textMuted,
  },
  label: {
    textAlign: "center",
    color: Colors.textPrimary,
    fontSize: Typography.fontSize.base,
    fontFamily: "Poppins_600SemiBold",
  },
});
