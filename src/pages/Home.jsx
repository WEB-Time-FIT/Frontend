import MainLayout from '../layouts/MainLayout';
import HomeCarousel from '../components/HomeCarousel';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <MainLayout>
        <HomeCarousel />
      </MainLayout>
      <Footer />
    </>
  );
};

export default Home;