import React from "react";
import { connect } from "react-redux";
import { View, FlatList } from "react-native";

import { getList } from "../Actions/DexAction";

import Header from "../Components/Header";
import DexListItem from "../Components/DexListItem";

import styles from "./styles/HomeScreenStyles";

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getList();
  }

  handleItemPress = (evt, index) => {
    console.log(index);
    this.props.navigation.navigate("PokeScreen", {
      index: index,
    });
  };

  renderPokeItem = ({ item, index }) => {
    return (
      <DexListItem
        onPress={this.handleItemPress}
        item={item}
        index={index + 1}
      />
    );
  };

  keyExtractor = (item, index) => `${index}`;

  render() {
    return (
      <View style={styles.container}>
        <Header text="Dex" />
        <FlatList
          data={this.props.data}
          renderItem={this.renderPokeItem}
          keyExtractor={this.keyExtractor}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  fetching: state.dexReducer.fetching,
  data: state.dexReducer.data,
  error: state.dexReducer.error,
});

const mapDispatchToProps = dispatch => ({
  getList: () => dispatch(getList()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
