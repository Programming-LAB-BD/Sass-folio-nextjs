import Layout from "@/Components/Layout/Layout";
import { Inter } from "next/font/google";
import "./globals.css";

// Imported Fontawesome Globally
import { config, library } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

// Setup Fontawesome Globally
config.autoAddCss = false;
library.add(fas, far, fab);

const inter = Inter({ subsets: ["latin"] });

const main_info = {
  title: "MD. Mehedi Hasan Talha",
  description: "Owner of Programming LAB BD.",
};

export const metadata = {
  title: main_info.title,
  description: main_info.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
