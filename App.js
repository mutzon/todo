
import { StyleSheet, Text, View } from 'react-native';
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context"
import {s} from "./App.style"
import { Header } from './components/Header/Header';

export default function App() {
  return ( 
  
  <>
  <SafeAreaProvider>
    <SafeAreaView style = {s.app}>
      <Header></Header>
      <View style = {s.body}><Text>Body</Text></View>
   
    </SafeAreaView>
  </SafeAreaProvider>
     <View style = {s.footer}><Text>Footer</Text></View>
     </>
  )


}

