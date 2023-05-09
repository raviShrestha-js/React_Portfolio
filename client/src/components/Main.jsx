import ProfilePicture from "./Profile-pic";

const Main = () => {
  return (
    <section className="home" id="home">
      <a href="#contact-me">
        <button type="button" className="hire-me">
          hireMe
        </button>
      </a>
      <div className="img-holder">
        <ProfilePicture />
      </div>
      <a href="../docx/developer-ravi-shrestha.pdf" download>
        <button className="download">downloadCV</button>
      </a>
    </section>
  );
};

export default Main;
