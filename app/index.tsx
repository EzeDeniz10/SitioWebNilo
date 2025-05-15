import { Link } from "expo-router";
import { View, Text, Button } from "react-native";
import Container from "../components/Container";
import ResponsiveCard from "../components/ResponsiveCard";

export default function HomeScreen() {
  return (
    <Container>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>Pantalla Principal</Text>

        {/* ✅ Botón que lleva a detalles con datos */}
        <Link href="/details?title=Ejemplo&description=Este es un ejemplo&image=https://via.placeholder.com/200">
          <Button title="Ir a Detalles con Datos" />
        </Link>

        {/* ✅ Tarjeta que también lleva a detalles */}
        <Link href="/details">
          <ResponsiveCard />
        </Link>
      </View>
    </Container>
  );
}