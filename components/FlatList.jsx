import { FlatList } from "react-native";

const MyFlatList = ({
  dataProp,
  renderListItemProp,
}) => {
  return (
    <FlatList
      data={dataProp}
      renderItem={renderListItemProp}
      keyExtractor={(item) => item.id}
    />
  );
};

export default MyFlatList;