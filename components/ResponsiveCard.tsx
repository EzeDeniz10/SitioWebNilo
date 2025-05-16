 import { Dimensions, StyleSheet, View, Text, Button } from "react-native";
import { router } from "expo-router";

const { width, height } = Dimensions.get("window"); // Obtiene dimensiones de pantalla

export default function ResponsiveCard() {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>Este componente se adapta al tamaño de pantalla </Text>
      <Text style={styles.text}>¡Haz clic para más detalles!</Text>
      <Button title="Detalles" onPress={() => router.back()} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: width * 0.9, // Hace que el componente use el 90% del ancho de pantalla
    height: height * 0.2, // Ocupa el 20% de la altura de la pantalla
    backgroundColor: "#f39c12",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  text: {
    fontSize: width * 0.05, // Tamaño de fuente proporcional al ancho de pantalla
    color: "#fff",
  },
}); 