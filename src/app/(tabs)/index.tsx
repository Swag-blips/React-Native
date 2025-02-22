import { View } from "react-native";
import PostListItem from "../../components/PostListitem";

export default function HomeScreen() {
  return (
    <View>
      <PostListItem post={"Hello World"} />
      <PostListItem />
      <PostListItem />
      <PostListItem />
    </View>
  );
}
