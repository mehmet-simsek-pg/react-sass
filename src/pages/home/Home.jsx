import "./Home.scss";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <>
      <div className="home-bgImg-container">
        <main className="home">
          <h2>Hi! My Name Is</h2>
          <h1 className="home__name">
            Wednesday
            <span className="home__name--last">Addams</span>
          </h1>
          <h2>Full Stack Dancer</h2>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Home;
