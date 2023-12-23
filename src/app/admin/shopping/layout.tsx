import Header from '../_component/Header';

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div>
      <Header>
        <h2 className="admin-h2">쇼핑</h2>
      </Header>
      {children}
    </div>
  );
}
