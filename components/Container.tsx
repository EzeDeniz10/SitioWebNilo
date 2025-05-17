import { View, StyleSheet, useWindowDimensions } from "react-native";
import { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
  const { width } = useWindowDimensions();

  return <View style={[styles.container, { width: width * 0.95 }]}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "center",
    padding: 16,
    backgroundColor: "#f5f5f5",
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
});