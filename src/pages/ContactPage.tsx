export default function ContactPage() {
  return (
    <>
      <div className="mx-auto my-20 flex w-full max-w-5xl flex-col flex-wrap items-center justify-center gap-10 px-4 md:gap-20 lg:flex-row">
        <div className="animate__animated animate__fadeInLeft flex max-w-md flex-col gap-4 text-center lg:text-start">
          <h1 className="text-3xl font-bold lg:text-5xl">Let's chat</h1>
          <p className="text-3xl font-bold lg:text-5xl">
            Feel free to reach out anytime!
          </p>
          <p className="font-semibold">Let's create something together</p>
        </div>
        <div className="animate__animated animate__fadeInLeft flex w-full max-w-md flex-col gap-4">
          <a
            id="cardHover"
            href="https://www.linkedin.com/in/riccardo-r-540404251/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-md bg-white p-4 text-start shadow transition-all hover:scale-105"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-blue-100 text-blue-600">
              <i className="bi bi-linkedin text-2xl"></i>
            </div>
            <div className="leading-none">
              <p className="text-sm font-semibold text-gray-600">Connect on</p>
              <p className="text-lg font-bold">LinkedIn</p>
            </div>
          </a>

          <a
            id="cardHover"
            href="https://wa.me/+62895613213611"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-md bg-white p-4 text-start shadow transition-all hover:scale-105"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-green-100 text-green-600">
              <i className="bi bi-whatsapp text-2xl"></i>
            </div>
            <div className="leading-none">
              <p className="text-sm font-semibold text-gray-600">
                Message me on
              </p>
              <p className="text-lg font-bold">WhatsApp</p>
            </div>
          </a>

          <a
            id="cardHover"
            href="mailto:riccardo8902@gmail.com"
            className="flex items-center gap-4 rounded-md bg-white p-4 text-start shadow transition-all hover:scale-105"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-gray-100 text-gray-600">
              <i className="fa-regular fa-envelope text-2xl"></i>
            </div>
            <div className="leading-none">
              <p className="text-sm font-semibold text-gray-600">Mail me at</p>
              <p className="text-lg font-bold">riccardo8902@gmail.com</p>
            </div>
          </a>

          <a
            id="cardHover"
            href="https://github.com/Shirloin"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 rounded-md bg-white p-4 text-start shadow transition-all hover:scale-105"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-gray-100 text-gray-600">
              <i className="bi bi-github text-2xl"></i>
            </div>
            <div className="leading-none">
              <p className="text-sm font-semibold text-gray-600">
                Check out my
              </p>
              <p className="text-lg font-bold">GitHub</p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
