import style from './page.module.css';

import CenterSide from '../../../components/centerSide';
import CenterBottom from '../../../components/CenterBottom';
const HomeSection = ({ data, title, images }) => {
  return (
    <div className={style.page}>
      <div className={style.container}>
        <header className={style.header}>
          <h1>{title.title} |</h1>
          <h1 className={style.title}>{title.subtitle}</h1>
        </header>

        <main className={style.content}>
          <section className={style.left}>
            <CenterSide data={data[0]} img={images.imageTwo} />
          </section>
          <section className={style.right}>
            <CenterBottom data={data[6]} />
            <CenterBottom data={data[3]} />
            <CenterBottom data={data[4]} />
            <CenterBottom data={data[5]} />
          </section>
        </main>
      </div>
    </div>
  );
};

export default HomeSection;
