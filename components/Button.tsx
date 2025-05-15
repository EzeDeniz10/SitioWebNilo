import React from 'react';
import { Pressable, Text, StyleSheet, ViewStyle } from 'react-native';

type Props = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
};

export default function Button({ title, onPress, disabled }: Props) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        styles.button,
        disabled && styles.disabled,
        pressed && !disabled && styles.pressed,
      ] as ViewStyle[]}
    >
      <Text style={[styles.text, disabled && styles.textDisabled]}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#1E90FF',
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
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  textDisabled: {
    color: '#eee',
  },
});