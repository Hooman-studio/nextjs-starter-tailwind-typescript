import { ReactElement } from "react";

interface Props {}

const Layout: React.FC<Props> = ({ children }) => {
  return <div className="min-h-screen w-full bg-slate-500">{children}</div>;
};

export default Layout;
