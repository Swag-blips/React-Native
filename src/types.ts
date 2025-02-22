export type Post = {
  id: string;
  title: string;
  created_at: string;
  upvotes: number;
  nr_of_comments: number;
  image: string | null;
  description: string | null;
  group: Group;
  user: User;
};

export type Comment = {
  id: string;
  post_id: string;
  user_id: string;
  parent_id: string | null;
  comment: string;
  created_at: string;
  upvotes: number;
  user: User;
  replies: Comment[];
};

export type Group = {
  id: string;
  name: string;
  image: string;
};

export type User = {
  id: string;
  name: string;
  image: string | null;
};
