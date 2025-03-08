import React from "react";
// import { ThirdwebProvider } from "thirdweb/react";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer";
import styles from "./components/Navbar/navbar.module.css";

const Layout = ({ children }) => {
  return (
    // <html lang="en">
    <div>
      <div>
        <header className={styles.headerImage}>
          <Navbar />
        </header>

        <main>{children}</main>

        <footer>
          <Footer />
        </footer>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          transition={Slide}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </div>
    // </html>
  );
};

export default Layout;
