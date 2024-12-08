import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="pt-16">
        {children}
      </main>
      <Footer />
    </>
  );
}