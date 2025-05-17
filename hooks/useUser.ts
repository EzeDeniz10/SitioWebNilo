// hooks/useUser.ts
import { useState, useEffect } from "react";

type User = {
  id: string;
  name: string;
  email: string;
};

export default function useUser() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Simulación de una "carga de usuario" (como si viniera de una API)
    setTimeout(() => {
      setUser({
        id: "1",
        name: "Juan Pérez",
        email: "juan@example.com",
      });
    }, 1000);
  }, []);

  return { user };
}
