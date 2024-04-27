import style from './navbar.module.css';
import React, { useState } from 'react';
import { LuMenu } from 'react-icons/lu';
import { Button, Drawer } from 'antd';
import BarLists from './BarLists';
import { Navigate, useNavigate } from 'react-router-dom';
import Lists from './Lists';
const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const navigateFunction = (url) => {
    navigate(url);
    onClose();
  };
  return (
    <div className={style.navbar}>
      <div className={style.left}>
        <LuMenu onClick={showDrawer} className={style.menuIcon} />
        <h1 className={style.title_bar}>meyz news</h1>
        <Drawer
          title={<h1 className={style.title_bar}>meyz news</h1>}
          onClose={onClose}
          open={open}
          className={style.bar}
        >
          <BarLists navigateFunction={navigateFunction} />
        </Drawer>
      </div>
      <div className={style.right}>
        <Lists />
      </div>
    </div>
  );
};
export default Navbar;
