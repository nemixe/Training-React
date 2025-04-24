import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import "react-native-reanimated";

import { FlatList, View } from "react-native";

const dataDummy = [
  {
    fullName: "John Doe",
    jobTitle: "CEO",
    shortBio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
    avatarUrl: "https://picsum.photos/id/1/200",
  },
  {
    fullName: "Jane Doe",
    jobTitle: "CTO",
    shortBio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
    avatarUrl: "https://picsum.photos/id/2/200",
  },
  {
    fullName: "Bob Smith",
    jobTitle: "Developer",
    shortBio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
    avatarUrl: "https://picsum.photos/id/3/200",
  },
  {
    fullName: "Alice Brown",
    jobTitle: "Designer",
    shortBio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
    avatarUrl: "https://picsum.photos/id/4/20",
  },
  {
    fullName: "John Doe",
    jobTitle: "CEO",
    shortBio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
    avatarUrl: "https://picsum.photos/id/5/200",
  },
  {
    fullName: "Jane Doe",
    jobTitle: "CTO",
    shortBio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
    avatarUrl: "https://picsum.photos/id/6/200",
  },
  {
    fullName: "Bob Smith",
    jobTitle: "Developer",
    shortBio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
    avatarUrl: "https://picsum.photos/id/7/200",
  },
  {
    fullName: "Alice Brown",
    jobTitle: "Designer",
    shortBio:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
    avatarUrl: "https://picsum.photos/id/8/20",
  },
];

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <FlatList
      data={dataDummy}
      ItemSeparatorComponent={() => <View style={{ height: 50 }} />}
      style={styles.flatlist}
      renderItem={({ item }) => (
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <Image style={styles.avatar} source={{ uri: item.avatarUrl }} />
            <Text style={styles.fullName}>{item.fullName}</Text>
            <Text style={styles.jobTitle}>{item.jobTitle}</Text>
            <Text style={styles.shortBio}>{item.shortBio}</Text>
            <TouchableOpacity style={styles.button}>
              <Text style={{ fontWeight: "bold", color: "white" }}>Follow</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    display: "flex",
    alignItems: "center",
  },
  flatlist: {
    padding: 16,
  },
  cardContainer: { display: "flex", alignItems: "center" },
  card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    display: "flex",
    maxWidth: 400,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  button: {
    backgroundColor: "#0a7ea4",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 4,
    textAlign: "center",
    color: "white",
  },
  fullName: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 16,
  },
  jobTitle: {
    fontSize: 16,
    color: "#888",
  },
  shortBio: {
    fontSize: 14,
    color: "#888",
    marginBottom: 16,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 16,
  },
});
