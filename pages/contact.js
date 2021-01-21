import Layout from "../components/layout";

export default function Contact() {
  return (
    <Layout>
      <form className="form">
        <label className="label" htmlFor="name">
          Name
        </label>
        <input className="input" type="text" name="name" />
        <label className="label" htmlFor="email">
          Email
        </label>
        <input className="input" type="email  " name="email" />
        <label className="label" htmlFor="message">
          Message
        </label>
        <textarea
          className="textarea"
          type="textarea"
          name="message"
          placeholder="Enter your message"
        ></textarea>
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </Layout>
  );
}
