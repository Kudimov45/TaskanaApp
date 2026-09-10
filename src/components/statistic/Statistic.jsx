import style from "./statistic.module.css";

import { Illustration } from "../illustration";

const statistic = [];

function Statistic() {
  return (
    <>
      {statistic.length > 0 ? (
        <ul>
          {statistic.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      ) : (
        <div className={style.wrapper}>
          <div className={style.placeholderImage}>
            <Illustration illustrationName={"taskInfo"} className={style.img} />
          </div>
          <p className={style.text}>
            Здесь мы поможем тебе управлять твоими задачами, отслеживать
            статистику&nbsp;и самочувствие.
          </p>
        </div>
      )}
    </>
  );
}

export default Statistic;
