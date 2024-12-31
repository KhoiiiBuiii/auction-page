import { ClerkProvider } from '@clerk/nextjs';
import './globals.css';
import Navbar from './components/navbar';
import Footer from './components/footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body style={{ margin: 0, fontFamily: 'Arial, sans-serif' }}>
          <header>
            <Navbar />
          </header>
          <main style={{ padding: '2rem', minHeight: '80vh' }}>{children}</main>
          <footer>
            <Footer />
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
