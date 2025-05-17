import { View, Text, StyleSheet } from 'react-native';
import useUser from '../../hooks/useUser';
import CustomButton from '../../components/CustomButton';

export default function HomeScreen() {
  const { user } = useUser();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pantalla Principal</Text>
      {user ? (
        <>
          <Text style={styles.subtitle}>¡Bienvenido, {user.name}!</Text>
          <Text>{user.email}</Text>
        </>
      ) : (
        <Text>Cargando usuario...</Text>
      )}

      <CustomButton
        title="Presioname"
        onPress={() => console.log('Botón presionado')}
        style={{ marginTop: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 8,
  },
});
