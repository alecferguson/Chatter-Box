export const POSTS = [
  {
    _id: "1",
    text: "Look where I'm at!",
    img: "/posts/post1.png",
    user: {
      username: "johndoe",
      profileImg: "/avatars/boy1.png",
      fullName: "John Doe",
    },
    comments: [
      {
        _id: "1",
        text: "Nice!",
        user: {
          username: "janedoe",
          profileImg: "/avatars/girl1.png",
          fullName: "Jane Doe",
        },
      },
    ],
    likes: ["6658s891", "6658s892", "6658s893", "6658s894"],
  },
  {
    _id: "2",
    text: "How you guys doing? 😊",
    user: {
      username: "janedoe",
      profileImg: "/avatars/girl1.png",
      fullName: "Jane Doe",
    },
    comments: [
      {
        _id: "1",
        text: "Im doing well!",
        user: {
          username: "bobdoe",
          profileImg: "/avatars/boy3.png",
          fullName: "Bob Doe",
        },
      },
    ],
    likes: ["6658s891", "6658s892", "6658s893", "6658s894"],
  },
  {
    _id: "3",
    text: "Astronaut🚀",
    img: "/posts/post2.png",
    user: {
      username: "johndoe",
      profileImg: "/avatars/boy3.png",
      fullName: "John Doe",
    },
    comments: [],
    likes: [
      "6658s891",
      "6658s892",
      "6658s893",
      "6658s894",
      "6658s895",
      "6658s896",
    ],
  },
  {
    _id: "4",
    text: "I'm learning GO this week. Any tips? 🤔",
    img: "/posts/post3.png",
    user: {
      username: "johndoe",
      profileImg: "/avatars/boy3.png",
      fullName: "John Doe",
    },
    comments: [
      {
        _id: "1",
        text: "Not today!",
        user: {
          username: "janedoe",
          profileImg: "/avatars/girl3.png",
          fullName: "Jane Doe",
        },
      },
    ],
    likes: [
      "6658s891",
      "6658s892",
      "6658s893",
      "6658s894",
      "6658s895",
      "6658s896",
      "6658s897",
      "6658s898",
      "6658s899",
    ],
  },
];

export const USERS_FOR_RIGHT_PANEL = [
  {
    _id: "1",
    fullName: "John Doe",
    username: "johndoe",
    profileImg: "/avatars/boy2.png",
  },
  {
    _id: "2",
    fullName: "Jane Doe",
    username: "janedoe",
    profileImg: "/avatars/girl1.png",
  },
  {
    _id: "3",
    fullName: "Bob Doe",
    username: "bobdoe",
    profileImg: "/avatars/boy3.png",
  },
  {
    _id: "4",
    fullName: "Daisy Doe",
    username: "daisydoe",
    profileImg: "/avatars/girl2.png",
  },
];
