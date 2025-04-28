import { useFonts } from "expo-font";
import React from "react";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import "react-native-reanimated";

import { View } from "react-native";
import { useRouter } from "expo-router";
import { useAuthStore } from "@/hooks/useAuth";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function HomePage() {
  const router = useRouter();
  const user = useAuthStore();

  const [username, setUsername] = React.useState("");

  const handleLogin = () => {
    user.login({
      id: "1",
      name: username,
      email: "john@doe.com",
    });
    router.push({ pathname: "/profile" });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChange={(e) => setUsername(e.nativeEvent.text)}
        value={username}
      />
      <TouchableOpacity style={styles.button} onFocus={handleLogin}>
        <Text style={{ fontWeight: "bold", color: "white" }}>Follow</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    display: "flex",
    alignItems: "center",
    gap: 24,
  },
  input: {
    height: 50,
    width: 300,
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
  },
  button: {
    backgroundColor: "#0a7ea4",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 4,
    textAlign: "center",
    color: "white",
  },
});
