import Footer from "../../components/footer/Footer";
import "./About.scss";

const About = () => {
  return (
    <>
      <div className="about__bio-image">
        <h2>BIO</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus neque
          similique earum maiores, dolor ipsum recusandae possimus, repudiandae
          consectetur accusamus ducimus exercitationem reiciendis! Officia saepe
          distinctio dignissimos, ipsa veniam voluptas?
        </p>
      </div>

      <main className="about">
        <div className="about__container">
          <div className="about__job">
            <h2 className="text-secondary">2020 - 2021</h2>
            <h3>CLARUSWAY</h3>
            <h6>Instructor & Full Stack Developer</h6>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
              vero dolores eum ut, culpa ullam quis quasi exercitationem in
              adipisci.
            </p>
          </div>
          <div className="about__job">
            <h2 className="text-secondary">2019 - 2020</h2>
            <h3>Google</h3>
            <h6>Front End Developer</h6>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
              vero dolores eum ut, culpa ullam quis quasi exercitationem in
              adipisci.
            </p>
          </div>
          <div className="about__job">
            <h2 className="text-secondary">2017 - 2019</h2>
            <h3>The Best Websites Co.</h3>
            <h6>Front End Developer</h6>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
              vero dolores eum ut, culpa ullam quis quasi exercitationem in
              adipisci.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
export default About;
