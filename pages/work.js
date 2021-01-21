import Layout from "../components/layout";
import styles from "../styles/work.module.css";

export default function Work() {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.project}>
          <img
            className={styles.image}
            src="/pumpshock.png"
            alt="pumpshock workout tracker"
          />
          <h1>Pumpshock workout tracker</h1>
          <p>Built with Nextjs, ChakraUI and FaunaDB with a GraphQL API.</p>
          <a className={styles.link} href="https://www.pumpshock.com"></a>
        </div>

        <div className={styles.project}>
          <img
            className={styles.image}
            src="/tictactoe.png"
            alt="pumpshock workout tracker"
          />
          <h1>React Tac Toe</h1>
          <p>
            Full stack multiplayer tic tac toe game using socket.io on an
            express server
          </p>
          <a
            className={styles.link}
            href="https://reactactoe-fullstack.herokuapp.com"
          ></a>
        </div>

        <div className={styles.project}>
          <img
            className={styles.image}
            src="/simpleworkout.png"
            alt="pumpshock workout tracker"
          />
          <h1>MERN Simple Workout Tracker</h1>
          <p>Simple workout tracker built on the MERN stack.</p>
          <a
            className={styles.link}
            href="https://mernsimpleworkout.herokuapp.com/"
          ></a>
        </div>
      </div>
    </Layout>
  );
}
