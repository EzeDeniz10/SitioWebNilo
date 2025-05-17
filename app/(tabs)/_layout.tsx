// app/(tabs)/_layout.tsx
import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: 'Inicio' }} />
      <Tabs.Screen name="explore" options={{ title: 'Explorar' }} />
    </Tabs>
  );
}
