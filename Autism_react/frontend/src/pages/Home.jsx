import HeroSection from "../components/Home/HeroSection";
import NavBar from "../components/NavBar";
import InfoBlockSection from "../components/Home/InfoBlockSection";
import VideoSection from "../components/Home/VideoSection";
import WhiteFooter from "../components/WhiteFooter";
function Home() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <InfoBlockSection />
      <VideoSection />
      <WhiteFooter />
    </>
  );
}

export default Home;
