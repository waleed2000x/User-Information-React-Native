import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "./screens/HomeScreen";
import MapComponent from "./components/MapComponent";
import * as Location from "expo-location";
import { Button } from "react-native";

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const getLocationAsync = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location.coords);
  };

  return (
    <SafeAreaProvider>
      <HomeScreen />
      <Button title="Show My Location" onPress={getLocationAsync} />
      {location && (
        <MapComponent
          latitude={location.latitude}
          longitude={location.longitude}
        />
      )}
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
