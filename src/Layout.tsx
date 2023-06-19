import "./App.css";
import { Navbar } from "./components/NavBar";
import { Main } from "./components/Main";

const Layout = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Main />
      </main>
    </>
  );
};

export default Layout;
