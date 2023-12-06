import { View, Text, FlatList, StyleSheet, Button } from "react-native";

const MyFlatList = ({
  animationTypeProp,
  isVisibleProp,
  itemSelectedProp,
  onDeleteItemHandlerEvent,
  setModalVisibleEvent,
}) => {
  return (
    <Modal animationType={animationTypeProp} visible={isVisibleProp}>
      <View style={styles.modalMessageContainer}>
        <Text>Se eliminará: </Text>
        <Text>{itemSelectedProp.value}</Text>
      </View>
      <View style={styles.modalButtonContainer}>
        <Button
          title="Cancelar"
          color="#ccc"
          onPress={() => setModalVisibleEvent(!isVisibleProp)}
        />
        <Button
          title="Si, eliminar"
          color="#ef233c"
          onPress={onDeleteItemHandlerEvent}
        />
      </View>
    </Modal>
  );
};

export default MyFlatList;