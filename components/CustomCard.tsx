import React from 'react';
import { Pressable, ImageBackground, StyleSheet, Text } from 'react-native';

interface CustomCardProps {
  title: string;
  description: string;
  image: any;
  onPress: () => void;
}

const CustomCard: React.FC<CustomCardProps> = ({ title, image, onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.card}>
      <ImageBackground source={image} style={styles.image}>
        <Text style={styles.title}>{title}</Text>
      </ImageBackground>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
    borderRadius: 12,
    overflow: 'hidden',
  },
  image: {
    height: 150,
    justifyContent: 'flex-end',
    padding: 12,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default CustomCard;