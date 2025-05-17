// components/CustomButton.tsx
import React from 'react';
import { Pressable, Text, StyleSheet, ViewStyle, TextStyle } from 'react-native';
import colors from '../constants/colors';

type Props = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
};

export default function CustomButton({ title, onPress, disabled, style, textStyle }: Props) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.button,
        disabled && styles.disabled,
        pressed && !disabled && styles.pressed,
        style,
      ]}
    >
      <Text style={[styles.text, disabled && styles.textDisabled, textStyle]}>
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
  },
  pressed: {
    backgroundColor: '#187bcd',
  },
  disabled: {
    backgroundColor: '#A9A9A9',
  },
  text: {
    color: colors.white,
    fontWeight: '600',
    fontSize: 16,
  },
  textDisabled: {
    color: '#eee',
  },
});
