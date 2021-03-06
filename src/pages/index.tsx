import Head from "next/head";
import About from "components/About/About";
import Contact from "components/Contact/Contact";
import Footer from "components/Footer/Footer";
import Sidebar from "components/Sidebar/Sidebar";
import Work from "components/Work/Work";
import Hero from "../components/Hero/Hero";
import Header from "components/Header/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Daniele Tortora | Software Engineer</title>
      </Head>
      <main>
        <Header />
        <Hero />
        <About />
        <Work />
        <Contact />
        <Footer />
        <Sidebar />
      </main>
    </>
  );
}
