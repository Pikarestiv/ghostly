// import React from 'react';
// import Header from '@orgs/Header';
// import Footer from '@orgs/Footer';
import Header from "../../molecules/Header";
import Footer from "../../molecules/Footer";

interface AppLayoutProps {
  children: React.ReactNode;
  hasHeader?: boolean;
  hasFooter?: boolean;
}

const AppLayout: React.FC<AppLayoutProps> = ({
  children,
  hasHeader = true,
  hasFooter = true,
}) => {
  return (
    <div className="flex flex-col">
      {hasHeader && <Header />}
      <main className="flex-grow">{children}</main>
      {hasFooter && <Footer />}
    </div>
  );
};

export default AppLayout;
