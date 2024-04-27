import style from './page.module.css';
import sportsData from '../../data/sports.json';
import { Image } from 'antd';
import hassan from '../../assets/images/home/hassan.jpeg';
const View = () => {
  const data = sportsData.articles[0];
  const addNewLinesAndSpaces = (text) => {
    return text.replace(/_/g, '_\n\n');
  };
  return (
    <div className={style.page}>
      <div className={style.container}>
        <main className={style.box}>
          <div className={style.by}>
            <p>by: meyz</p>
            <small>12:20</small>
          </div>
          <h1 className={style.title}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam eos
          </h1>
          <Image className={style.image} src={hassan} />
          <p className={style.content}>{addNewLinesAndSpaces(data?.content)}</p>
          <p className={style.content}>{addNewLinesAndSpaces(data?.content)}</p>
          <p className={style.content}>{addNewLinesAndSpaces(data?.content)}</p>
        </main>
      </div>
    </div>
  );
};

export default View;
