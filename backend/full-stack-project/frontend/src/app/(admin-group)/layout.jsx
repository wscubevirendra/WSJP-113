import '../globals.css'
import Sidebar from "@/components/admin/Sidebar";
import Header from '@/components/admin/Header';
import { ToastContainer } from 'react-toastify';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex">
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"

        />
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="p-6 bg-gray-50 min-h-screen">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
