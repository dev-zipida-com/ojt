const sleep = (n) => new Promise((resolve) => setTimeout(resolve, n));

// {id, title, body}
const posts = [
  {
    id: 1,
    title: "리덕스 미들웨어 learn",
    body: "redux middleware body",
  },
  {
    id: 2,
    title: "하하핳후훟",
    body: "리덕스thunk를 사용해서 비동기 작업을 처리합시다.",
  },
  {
    id: 3,
    title: "리덕스 saga",
    body:
      "나중에 리덕스 사가를 사용해서 비동기 작업을 처리하는 방법도 배웁시다",
  },
];

export const getPosts = async () => {
  await sleep(500);
  return posts;
};

export const getPostsById = async (id) => {
  await sleep(500);
  return posts.find((post) => post.id === id);
};
