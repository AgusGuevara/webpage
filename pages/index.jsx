import Head from "next/head";
import Header from "../src/components/header";
import Jumbotron from "../src/components/main/Jumbotron";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
      </Head>

      <Header />
      <Jumbotron />
    </div>
  );
}
