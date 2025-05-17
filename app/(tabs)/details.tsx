import { useLocalSearchParams, useRouter } from "expo-router";
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity } from "react-native";

export default function DetailsScreen() {

  const params = useLocalSearchParams(); 
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={typeof params.image === "string" ? { uri: params.image } : undefined}
        style={styles.image}
      >
        <Text style={styles.title}>{params.title ?? "Sin título"}</Text>
      </ImageBackground>

      <Text style={styles.description}>{params.description ?? "Sin descripción"}</Text>

      <TouchableOpacity onPress={() => router.replace("/")}>
        <Text style={{ color: "blue", fontSize: 18, marginTop: 20 }}>Volver a Inicio</Text>
      </TouchableOpacity>
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