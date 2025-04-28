import { useFonts } from "expo-font";
import Svg, { Path, SvgProps } from "react-native-svg";
import React from "react";
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
import { useAuthStore } from "@/hooks/useAuth";

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
  const user = useAuthStore();

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <Image
              style={styles.avatar}
              source={{ uri: "https://picsum.photos/id/7/200" }}
            />
            <Text style={styles.fullName}>{user.user?.name}</Text>
            <Text style={styles.shortBio}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              ultricies dictum risus, a bibendum sem molestie non. Etiam porta
              lectus quis suscipit cursus. Nulla quis ligula vel elit eleifend
              mattis at id mauris. Integer euismod sapien erat, id congue felis
              posuere ac. Proin in nibh ut quam maximus feugiat in ac lectus.
              Quisque facilisis eleifend metus in accumsan. Aenean condimentum
              ante enim, vitae malesuada elit volutpat vel.
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 16,
                width: "100%",
              }}
            >
              <TouchableOpacity style={styles.buttonFollow}>
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "inherit",
                    textAlign: "center",
                  }}
                >
                  Follow
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.buttonShare}>
                <Text style={{ fontWeight: "bold", color: "inherit" }}>
                  <ShareIcon width={16} height={16} />
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.content}>
          <View
            style={{
              width: 150,
              backgroundColor: "#b33c34",
              borderRadius: 8,
              padding: 32,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <Text
              style={{
                fontSize: 32,
                color: "white",
                textAlign: "center",
              }}
            >
              10K
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: "#ffffff90",
                textAlign: "center",
              }}
            >
              Likes
            </Text>

            <View
              style={{
                borderWidth: 1,
                borderColor: "#ffffff90",
                marginVertical: 48,
              }}
            />

            <Text
              style={{
                fontSize: 32,
                color: "white",
                textAlign: "center",
              }}
            >
              641
            </Text>

            <Text
              style={{
                fontSize: 16,
                color: "#ffffff90",
                textAlign: "center",
              }}
            >
              Following
            </Text>

            <View
              style={{
                borderWidth: 1,
                borderColor: "#ffffff90",
                marginVertical: 48,
              }}
            />

            <Text
              style={{
                fontSize: 32,
                color: "white",
                textAlign: "center",
              }}
            >
              2.1k
            </Text>
            <Text
              style={{
                fontSize: 16,
                color: "#ffffff90",
                textAlign: "center",
              }}
            >
              Followers
            </Text>
          </View>

          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontSize: 16,
                color: "black",
                fontWeight: "bold",
                marginBottom: 16,
              }}
            >
              Friends
            </Text>

            <View>
              <FlatList
                data={dataDummy}
                horizontal
                ItemSeparatorComponent={() => <View style={{ width: 20 }} />}
                renderItem={({ item }) => (
                  <Image
                    style={styles.avatar}
                    source={{ uri: item.avatarUrl }}
                  />
                )}
              />
            </View>

            <Text
              style={{
                fontSize: 16,
                color: "black",
                fontWeight: "bold",
                marginBottom: 16,
              }}
            >
              Gallery
            </Text>
            <View>
              <FlatList
                data={dataDummy}
                numColumns={2}
                style={styles.flatlistGrid}
                ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
                renderItem={({ item, index }) => (
                  <View
                    style={[
                      index % 2 !== 0 && {
                        borderLeftWidth: 20,
                        borderLeftColor: "transparent",
                      },
                    ]}
                  >
                    <Image
                      style={styles.gridItem}
                      source={{ uri: item.avatarUrl }}
                    />
                  </View>
                )}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const ShareIcon = (props: SvgProps) => (
  <Svg viewBox="0 0 512 512" {...props}>
    <Path
      fill="currentColor"
      d="M503.7 189.8L327.7 37.9C312.3 24.5 288 35.3 288 56v80.1C127.4 137.9 0 170.1 0 322.3c0 61.4 39.6 122.3 83.3 154.1 13.7 9.9 33.1-2.5 28.1-18.6C66.1 312.8 132.9 274.3 288 272.1V360c0 20.7 24.3 31.5 39.7 18.2l176-152c11.1-9.6 11.1-26.8 0-36.3z"
    />
  </Svg>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    display: "flex",
    alignItems: "center",
    gap: 24,
  },
  flatlist: {
    padding: 16,
  },
  flatlistGrid: {
    flex: 1,
    height: 250,
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
    shadowRadius: 40,
    elevation: 15,
  },
  content: {
    display: "flex",
    maxWidth: 400,
    flexDirection: "row",
    gap: 16,
    width: "100%",
    height: 430,
  },
  buttonFollow: {
    backgroundColor: "#0a7ea4",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 4,
    textAlign: "center",
    color: "white",
    flex: 1,
  },
  buttonShare: {
    backgroundColor: "#bde5f2",
    color: "#0a7ea4",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 4,
    textAlign: "center",
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
  },
  gridItem: {
    width: 100,
    height: 100,
    borderRadius: 24,
  },
});
