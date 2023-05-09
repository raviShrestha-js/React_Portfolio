const Aboutme = () => {
  return (
    <section className="about-me" id="about-me">
      <div className="page-header page-header-small"></div>
      <div className="img-contain"></div>

      <div className="content">
        <h1>About me</h1>
        <h2>I am</h2>
        <div className="details-container">
          <div className="summary">
            <h3>Summary</h3>
            <p>
              Fresh IT Graduate with a GPA score of 6.5 out of 7, enthusiastic
              and self-motivated about developing scalable web applications and
              working across the full stack development. Experience in building
              two web apps as a college project using HTML5, CSS3, JavaScript,
              PHP and MySQL. Motivated to advance my web development, Machine
              Learning, and Artificial Intelligence abilities and knowledge in
              order to establish a successful tech career.
            </p>
          </div>

          <div className="information">
            <img
              src="../src/images/propic.jpg"
              alt="profile pic"
              width="150px"
              height="150px"
            />
            <div className="info-details">
              <div className="fullname">
                <h3>Ravi Shrestha</h3>
              </div>
              <div className="row mt-3">
                <div className="col-sm-2 text-center">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div className="col-sm-10 test">edenderb@gmail.com</div>
              </div>
              <div className="row mt-2">
                <div className="col-sm-2 text-center">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div className="col-sm-10 test">+61 405865832</div>
              </div>
              <div className="row mt-2">
                <div className="col-sm-2 text-center">
                  <i className="fa-solid fa-map-location-dot"></i>
                </div>
                <div className="col-sm-10 test">
                  Strathfield, Sydney, Australia
                </div>
              </div>
              <div className="logo-container">
                <a
                  href="https://github.com/raviShrestha-js"
                  className="btn btn-info btn-round btn lg btn-icon"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/ravi-shrestha-609ba1153/"
                  className="btn btn-info btn-round btn lg btn-icon"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=100063863853078"
                  className="btn btn-info btn-round btn lg btn-icon"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-facebook"></i>
                </a>
                <a
                  href="https://www.instagram.com/ravi.d.great/"
                  className="btn btn-info btn-round btn lg btn-icon"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
