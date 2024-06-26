import "./globals.css";
import { Hanken_Grotesk } from "next/font/google";
import { StoreProvider } from "@/redux/store/StoreProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const hanken = Hanken_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "myupnext",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <StoreProvider>
        <body className={hanken.className}>
          <>
            {children}
            <ToastContainer />
          </>
        </body>
      </StoreProvider>
    </html>
  );
}
