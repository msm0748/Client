import Main from './Main';
import Header from './Header';
import Footer from './Footer';

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
}
