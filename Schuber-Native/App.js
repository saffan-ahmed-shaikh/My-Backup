import React, { useEffect } from "react";
import * as TaskManager from "expo-task-manager";
import * as Location from "expo-location";

import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function App() {
  const LOCATION_TASK_NAME = "background-location-task";
  useEffect(() => {
    const requestPermissions = async () => {
      const { status } = await Location.requestBackgroundPermissionsAsync();
      if (status === "granted") {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status === "granted") {
          await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
            accuracy: Location.Accuracy.Balanced,
            timeInterval: 10000,
            distanceInterval: 1, // Distance in metres
            foregroundService: {
              notificationTitle: "Live Tracker",
              notificationBody: "Live Tracker is on.",
            },
          });
        }
      }
    };
    requestPermissions();
  }, []);

  TaskManager.defineTask(LOCATION_TASK_NAME, ({ data, error }) => {
    if (error) {
      // Error occurred - check `error.message` for more details.
      return;
    }
    if (data) {
      const { locations } = data;
      console.log("Received new locations", locations);
      // do something with the locations captured in the background
    }
  });
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
