interface LayoutProps {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return <div className="flex min-h-screen justify-center items-center">{children}</div>;
};

export default Layout;