import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";

import styles from "./styles/DexListItemStyles";

class DexListItem extends Component {
  handleInnerPress = evt => {
    this.props.onPress(evt, this.props.index);
  };

  render() {
    return (
      <TouchableOpacity
        onPress={this.handleInnerPress}
        style={styles.container}
      >
        <View style={styles.numberContainer}>
          <Text style={styles.number}>{this.props.index}</Text>
        </View>
        <Text style={styles.title}>{this.props.item.name}</Text>
      </TouchableOpacity>
    );
  }
}

export default DexListItem;
