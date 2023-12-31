import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ToasterContext from "./context/ToasterContext";

import "./globals.css";
import AuthContext from "./context/authContext";
import ActiveStatus from "./components/ActiveStatus";
import MobileFooter from "./components/sideBar/MobileFooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gab Messenger",
  description: "Created by Chukwudi Nweze",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContext>
          <ToasterContext />
          <ActiveStatus />
          {children}
        </AuthContext>
      </body>
    </html>
  );
}
