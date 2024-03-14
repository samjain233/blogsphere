import "./globals.css";
import "./blogs.css";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Blogshpere",
  description: "Blog Posting App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{ duration: 3000 }}
        />
        {children}
      </body>
    </html>
  );
}
