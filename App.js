
import { StyleSheet, Text, View } from 'react-native';
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context"
import {s} from "./App.style"
import { Header } from './components/Header/Header';
import { CardTodo } from './components/CardTodo/CardTodo';

const TODO_LIST=[
  {id: 1, title: "walk the dog", isCompleted: true},
  {id: 2, title: "Go to the dentist", isCompleted: true},
  {id: 3, title: "Learn react Native", isCompleted: false}
]

export default function App() {
  return ( 
  
  <>
  <SafeAreaProvider>
    <SafeAreaView style = {s.app}>
      <Header></Header>
      <CardTodo todo= {TODO_LIST[1]}></CardTodo>
      
   
    </SafeAreaView>
  </SafeAreaProvider>
     <View style = {s.footer}><Text>Footer</Text></View>
     </>
  )


}

