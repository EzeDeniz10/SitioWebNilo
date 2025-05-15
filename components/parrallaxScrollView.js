import React, { useRef } from "react";
import { Animated, ScrollView, View, Image, StyleSheet } from "react-native";

export default function ParallaxScrollView({ children }) {
  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <ScrollView
      contentContainerStyle={styles.scrollView}
      scrollEventThrottle={16}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        { useNativeDriver: false }
      )}
    >
      <Animated.Image
        source={require("../assets/images/background.jpg")}
        style={[
          styles.image,
          {
            transform: [
              {
                translateY: scrollY.interpolate({
                  inputRange: [0, 300],
                  outputRange: [0, -150], // Efecto parallax
                  extrapolate: "clamp",
                }),
              },
            ],
          },
        ]}
      />
      <View style={styles.content}>{children}</View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
  },
  image: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
  },
  content: {
    padding: 16,
  },
});
