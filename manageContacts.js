import { AsyncStorage } from "react-native";

export async function saveContacts(contacts) {
  try {
    console.log(
      `This is what is passed into "saveContacts": ${JSON.stringify(
        contacts["contact1"]
      )}`
    );
    await AsyncStorage.setItem("contacts", JSON.stringify(contacts));
    console.log("CONTACTS FROM get item");
    console.log(
      `This is what was saved ${await AsyncStorage.getItem("contacts")}`
    );
  } catch (error) {
    // Error saving data
  }
}

export async function getContacts() {
  try {
    var contacts = await AsyncStorage.getItem("contacts");
    return JSON.parse(contacts);
  } catch (error) {
    // Error saving data
  }
}
