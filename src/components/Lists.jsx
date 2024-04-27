import React, { useEffect, useState } from 'react';
import style from './Lists.module.css';
import { useLocation, useNavigate } from 'react-router-dom';

const items = [
  {
    key: '/',
    label: 'home',
  },
  {
    key: '/news',
    label: 'news',
  },
  {
    key: '/sports',
    label: 'sports',
  },
  {
    key: '/culture',
    label: 'culture',
  },
  {
    key: '/about',
    label: 'about',
  },
];

const Lists = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className={style.page}>
      <ul className={style.lists}>
        {items.map((item) => (
          <li
            key={item.key}
            onClick={() => {
              navigate(item.key);
            }}
            className={`${style.list} ${
              location.pathname === item.key ? style.listActive : ''
            }`}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Lists;
