import Category from '@/app/(baseLayout)/_component/layout/Header/Category';
import HeaderNavbar from '@/app/(baseLayout)/_component/layout/Header/HeaderNavbar';

interface Props {
  children: React.ReactNode;
}

export default function BaseLayout({ children }: Props) {
  return (
    <>
      <header className="border-b">
        <div className="md:container">
          <HeaderNavbar />
          <div className="hidden md:block">
            <Category />
          </div>
        </div>
      </header>
      {children}
    </>
  );
}
