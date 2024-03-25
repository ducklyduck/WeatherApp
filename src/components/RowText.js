import React from "react";
import { View, Text } from "react-native";

const RowText = (props) => {
  const { containerStyles, textOneStyles, textTwoStyles,textOne, textTwo} = props
  return (
    <View style={containerStyles}>
      <Text style={textOneStyles}>{textOne}</Text>
      <Text style={textTwoStyles}>{textTwo}</Text>
    </View>
  )
}

export default RowText