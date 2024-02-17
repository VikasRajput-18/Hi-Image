import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="auth bg-gradient-to-r from-[#624cf5] via-sky-600 to-purple-500 h-screen w-full">
      {children}
    </main>
  );
};

export default Layout;
