import { Content } from "@/components/content";

import { Header } from "@/components/header";
import style from "./appLayout.module.css";
import { useState } from "react";

const AppLayout = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={style.layout}>
      <Header setIsActive={setIsActive} />
      <Content isActive={isActive} setIsActive={setIsActive} />
    </div>
  );
};

export default AppLayout;
