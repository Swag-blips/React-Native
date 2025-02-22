import { Image, Pressable, Text, View, StyleSheet } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Post } from "../types";
import { formatDistanceToNowStrict } from "date-fns";
import { Link } from "expo-router";

type PostListItemProps = {
  post: Post;
  isDetailedPost?: boolean;
};

export default function PostListItem({
  post,
  isDetailedPost,
}: PostListItemProps) {
  return (
    <Link href={`/post/${post.id}`}>
      <View
        style={{
          paddingHorizontal: 15,
          paddingVertical: 10,
          gap: 7,
          borderBottomColor: "lightgrey",
          borderBottomWidth: 0.5,
          backgroundColor: "white",
        }}
      >
        {/* HEADER */}
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image
            source={{ uri: post.group.image }}
            style={{ width: 20, height: 20, borderRadius: 10, marginRight: 5 }}
          />
          <View>
            <View style={{ flexDirection: "row", gap: 5 }}>
              <Text
                style={{ fontWeight: "bold", fontSize: 13, color: "#3A3B3C" }}
              >
                {post.group.name}
              </Text>
              <Text
                style={{ color: "grey", fontSize: 13, alignSelf: "flex-start" }}
              >
                {formatDistanceToNowStrict(new Date(post.created_at))}
              </Text>
            </View>
            {isDetailedPost && (
              <Text style={{ fontSize: 13, color: "#2E5DAA" }}>
                {post.user.name}
              </Text>
            )}
          </View>
          <Pressable
            onPress={() => console.error("Pressed")}
            style={{
              marginLeft: "auto",
              backgroundColor: "#0d469b",
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                color: "white",
                paddingVertical: 2,
                paddingHorizontal: 7,
                fontWeight: "bold",
                fontSize: 13,
              }}
            >
              Join
            </Text>
          </Pressable>
        </View>

        {/* CONTENT */}
        <Text style={{ fontWeight: "bold", fontSize: 17, letterSpacing: 0.5 }}>
          {post.title}
        </Text>
        {post.image && (
          <Image
            source={{ uri: post.image }}
            style={{ width: "100%", aspectRatio: 4 / 3, borderRadius: 15 }}
          />
        )}

        {post.description && !post.image && (
          <Text numberOfLines={isDetailedPost ? undefined : 4}>
            {post.description}
          </Text>
        )}

        {/* FOOTER */}
        <View style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "row", gap: 10 }}>
            <View style={[{ flexDirection: "row" }, styles.iconBox]}>
              <MaterialCommunityIcons
                name="arrow-up-bold-outline"
                size={19}
                color="black"
              />
              <Text
                style={{
                  fontWeight: "500",
                  marginLeft: 5,
                  alignSelf: "center",
                }}
              >
                {post.upvotes}
              </Text>
              <View
                style={{
                  width: 1,
                  backgroundColor: "#D4D4D4",
                  height: 14,
                  marginHorizontal: 7,
                  alignSelf: "center",
                }}
              />
              <MaterialCommunityIcons
                name="arrow-down-bold-outline"
                size={19}
                color="black"
              />
            </View>
            <View style={[{ flexDirection: "row" }, styles.iconBox]}>
              <MaterialCommunityIcons
                name="comment-outline"
                size={19}
                color="black"
              />
              <Text
                style={{
                  fontWeight: "500",
                  marginLeft: 5,
                  alignSelf: "center",
                }}
              >
                {post.nr_of_comments}
              </Text>
            </View>
          </View>
          <View style={{ marginLeft: "auto", flexDirection: "row", gap: 10 }}>
            <MaterialCommunityIcons
              name="trophy-outline"
              size={19}
              color="black"
              style={styles.iconBox}
            />
            <MaterialCommunityIcons
              name="share-outline"
              size={19}
              color="black"
              style={styles.iconBox}
            />
          </View>
        </View>
      </View>
    </Link>
  );
}

const styles = StyleSheet.create({
  iconBox: {
    borderWidth: 0.5,
    borderColor: "#D4D4D4",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },
});
