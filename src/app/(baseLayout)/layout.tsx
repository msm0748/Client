import Layout from './_component/layout';

interface Props {
  children: React.ReactNode;
}

export default function BaseLayout({ children }: Props) {
  return <Layout>{children}</Layout>;
}
