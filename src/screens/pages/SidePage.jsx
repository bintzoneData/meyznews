import style from './page.module.css';
import CenterSide from '../../components/centerSide';
import CenterBottom from '../../components/CenterBottom';

const SidePage = ({ HeadTitle, data, images }) => {
  return (
    <div className={style.page}>
      <div className={style.container}>
        <header className={style.header}>
          <h1>{HeadTitle.title} |</h1>
          <h1 className={style.title}>{HeadTitle.subtitle}</h1>
        </header>

        <main className={style.content}>
          <section className={style.left}>
            <CenterSide data={data[2]} img={images.imageOne} />
          </section>
          <section className={style.right}>
            <CenterBottom data={data[1]} />
            <CenterBottom data={data[0]} />
            <CenterBottom data={data[3]} />
            <CenterBottom data={data[4]} />
          </section>
        </main>
        <main className={style.content2}>
          <section className={style.left2}>
            <CenterSide img={images.imageTwo} data={data[8]} />
          </section>
          <section className={style.center2}>
            <CenterBottom data={data[5]} />
            <CenterBottom data={data[1]} />
            <CenterBottom data={data[3]} />
          </section>
          <section className={style.right2}>
            <CenterSide img={images.imageThree} data={data[9]} />
          </section>
        </main>
      </div>
    </div>
  );
};

export default SidePage;
