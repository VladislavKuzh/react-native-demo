import { useContext, useState } from "react";
import { SafeAreaView, View, StyleSheet, StatusBar, } from "react-native"
import { Navbar } from "./components/Navbar"
import { THEME } from "./theme";
import { MainScreen } from "./screens/MainScreen";
import { TodoScreen } from "./screens/TodoScreen";
import { ScreenContext } from "./context/screen/screenContext";


export const MainLayout = () => {
  const { todoId } = useContext(ScreenContext)

  return (
    <SafeAreaView style={styles.area}>
      <Navbar title='Todo App'/>
      <View style={styles.container}>
        { todoId ? <TodoScreen/> : <MainScreen/> }
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  area: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    marginBottom: 155
  },
  container: {
    paddingHorizontal: THEME.PADDING_HORIZONTAL,
    paddingVertical: 20
  },
});
  