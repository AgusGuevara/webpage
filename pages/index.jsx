import Head from "next/head";
import Header from "../src/components/header";
import Jumbotron from "../src/components/main/Jumbotron";
import Footer from "../src/components/footer";

export default function Home() {
  return (
    <div className="container w-full h-full">
      <Head>
        <title>Create Next App</title>
      </Head>

      <Header />
      <Jumbotron />
      <Footer />
    </div>
  );
}
