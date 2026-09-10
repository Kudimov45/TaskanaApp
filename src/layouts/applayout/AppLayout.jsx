import { Content } from "@/components/content";

import { Header } from "@/components/header";
import style from "./appLayout.module.css";

const AppLayout = () => {
  return (
    <div className={style.layout}>
      <Header />
      <Content />
    </div>
  );
};

export default AppLayout;
