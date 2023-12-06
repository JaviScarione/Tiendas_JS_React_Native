import { StyleSheet, Text, View, Button } from "react-native";
import { useState } from "react";
import MyModal from "./components/Modal";
import MyInput from "./components/Input";
import MyFlatList from "./components/FlatList";

export default function App() {
  const [textItem, setTextItem] = useState("");
  const [itemList, setItemList] = useState([]);
  const [itemSelected, setItemSelected] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onChangeTextHandler = (text) => {
    setTextItem(text);
  };

  const addItemToList = () => {
    textItem !== ""
      ? (setItemList((prevItemList) => [
          ...prevItemList,
          { id: Math.random().toString(), value: textItem },
        ]),
        setTextItem(""))
      : alert("Debes ingresar algo!");
    setTextItem("");
  };

  const renderListItem = ({ item }) => (
    <View style={styles.itemList}>
      <Text>{item.value}</Text>
      <Button
        title="x"
        color="#534D56"
        onPress={() => onSelectItemHandler(item.id)}
      />
    </View>
  );

  const onSelectItemHandler = (id) => {
    setIsModalOpen(!isModalOpen);
    setItemSelected(itemList.find((item) => item.id === id));
  };

  const onDeleteItemHandler = () => {
    setItemList(itemList.filter((item) => item.id !== itemSelected.id));
    setItemSelected({});
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <View style={styles.container}>
        <MyInput
          placeholderProp="Ingresa la tarea"
          textItemProp={textItem}
          onChangeTextHandlerEvent={onChangeTextHandler}
          addItemToListEvent={addItemToList}
        />
        <MyFlatList dataProp={itemList} renderListItemProp={renderListItem} />
      </View>
      <MyModal
        animationTypeProp="fade"
        isVisibleProp={isModalOpen}
        itemSelectedProp={itemSelected}
        onDeleteItemHandlerEvent={onDeleteItemHandler}
        setModalVisibleEvent={setIsModalOpen}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#534D56",
    padding: 40,
    paddingTop: 100,
  },
  itemList: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    margin: 10,
    backgroundColor: "#1B998B",
    borderRadius: 10,
  },
});
