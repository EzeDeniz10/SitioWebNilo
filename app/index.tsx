import { View, Text, Button } from "react-native";
import { Link } from "expo-router";

export default function HomeScreen() {
  return (
    <View>
      <Text>Pantalla Principal</Text>
      <Link href="/details">
        <Button title="Ir a Detalles" />
      </Link>
    </View>
  );
}