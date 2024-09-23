import { ChangeEvent, FormEvent, useState } from "react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      formData.email.trim() === "" ||
      formData.fullname.trim() === "" ||
      formData.message.trim() === "" ||
      formData.subject.trim() === ""
    ) {
      toast.error("Please fill all fields");
      return;
    }

    const serviceId = import.meta.env.VITE_SERVICE_ID;
    const templateId = import.meta.env.VITE_TEMPLATE_ID;
    const userId = import.meta.env.VITE_USER_ID;
    const res = await emailjs.send(serviceId, templateId, formData, userId);
    setFormData({
      fullname: "",
      email: "",
      subject: "",
      message: "",
    });
    if (res.status === 200) {
      toast.success("Email has been sent");
    } else {
      toast.error("Fail to send email");
    }
  };

  return (
    <>
      <div className="mx-auto my-20 flex w-full max-w-5xl flex-col flex-wrap items-center justify-center gap-10 px-4 md:gap-20 lg:flex-row">
        <div className="animate__animated animate__fadeInLeft flex max-w-md flex-col gap-4 text-center lg:text-start">
          <h1 className="text-3xl font-bold lg:text-5xl">Let's chat</h1>
          <p className="text-3xl font-bold lg:text-5xl">
            Feel free to reach out anytime!
          </p>
          <p className="font-semibold">Let's create something together</p>
          <a
            href="mailto:riccardo8902@gmail.com"
            className="flex items-center gap-4 rounded-md bg-white p-4 text-start shadow"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gray-100">
              <i className="fa-regular fa-envelope"></i>
            </div>
            <div className="leading-none">
              <p className="text-sm font-semibold">Mail me at</p>
              <p className="font-bold">riccardo8902@gmail.com</p>
            </div>
          </a>
        </div>
        <form
          onSubmit={sendEmail}
          className="animate__animated animate__fadeInLeft flex w-full max-w-md flex-col gap-4 rounded-xl border bg-white p-6"
          action=""
        >
          <h1 className="text-xl font-semibold">Send me a message</h1>
          <input
            onChange={handleChange}
            value={formData.fullname}
            className="rounded-md border p-2"
            placeholder="Full name"
            type="text"
            name="fullname"
          />
          <input
            onChange={handleChange}
            value={formData.email}
            className="rounded-md border p-2"
            placeholder="Email address"
            type="text"
            name="email"
          />
          <input
            onChange={handleChange}
            value={formData.subject}
            className="rounded-md border p-2"
            placeholder="Subject"
            type="text"
            name="subject"
          />
          <textarea
            onChange={handleChange}
            value={formData.message}
            className="h-32 rounded-md border p-2"
            placeholder="Message..."
            name="message"
            id=""
          ></textarea>
          <button
            type="submit"
            className="w-full rounded-md bg-black p-2 text-white"
          >
            Send Message
          </button>
        </form>
      </div>
    </>
  );
}
