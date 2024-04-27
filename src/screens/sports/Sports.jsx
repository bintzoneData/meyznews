import SidePage from '../pages/SidePage';
import newsData from '../../data/sports.json';
import newsOne from '../../assets/images/sportsOne.jpg';
import newsTwo from '../../assets/images/sportsTwo.jpg';
import newsThree from '../../assets/images/sportsThree.jpg';

const Sports = () => {
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
          title: 'sports',
          subtitle: 'latest sports news ?',
        }}
        dataOne={dataOne}
        data={newsData.articles}
        images={images}
      />
    </>
  );
};

export default Sports;
