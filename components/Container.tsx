import { View, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window"); // Obtiene ancho de pantalla dinámicamente

export default function Container({ children }) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width * 0.95, // Ocupa el 95% del ancho de pantalla
    alignSelf: "center", // Centra el contenedor
    padding: 16, // Espaciado interno
    backgroundColor: "#f5f5f5", // Color de fondo neutro
    borderRadius: 12, // Bordes redondeados
    shadowColor: "#000", // Sombra para dar profundidad
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3, // Sombra en Android
  },
});