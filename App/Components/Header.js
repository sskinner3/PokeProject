import React, { Component } from "react";
import { View, Text } from "react-native";

import styles from "./styles/HeaderStyles";

class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.text}</Text>
      </View>
    );
  }
}

export default Header;
