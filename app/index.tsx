import { Link } from "expo-router";
import { View, Text, Button } from "react-native";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Pantalla Principal</Text>
      <Link href="/details">
        <Button title="Ir a Detalles" />
      </Link>
    </View>
  );
}