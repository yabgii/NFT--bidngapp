import { StatusBar } from "react-native";
import React from "react";
import { useIsFocused } from "@react-navigation/native";

const FocusedStatBar = (props) => {
  const isFocused = useIsFocused();
  return isFocused ? <StatusBar animated={true} {...props} /> : null;
};

export default FocusedStatBar;
