import React from 'react';
import { Pressable, ImageBackground, StyleSheet, Text} from 'react-native';

interface CustomCardProps {
  title: string;
  description: string;
  image: { uri: string };
  onPress: () => void;
}

const CustomCard: React.FC<CustomCardProps> = ({ title, description, image, onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.card}>
      <ImageBackground source={image} style={styles.image}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text> 
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
  description: {
    color: '#fff',
    fontSize: 12,
    marginTop: 4,
  },
});

export default CustomCard;