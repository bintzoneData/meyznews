import { Link } from 'react-router-dom';
import style from './rs.module.css';

const RighSide = ({ data }) => {
  return (
    <Link to={`/view/type/id`} className={style.rightSide}>
      <h1 className={style.title}>{data?.title}</h1>
      <p className={style.content}>{data?.content.substring(0, 250)}</p>
      <footer className={style.footer}>
        <p>by: {data?.by.name}</p>
        <small>{data?.by.date}</small>
      </footer>
    </Link>
  );
};

export default RighSide;
