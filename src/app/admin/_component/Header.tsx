interface Props {
  children: React.ReactNode;
}

export default function Header({ children }: Props) {
  return (
    <header className="fixed top-0 left-56 z-40 right-0 bg-white">
      <div className="px-6 py-3">{children}</div>
    </header>
  );
}
