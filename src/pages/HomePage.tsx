export default function HomePage() {
  return (
    <>
      <div className="mx-auto my-20 flex w-full flex-wrap items-center justify-between">
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold">
            <span>Hi, It's Me</span> <br />
            <span>Riccardo</span>
          </h1>
          <p className="mt-4 font-sans text-base font-medium">
            Hi, I'm Riccardo, a Bachelor's graduate in Computer Science
            specializing in Mobile Application and Technology. With a passion
            for building innovative digital solutions, I have hands-on
            experience in mobile and web development, leveraging modern
            frameworks and tools to create seamless user experiences.
          </p>
          <div className="mt-4 flex flex-wrap gap-6">
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
        <div className="h-80 w-80 overflow-hidden rounded-full">
          <img
            className="h-full w-full scale-110 rounded-full object-cover"
            src="/images/profile/profile_1.jpg"
            alt=""
            width="100%"
          />
        </div>
      </div>
    </>
  );
}
