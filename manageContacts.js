import { AsyncStorage } from "react-native";

getData = async () => {
  try {
    await AsyncStorage.setItem("@MySuperStore:key", "I like to save it.");
  } catch (error) {
    // Error saving data
  }
};

getData = async () => {
  try {
    await AsyncStorage.setItem("@MySuperStore:key", "I like to save it.");
  } catch (error) {
    // Error saving data
  }
};
