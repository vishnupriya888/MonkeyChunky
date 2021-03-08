import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

class AppHeader extends React.Component {
  render() {
    return (
      <View style={styles.textContainer}>
        <Text style={styles.text}>Monkey Chunky</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer: {
    backgroundColor: "red",
  },
  text: {
    color: "white",
    padding: 10,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 30,
  },
});

export default AppHeader;
