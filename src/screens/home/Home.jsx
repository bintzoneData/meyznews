import style from './page.module.css';
import RightSide from '../../components/RighSide';
import LeftSide from '../../components/LeftSide';
import CenterSide from '../../components/centerSide';
import CenterBottom from '../../components/CenterBottom';
import HomeSection from './sections/HomeSection';
import newsData from '../../data/news.json';
import sportsData from '../../data/sports.json';
import newsOne from '../../assets/images/newsOne.png';
import newsTwo from '../../assets/images/newsTwo.jpeg';
import hassan from '../../assets/images/home/hassan.jpeg';
import newsThree from '../../assets/images/newsThree.jpg';
import sportsOne from '../../assets/images/sportsOne.jpg';
import sportsTwo from '../../assets/images/sportsTwo.jpg';
import sportsThree from '../../assets/images/sportsThree.jpg';
const Home = () => {
  return (
    <div className={style.page}>
      <main className={style.container}>
        <section className={style.sectionOne}>
          <div className={style.left}>
            <LeftSide data={newsData.articles[9]} img={newsOne} />
            <RightSide data={newsData.articles[9]} />
          </div>
          <div className={style.center}>
            <CenterSide data={newsData.articles[10]} img={hassan} />
            {/* <CenterBottom /> */}
          </div>
          <div className={style.right}>
            <CenterBottom data={newsData.articles[0]} />
            <CenterBottom data={newsData.articles[1]} />
          </div>
        </section>
        <HomeSection
          data={sportsData.articles}
          title={{
            title: 'news',
            subtitle: 'Whats new in the planet news ?',
          }}
          images={{
            imageOne: newsOne,
            imageTwo: newsTwo,
            imageThree: newsThree,
          }}
        />
        <HomeSection
          data={newsData.articles}
          title={{
            title: 'Sports',
            subtitle: 'latest sports news ',
          }}
          images={{
            imageOne: sportsOne,
            imageTwo: sportsTwo,
            imageThree: sportsThree,
          }}
        />
      </main>
    </div>
  );
};

export default Home;
