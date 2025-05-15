import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import CustomCard from '../components/CustomCard';
import cardsData, { CardItem } from '../data/cardsData';
import ParallaxScrollView from '../components/ParallaxScrollView';
import { RootStackParamList } from '../navigation/types';

// Definir la tipificación de la navegación
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'HomeScreen'>;

const HomeScreen: React.FC = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const goToDetails = (item: CardItem) => {
    navigation.navigate('DetailsScreen', {
      title: item.title,
      description: item.description,
      image: item.image,
    });
  };

  return (
    <View style={styles.container}>
      <ParallaxScrollView>
        {cardsData.map((item) => (
          <CustomCard key={item.id} {...item} onPress={() => goToDetails(item)} />
        ))}
      </ParallaxScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
});

export default HomeScreen;