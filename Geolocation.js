import React, { Component } from "react";
import { Alert, AsyncStorage } from "react-native";

export async function findCoordinates() {
  navigator.geolocation.getCurrentPosition(
    position => {
      const location = JSON.stringify(position);
      AsyncStorage.setItem("location", JSON.stringify(location));
      // this.setState({ location });
    },
    error => Alert.alert(error.message),
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
  );
}

// export default findCoordinates;
