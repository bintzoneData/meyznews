import { useState } from 'react';
import style from './barList.module.css';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
const BarLists = ({ navigateFunction }) => {
  const [open, setOpen] = useState('none');
  return (
    <div className={style.barLists}>
      <ul className={style.lists}>
        <li
          className={style.list}
          onClick={() => {
            navigateFunction('/');
          }}
        >
          <p>home</p>
        </li>
        <li
          className={style.list}
          onClick={() => {
            open === 'news' ? setOpen('none') : setOpen('news');
          }}
        >
          <p>news</p>
          {open === 'news' ? <FaAngleDown /> : <FaAngleUp />}
        </li>
        {open === 'news' && (
          <div className={style.listsChild}>
            <li
              className={style.listChild}
              onClick={() => navigateFunction('/news?type=local')}
            >
              local
            </li>
            <li
              onClick={() => navigateFunction('/news?type=international')}
              className={style.listChild}
            >
              international
            </li>
          </div>
        )}
        <li
          className={style.list}
          onClick={() => {
            open === 'sports' ? setOpen('none') : setOpen('sports');
          }}
        >
          <p>sports</p>
          {open === 'sports' ? <FaAngleDown /> : <FaAngleUp />}
        </li>
        {open === 'sports' && (
          <div className={style.listsChild}>
            <li
              className={style.listChild}
              onClick={() => navigateFunction('/sports?type=premierleague')}
            >
              Premier league
            </li>
            <li
              className={style.listChild}
              onClick={() => navigateFunction('/sports?type=championsleague')}
            >
              Champions league
            </li>
            <li
              className={style.listChild}
              onClick={() => navigateFunction('/sports?type=laliga')}
            >
              Laliga
            </li>
            <li
              className={style.listChild}
              onClick={() => navigateFunction('/sports?type=others')}
            >
              Others
            </li>
          </div>
        )}
        <li
          onClick={() => {
            navigateFunction('/culture');
          }}
          className={style.list}
        >
          <p>culture</p>
        </li>
        <li
          onClick={() => {
            navigateFunction('/about');
          }}
          className={style.list}
        >
          <p>about us</p>
        </li>
      </ul>
    </div>
  );
};

export default BarLists;
