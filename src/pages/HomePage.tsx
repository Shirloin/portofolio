import resume from "../assets/Riccardo.pdf";

export default function HomePage() {
  return (
    <>
      <div className="mx-auto my-14 flex w-full flex-grow flex-col-reverse flex-wrap items-center justify-center gap-4 px-4 md:my-20 md:flex-row lg:gap-20">
        <div className="max-w-sm lg:max-w-lg">
          <h1 className="animate__animated animate__fadeInLeft text-3xl font-bold lg:text-5xl">
            <span>Hi, It's Me</span> <br />
            <span>Riccardo</span>
          </h1>
          {/* <p className="animate__animated animate__fadeInLeft mt-2 text-lg font-medium text-gray-600 lg:text-xl">
            Fullstack and Cloud Platform Engineer
          </p> */}

          <p className="animate__animated animate__fadeInLeft mt-4 border-l-2 border-primary pl-4 text-base font-medium italic text-primary lg:text-lg">
            Like a chef who understands how to create appetizers, main courses
            and desserts.
          </p>
          <p className="animate__animated animate__fadeInLeft mt-4 font-sans text-sm font-medium lg:text-base">
            Hi, I'm Riccardo a Bachelor's graduate in Computer Science. I aim to
            master the entire technology stack. From frontend and backend to
            cloud infrastructure. So I can design and deliver complete, cohesive
            systems that work beautifully from end to end.
          </p>
          <div className="animate__animated animate__fadeInLeft mt-4 flex flex-wrap items-center gap-6">
            <a
              className="social-icon"
              href="https://www.linkedin.com/in/riccardo-r-540404251/"
              target="_blank"
            >
              <i id="cardHover" className="bi bi-linkedin"></i>
            </a>
            <a
              className="social-icon"
              href="https://github.com/Shirloin"
              target="_blank"
            >
              <i id="cardHover" className="bi bi-github"></i>
            </a>
            <a
              id="cardHover"
              href={resume}
              download="Riccardo-Resume.pdf"
              className="flex items-center gap-2 rounded-md border-2 border-primary px-4 py-2 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-white"
            >
              <i className="bi bi-download"></i>
              Download Resume
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
