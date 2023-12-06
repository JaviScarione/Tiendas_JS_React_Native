import { View, TextInput, Button, StyleSheet } from "react-native";

const MyInput = ({
  placeholderProp,
  textItemProp,
  onChangeTextHandlerEvent,
  addItemToListEvent,
}) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder={placeholderProp}
        onChangeText={onChangeTextHandlerEvent}
        value={textItemProp}
      />
      <Button title="Add" color="#1B998B" onPress={addItemToListEvent} />
    </View>
  );
};

export default MyInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 100,
  },
  textInput: {
    width: 230,
    borderBottomColor: "#1B998B",
    borderBottomWidth: 1,
    color: "#F8F1FF",
  },
});
