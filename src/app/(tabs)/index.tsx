import { FlatList, View } from "react-native";
import PostListItem from "../../components/PostListitem";
import posts from "../../../assets/data/posts.json";

export default function HomeScreen() {
  return (
    <View>
      <FlatList
        data={posts}
        renderItem={({ item }) => <PostListItem post={item} />}
      />
    </View>
  );
}
