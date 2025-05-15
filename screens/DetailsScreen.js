import React from "react";
import { View, Text, ImageBackground, StyleSheet, Button } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

const DetailsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { title, description, image } = route.params || {};

  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <Text style={styles.title}>{title}</Text>
      </ImageBackground>
      <Text style={styles.description}>{description}</Text>
      <Button title="Volver" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  image: {
    height: 200,
    marginBottom: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginTop: 140,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
});

export default DetailsScreen;
