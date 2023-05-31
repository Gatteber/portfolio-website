import {FormEvent, useState} from 'react';
import useViewPort from '../hooks/useViewport';

type contactFormInfo = {
  firstName: string;
  lastName: string;
  subject: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const [contactFormInfo, setContactFormInfo] = useState<contactFormInfo>({
    firstName: '',
    lastName: '',
    subject: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = e.target.value;
    setContactFormInfo({
      ...contactFormInfo,
      [e.target.name]: value,
    });
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    const apiUrlProxy = '/api/send_email';
    e.preventDefault();
    fetch(apiUrlProxy, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(contactFormInfo),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => alert(data.message))
      .catch((err) => console.log(`ERROR: ${err}`));
    setContactFormInfo({
      firstName: '',
      lastName: '',
      subject: '',
      email: '',
      message: '',
    });
  };
  const {width} = useViewPort();
  const breakpoint = 768;
  return (
    <div className="p-5 outline outline-1 font-poppins md:px-10">
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="space-y-4"
        id="contactForm"
      >
        <span className="flex justify-center text-xl">Let's get in touch.</span>
        <div className="md:grid md:grid-cols-2 md:gap-5">
          <div>
            <label
              htmlFor="firstname"
              className="block text-sm mb-1"
              title="Please enter your first name."
            >
              First name
            </label>
            <input
              type="text"
              name="firstName"
              value={contactFormInfo.firstName}
              onChange={handleChange}
              id="firstname"
              placeholder="John"
              className="p-1 bg-zinc-50 outline outline-slate-700 outline-1 focus:outline-purple-900 focus:shadow-purple-900 focus:shadow-sm dark:bg-zinc-600 dark:outline-slate-50 dark:focus:outline-orange-300 dark:focus:shadow-orange-300"
              aria-label="firstName"
              title="Please enter your first name."
              required
            />
          </div>
          <div>
            <label
              htmlFor="lastname"
              className="block text-sm mb-1"
              title="Please enter your last name."
            >
              Last name
            </label>
            <input
              type="text"
              name="lastName"
              value={contactFormInfo.lastName}
              onChange={handleChange}
              id="lastname"
              placeholder="Snow"
              className="p-1 bg-zinc-50 outline outline-slate-700 outline-1 focus:outline-purple-900 focus:shadow-purple-900 focus:shadow-sm dark:bg-zinc-600 dark:outline-slate-50 dark:focus:outline-orange-300 dark:focus:shadow-orange-300"
              aria-label="lastName"
              title="Please enter your last name."
              required
            />
          </div>
        </div>
        <div className="md:grid md:grid-cols-2 md:gap-5">
          <div>
            <label
              htmlFor="email"
              className="block text-sm mb-1"
              title="Please enter your email address."
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              value={contactFormInfo.email}
              onChange={handleChange}
              id="email"
              placeholder="stuck@thewall.net"
              className="p-1 bg-zinc-50 outline outline-slate-700 outline-1 focus:outline-purple-900 focus:shadow-purple-900 focus:shadow-sm dark:bg-zinc-600 dark:outline-slate-50 dark:focus:outline-orange-300 dark:focus:shadow-orange-300"
              aria-label="email"
              title="Please enter your email address."
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block text-sm mb-1"
              title="Please enter the email's subject."
            >
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={contactFormInfo.subject}
              onChange={handleChange}
              id="subject"
              placeholder="Become the Lord of Light!"
              className="p-1 bg-zinc-50 outline outline-slate-700 outline-1 focus:outline-purple-900 focus:shadow-purple-900 focus:shadow-sm dark:bg-zinc-600 dark:outline-slate-50 dark:focus:outline-orange-300 dark:focus:shadow-orange-300"
              aria-label="subject"
              title="Please enter the email's subject."
              required
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm mb-1"
            title="Please enter the message for the user."
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            value={contactFormInfo.message}
            onChange={handleChange}
            //check for screensize, return larger message if deskstop view
            cols={width < breakpoint ? 21 : 46}
            rows={8}
            className="p-2 bg-zinc-50 outline outline-slate-700 outline-1 focus:outline-purple-900 focus:shadow-purple-900 focus:shadow-sm dark:bg-zinc-600 dark:outline-slate-50 dark:focus:outline-orange-300 dark:focus:shadow-orange-300"
            placeholder="Enter your message..."
            aria-label="message"
            title="Please enter the message for the user."
            required
          ></textarea>
        </div>
        <div className="flex justify-center">
          <input
            type="submit"
            value="Submit"
            className="outline outline-1 rounded-lg p-4 hover:bg-orange-600 hover:text-purple-900 dark:hover:bg-purple-500 dark:hover:text-orange-300 transition duration-200 hover:cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
};
const Contact = () => {
  return (
    <article
      className="flex flex-col items-center text-slate-700 dark:text-slate-50"
      id="contact"
    >
      <h5 className="text-3xl mb-10">
        <span className="text-orange-600 dark:text-purple-500">C</span>ontact
      </h5>
      <ContactForm />
    </article>
  );
};
export default Contact;
