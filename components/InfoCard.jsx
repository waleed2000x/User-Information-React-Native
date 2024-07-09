import React from "react";
import { View, Text, StyleSheet } from "react-native";

const InfoCard = ({ ipInfo }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>IP Address: {ipInfo.ip}</Text>
      <Text style={styles.text}>
        Location: {ipInfo.city}, {ipInfo.region}, {ipInfo.country}
      </Text>
      <Text style={styles.text}>Coordinates: {ipInfo.loc}</Text>
      <Text style={styles.text}>ISP: {ipInfo.org}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    width: "100%",
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default InfoCard;
