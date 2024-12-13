import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { s } from "./App.style";
import { Header } from "./components/Header/Header";
import { CardTodo } from "./components/CardTodo/CardTodo";
import { useState } from "react";

// const TODO_LIST=[
//   {id: 1, title: "walk the dog", isCompleted: true},
//   {id: 2, title: "Go to the dentist", isCompleted: true},
//   {id: 3, title: "Learn react Native", isCompleted: false}
// ]

export default function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "walk the dog", isCompleted: true },
    { id: 2, title: "Go to the dentist", isCompleted: true },
    { id: 3, title: "Learn react Native", isCompleted: false },
    { id: 4, title: "walk the dog", isCompleted: true },
    { id: 5, title: "Go to the dentist", isCompleted: true },
    { id: 6, title: "Learn react Native", isCompleted: false },
    { id: 7, title: "walk the dog", isCompleted: true },
    { id: 8, title: "Go to the dentist", isCompleted: true },
    { id: 9, title: "Learn react Native", isCompleted: false },
  ]);

  function renderTodoList() {
    return todoList.map((todo) => (
      <View key={todo.id} style={s.cardItem}>
        <CardTodo onPress={updateTodo} todo={todo} />
      </View>
    ));
  }

  function updateTodo(todo) {
    const updatedTodo = { ...todo, isCompleted: !todo.isCompleted };
    console.log(" todo.title " + todo.isCompleted);
    console.log(" todo.title " + todo.title);

    console.log("updatedTodo.isCompleted linje 36 " + updatedTodo.isCompleted);
    console.log("updatedTodo.title linje 36 " + updatedTodo.title);

    const updatedTodoList = [...todoList];
    console.log("updatedTodoList.length linje 41 " + updatedTodoList.length);

    const indexToUpdate = updatedTodoList.findIndex(
      (t) => t.id === updatedTodo.id
    );
    console.log("indexToUpdate  " + indexToUpdate);

    updatedTodoList[indexToUpdate] = updatedTodo;

    console.log(
      "updatedTodoList[indexToUpdate]  " +
        updatedTodoList[indexToUpdate].isCompleted
    );

    setTodoList(updatedTodoList);

    console.log("updatedetodo.title linje " + updatedTodo.title);
  }

  return (
    <>
      <SafeAreaProvider>
        <SafeAreaView style={s.app}>
          <View style={s.header}>
            <Header></Header>
          </View>
          <View style={s.body}>
            <ScrollView>{renderTodoList()}</ScrollView>
          </View>
          <View></View>
        </SafeAreaView>
      </SafeAreaProvider>
      <View style={s.footer}>
        <Text>Footer</Text>
      </View>
    </>
  );
}
