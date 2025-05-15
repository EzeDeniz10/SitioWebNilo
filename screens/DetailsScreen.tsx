import { useLocalSearchParams } from "expo-router";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import { Link } from "expo-router"; 

export default function DetailsScreen() {
  const params = useLocalSearchParams(); 

  return (
    <View style={styles.container}>
      <ImageBackground
        source={
          typeof params.image === "string"
            ? { uri: params.image }
            : undefined
        }
        style={styles.image}
      >
        <Text style={styles.title}>{params.title}</Text>
      </ImageBackground>
      <Text style={styles.description}>{params.description}</Text>

    
      <Link href="/">
        <Text style={{ color: "blue", fontSize: 18, marginTop: 20 }}>Volver a Inicio</Text>
      </Link>
    </View>
  );
}

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