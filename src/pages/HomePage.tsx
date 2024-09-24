export default function HomePage() {
  return (
    <>
      <div className="mx-auto my-14 flex w-full flex-grow flex-col-reverse flex-wrap items-center justify-center gap-4 px-4 md:my-20 md:flex-row lg:gap-20">
        <div className="max-w-sm lg:max-w-lg">
          <h1 className="animate__animated animate__fadeInLeft text-3xl font-bold lg:text-5xl">
            <span>Hi, It's Me</span> <br />
            <span>Riccardo</span>
          </h1>
          <p className="animate__animated animate__fadeInLeft mt-4 font-sans text-sm font-medium lg:text-base">
            Hi, I'm Riccardo, a Bachelor's graduate in Computer Science
            specializing in Mobile Application and Technology. With a passion
            for building innovative digital solutions, I have hands-on
            experience in mobile and web development, leveraging modern
            frameworks and tools to create seamless user experiences.
          </p>
          <div className="animate__animated animate__fadeInLeft mt-4 flex flex-wrap gap-6">
            <a
              className="social-icon"
              href="https://www.linkedin.com/in/riccardo-540404251/"
              target="_blank"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a
              className="social-icon"
              href="https://github.com/Shirloin"
              target="_blank"
            >
              <i className="bi bi-github"></i>
            </a>
          </div>
        </div>
        <div className="animate__animated animate__fadeInLeft h-40 w-40 overflow-hidden rounded-full lg:h-80 lg:w-80">
          <img
            className="h-full w-full scale-110 rounded-full object-cover"
            src="/images/profile/profile_1.jpg"
            alt=""
            width="100%"
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
}
