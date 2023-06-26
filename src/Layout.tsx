import "./App.css";
import { Navbar } from "./components/NavBar";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";

const Layout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Main />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
