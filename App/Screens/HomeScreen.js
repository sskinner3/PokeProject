import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <TouchableOpacity onPress={this.props.getList}>
          <Text>GET!</Text>
        </TouchableOpacity>
        {this.props.list.length > 0 && <Text>{this.props.list[0]}</Text>}
      </View>
    );
  }
}

export default HomeScreen;
