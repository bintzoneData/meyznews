import SidePage from '../pages/SidePage';
import newsData from '../../data/news.json';
import newsOne from '../../assets/images/newsOne.png';
import newsTwo from '../../assets/images/newsTwo.jpeg';
import newsThree from '../../assets/images/newsThree.jpg';

const News = () => {
  const dataOne = newsData.articles.filter((item) => item.id < 6);
  const images = {
    imageOne: newsOne,
    imageTwo: newsTwo,
    imageThree: newsThree,
  };
  return (
    <>
      <SidePage
        HeadTitle={{
          title: 'News',
          subtitle: 'Whats new in the planet news ?',
        }}
        dataOne={dataOne}
        data={newsData.articles}
        images={images}
      />
    </>
  );
};

export default News;
