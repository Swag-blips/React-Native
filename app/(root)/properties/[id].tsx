import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";
const PropertyDetails = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>Property {id}</Text>
    </View>
  );
};

export default PropertyDetails;
