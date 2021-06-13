import React, { useState } from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";
import CounterText from "./components/CounterText";

export default function App() {
  let [count, setCount] = useState(0);

  function upButtonPressed() {
    setCount(++count);
  }

  function downButtonPressed() {
    setCount(--count);
  }

  function renderEncouragingText() {
    if (count > 30) return "Time to Stop";
    else if (count > 20) return "A bit more!";
    else if (count > 10) return "Keep Going!";
  }

  return (
    <View style={styles.container}>
      <Text style={styles.countText}> {count} </Text>
      <CounterText color="white" fontSize={10} bottomMargin={100}>
        {" "}
        {count}{" "}
      </CounterText>
      <CounterText color="blue" fontSize={20} bottomMargin={10}>
        {" "}
        {count}{" "}
      </CounterText>
      <CounterText color="black" fontSize={30} bottomMargin={15}>
        {" "}
        {count}{" "}
      </CounterText>
      <CounterText color="red" fontSize={40} bottomMargin={20}>
        {" "}
        {count}{" "}
      </CounterText>
      <TouchableOpacity onPress={upButtonPressed} style={styles.button}>
        <Text style={styles.buttonText}> Increase </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={downButtonPressed} style={styles.button}>
        <Text style={styles.buttonText}> Decrease </Text>
      </TouchableOpacity>
      <Text style={styles.encouragingText}> {renderEncouragingText()} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "grey",
  },
  countText: {
    fontSize: 40,
    color: "black",
    fontWeight: "bold",
  },
  encouragingText: {
    fontSize: 20,
    color: "white",
    marginTop: 50,
  },
  button: {
    backgroundColor: "red",
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: "black",
    fontSize: 20,
  },
});
