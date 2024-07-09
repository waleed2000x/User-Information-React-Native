import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import InfoCard from "../components/InfoCard";
import axios from "axios";

const HomeScreen = () => {
  const [loading, setLoading] = useState(true);
  const [ipInfo, setIpInfo] = useState(null);

  useEffect(() => {
    axios
      .get("https://ipinfo.io/json")
      .then((response) => {
        console.log(response.data);
        setIpInfo(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching IP information:", error);
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={[styles.container, styles.loadingContainer]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your IP Information</Text>
      {ipInfo && <InfoCard ipInfo={ipInfo} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  loadingContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default HomeScreen;
