import { useState } from "react";
import { StyleSheet, View, TextInput, Alert, Keyboard} from "react-native";
import { AntDesign } from '@expo/vector-icons'
import { THEME } from "../theme";

export const AddTodo = ({onSubmit}) => {
    const [value, setValue] = useState('')

    const pressHandler = () => {
        if (value.trim()) {
            onSubmit(value)
            setValue('')
            Keyboard.dismiss()
        } else {
            Alert.alert('Название дела не может быть пустым')
        }
    }

    return (
        <View style={styles.block}>
            <TextInput 
                style={styles.input}
                onChangeText={setValue}
                value={value}
                placeholder="Введите название дела..."
                autoCorrect={false}
                autoCapitalize='none'
            />
            <AntDesign.Button onPress={pressHandler} name="pluscircleo">
                Добавить
            </AntDesign.Button>
            {/* <Button title="Добавить" onPress={pressHandler}/> */}
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 15
    },
    input: {
        width: '60%',
        borderBottomWidth: 2,
        borderStyle: 'solid',
        borderBottomColor: THEME.MAIN_COLOR,
        padding: 10
    }
})