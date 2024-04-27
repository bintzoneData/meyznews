import { Link } from 'react-router-dom';
import style from './ls.module.css';
import { Image } from 'antd';
const LeftSide = ({ data, img }) => {
  return (
    <Link to={`/view/type/id`} className={style.leftSide}>
      {' '}
      <Image preview={false} className={style.image} src={img} />
      <h1 className={style.title}>{data?.title}</h1>
      <p className={style.content}>{data?.content.substring(0, 250)}</p>
      <footer className={style.footer}>
        <p>by:{data?.by.name}</p>
        <small>{data?.by.date}</small>
      </footer>
    </Link>
  );
};

export default LeftSide;
