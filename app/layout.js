import { Fraunces } from "next/font/google";
import "./globals.scss";
import { Footer, NavBar } from "./components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "militarycatonsol App",
  description: "Generated by Mcatonsol",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fraunces.className}>
        <NavBar />
        {children}
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
