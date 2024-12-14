import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { s } from "./App.style";
import { Header } from "./components/Header/Header";
import { CardTodo } from "./components/CardTodo/CardTodo";
import { useState } from "react";
import { TapBottonMenu } from "./components/TabBottonMenu/TabBottonMenu";

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

  const [selectedTabName, setSelectedtabName] = useState("done");

  function getFilteredList() {
    switch (selectedTabName) {
      case "all":
        return todoList;
      case "inProgress":
        return todoList.filter((todo) => todo.isCompleted === false);
      case "done":
        return todoList.filter((todo) => todo.isCompleted === true);
    }
  }

  function deleteTodo(todoToDelete) {
    Alert.alert("Delete todo", "Are you sure you want to delete this todo ?", [
      {
        text: "Delete",
        style: "destructive",
        onPress: () => {
          setTodoList(todoList.filter((t) => t.id !== todoToDelete.id));
        },
      },
      { text: "Cancel", style: "cancel" },
    ]);
  }

  function renderTodoList() {
    return getFilteredList().map((todo) => (
      <View key={todo.id} style={s.cardItem}>
        <CardTodo LongPress={deleteTodo} onPress={updateTodo} todo={todo} />
      </View>
    ));
  }

  function updateTodo(todo) {
    const updatedTodo = { ...todo, isCompleted: !todo.isCompleted };
    const updatedTodoList = [...todoList];
    const indexToUpdate = updatedTodoList.findIndex(
      (t) => t.id === updatedTodo.id
    );
    updatedTodoList[indexToUpdate] = updatedTodo;
    setTodoList(updatedTodoList);
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
        <TapBottonMenu
          todoList={todoList}
          onPress={setSelectedtabName}
          selectedTabName={selectedTabName}
        ></TapBottonMenu>
      </View>
    </>
  );
}
