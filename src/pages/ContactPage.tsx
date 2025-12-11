const contacts = [
  {
    icon: (
      <div className="flex h-12 w-12 items-center justify-center rounded-md bg-blue-100 text-blue-600">
        <i className="bi bi-linkedin text-2xl"></i>
      </div>
    ),
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/riccardo-r-540404251/",
    platform: "LinkedIn",
  },
  {
    icon: (
      <div className="flex h-12 w-12 items-center justify-center rounded-md bg-green-100 text-green-600">
        <i className="bi bi-whatsapp text-2xl"></i>
      </div>
    ),
    title: "WhatsApp",
    link: "https://wa.me/+62895613213611",
    platform: "WhatsApp",
  },
  {
    icon: (
      <div className="flex h-12 w-12 items-center justify-center rounded-md bg-gray-100 text-gray-600">
        <i className="fa-regular fa-envelope text-2xl"></i>
      </div>
    ),
    title: "Email",
    link: "mailto:riccardo8902@gmail.com",
    platform: "Email",
  },
  {
    icon: (
      <div className="flex h-12 w-12 items-center justify-center rounded-md bg-gray-100 text-gray-600">
        <i className="bi bi-github text-2xl"></i>
      </div>
    ),
    title: "GitHub",
    link: "https://github.com/Shirloin",
    platform: "GitHub",
  },
];
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
          {contacts.map((contact, i) => {
            return (
              <>
                <a
                  key={i}
                  id="cardHover"
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dark:bg-primary-bg flex items-center gap-4 rounded-md border border-transparent p-4 text-start shadow transition-all hover:scale-105 dark:hover:border-zinc-200"
                >
                  {contact.icon}
                  <div className="leading-none">
                    <p className="text-sm font-semibold text-gray-600 dark:text-white">
                      {contact.title}
                    </p>
                    <p className="text-lg font-bold text-black dark:text-white">
                      {contact.platform}
                    </p>
                  </div>
                </a>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
