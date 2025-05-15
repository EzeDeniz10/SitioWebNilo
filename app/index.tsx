import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import Navbar from '../components/Navbar';
import CustomCard from '../components/CustomCard';
import cardsData from '../data/cardsData'; 

export default function Home() {
  return (
    <View style={styles.container}>
      <Navbar />
      <ScrollView contentContainerStyle={styles.scroll}>
        {cardsData.map((item) => (
          <CustomCard
            key={item.id} 
            title={item.title}
            description={item.description}
            image={item.image}
            onPress={() => console.log(`Abriendo ${item.title}`)}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    paddingTop: 60,
    padding: 16,
  },
});