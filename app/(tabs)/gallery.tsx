import { Image, StyleSheet, Platform } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";
import React from "react";

export default function GalleryScreen() {
  const [count, setCount] = React.useState(10);
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.stepContainer}>
        <ThemedView style={styles.grid}>
          {new Array(count).fill(null).map((_, index) => (
            <ImageViewer
              key={index}
              style={{
                width: "20%",
                height: 400,
              }}
              source={require("@/assets/images/react-logo.png")}
            />
          ))}
        </ThemedView>

        <Button title="Add more" onPress={() => setCount(count + 10)} />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
  grid: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
