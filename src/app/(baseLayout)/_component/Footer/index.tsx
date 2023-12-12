import MobileMenubar from './MobileMenubar';

export default function Footer() {
  return (
    <div>
      <div className="fixed bottom-0 block w-full sm:hidden">
        <MobileMenubar />
      </div>
      <div className="sm:mb-0 mb-14">
        <footer>Footer</footer>
      </div>
    </div>
  );
}
