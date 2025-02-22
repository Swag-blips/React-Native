import { Text, View } from "react-native";
import posts from "../../../assets/data/posts.json";

export default function HomeScreen() {
  const post = posts[0];
  return (
    <View>
      <Text>{post.user.name}</Text>
    </View>
  );
}
