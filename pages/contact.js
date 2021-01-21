import Layout from "../components/layout";
import styles from "../styles/contact.module.css";

export default function Contact() {
  return (
    <Layout>
      <form className={styles.form}>
        <label className={styles.label} htmlFor="name">
          Name
        </label>
        <input className={styles.input} type="text" name="name" />
        <label className={styles.label} htmlFor="email">
          Email
        </label>
        <input className={styles.input} type="email  " name="email" />
        <label className={styles.label} htmlFor="message">
          Message
        </label>
        <textarea
          className={styles.textarea}
          type="textarea"
          name="message"
          placeholder="Enter your message"
        ></textarea>
        <button className={styles.btn} type="submit">
          Submit
        </button>
      </form>
    </Layout>
  );
}
