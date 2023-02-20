import styles from "@/styles/Home.module.css";
import { Stack, Button } from "@mui/material";
import axios from "axios";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    axios
      .get("/board")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
        <Stack spacing={2} direction="row">
          <Button variant="text" onClick={btn1Click}>
            Text
          </Button>
          <Button variant="contained">Contained</Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>
      </main>
    </div>
  );
};

export default Home;

// async로 변환하기
async function btn1Click() {
  const response = await axios.get("/board2");
  console.log(response);
}
