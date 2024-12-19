import AboutImg from "../images/about.jpeg";
const About = () => {
  return (
    <section className="section-center section" id="about">
      <div className="section-title">
        <h2>
          ABOUT <span>US</span>
        </h2>
      </div>
      <div className="about-center">
        <div className="about-img">
          <img src={AboutImg} className="about-img" alt="About_logo" />
        </div>
        <div className="about-info">
          <h3>explore the difference</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
            quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
            unde dolor? Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Aspernatur quisquam harum nam cumque temporibus explicabo
            dolorum sapiente odio unde dolor?
          </p>
          <a href="#" className="btn"  >Read More</a>
        </div>
      </div>
    </section>
  );
};
export default About;
