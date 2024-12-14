import { Text, TouchableOpacity, Image } from "react-native";
import { s } from "./CardTodo.style";
import checkImg from "../../assets/check.png";

export function CardTodo({ todo, onPress, LongPress }) {
  return (
    <TouchableOpacity
      onLongPress={() => LongPress(todo)}
      style={s.card}
      onPress={() => onPress(todo)}
    >
      <Text
        style={[
          s.title,
          todo.isCompleted && { textDecorationLine: "line-through" },
        ]}
      >
        {todo.title}
      </Text>
      {todo.isCompleted && <Image style={s.img} source={checkImg}></Image>}
    </TouchableOpacity>
  );
}
