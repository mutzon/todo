import { Text, TouchableOpacity, View } from "react-native";
import { s } from "./TapBottonMenu.style";

export function TapBottonMenu({ selectedTabName, onPress }) {
  function getTextStyle(tabName) {
    return {
      fontWeight: "bold",
      color: selectedTabName === tabName ? "#2F76E5" : "black",
    };
  }
  return (
    <View style={s.root}>
      <TouchableOpacity onPress={() => onPress("all")}>
        <Text style={getTextStyle("all")}>all</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onPress("inProgress")}>
        <Text style={getTextStyle("inProgress")}>In Progress</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onPress("done")}>
        <Text style={getTextStyle("done")}>Done</Text>
      </TouchableOpacity>
    </View>
  );
}
