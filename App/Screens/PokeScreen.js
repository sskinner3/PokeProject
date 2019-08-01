import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

import { getPoke } from "../Actions/PokeAction";

import Header from "../Components/Header";

import styles from "./styles/PokeScreenStyles";

class PokeScreen extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const index = this.props.navigation.getParam("index", 0);
    this.props.getPoke(index);
  }

  render() {
    return (
      <View style={styles.container}>
        <Header text={this.props.poke ? this.props.poke.name : ""} />
        <Text>In PokeScreen</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  poke: state.pokeReducer.poke,
});

const mapDispatchToProps = dispatch => ({
  getPoke: index => dispatch(getPoke(index)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokeScreen);
