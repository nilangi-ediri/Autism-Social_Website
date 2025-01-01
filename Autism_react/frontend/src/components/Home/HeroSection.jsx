function HeroSection() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-text">
          <h1 className="hero-text-heading">How can we help you?</h1>

          <div className="title-separator"></div>

          <p>
            We provide right information about autism to make a child&apos;s
            life better. You can be a parent, teacher, a carer or a service
            provider. We give you a social platform to participate in social
            events and to be connected with service providers. Here you can
            share your story that may inspire many others who are dealing with
            similar issues.
          </p>

          <div className="p-separator"></div>

          <div className="hero-cta">
            <a href="./support.html" className="btn-Support">
              Support
            </a>
            <a href="./services.html" className="btn-Service">
              Service
            </a>
          </div>
        </div>
        <div className="hero-image">
          <img src="./images/hiki-app-4DaoOT33dHc-unsplash.jpg" alt="Family" />
        </div>
      </section>
    </>
  );
}

export default HeroSection;
