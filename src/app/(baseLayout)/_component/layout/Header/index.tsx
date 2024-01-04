import Category from './Category';
import HeaderNavbar from './HeaderNavbar';

export default function Header() {
  return (
    <header className="border-b">
      <div className="md:container">
        <HeaderNavbar />
        <Category />
      </div>
    </header>
  );
}
