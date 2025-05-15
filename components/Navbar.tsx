
import React, { useRef } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';

const Navbar = () => {
  const translateY = useRef(new Animated.Value(0)).current;

  return (
    <Animated.View style={[styles.navbar, { transform: [{ translateY }] }]}>
      <Text style={styles.title}>Sitio Nilo</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: '#1E90FF',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 100,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Navbar;
