import React, { Component } from "react";
import { AppRegistry, Button, TextInput, View, Text } from "react-native";
import * as contactAccessor from "../manageContacts";

export default class UselessTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contact1: "",
      contact2: "",
      contact3: "",
      contact4: "",
      contact5: ""
    };

    this.loadContacts = this.loadContacts.bind(this);
    this.saveContacts = this.saveContacts.bind(this);
  }

  async saveContacts() {
    await contactAccessor.saveContacts(this.state);
    this.props.navigation.navigate("HomeStack");
  }
  componentDidMount() {
    this.loadContacts();
  }

  async loadContacts() {
    var contacts = await contactAccessor.getContacts(this.state);
    this.setState({ ...contacts });
  }
  render() {
    return (
      <View>
        <Text>Contact 1:</Text>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={text => this.setState({ contact1: text })}
          value={this.state.contact1}
          // maxLength = {10}
          // placeholder = {"Enter contact number"}
          // textContentType = {"telephoneNumber"}
        />
        <Text>Contact 2:</Text>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={text => this.setState({ contact2: text })}
          value={this.state.contact2}
        />
        <Text>Contact 3:</Text>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={text => this.setState({ contact3: text })}
          value={this.state.contact3}
        />
        <Text>Contact 4:</Text>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={text => this.setState({ contact4: text })}
          value={this.state.contact4}
        />
        <Text>Contact 5:</Text>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={text => this.setState({ contact5: text })}
          value={this.state.contact5}
        />
        <Button
          onPress={this.saveContacts}
          title="Save"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}
