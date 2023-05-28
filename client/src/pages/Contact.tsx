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
    e.preventDefault();
    console.log(contactFormInfo);
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
            <label htmlFor="" className="block text-sm mb-1">
              First name
            </label>
            <input
              type="text"
              name="firstName"
              value={contactFormInfo.firstName}
              onChange={handleChange}
              id=""
              placeholder="John"
              className="mb-4"
              aria-label="firstName"
              required
            />
          </div>
          <div>
            <label htmlFor="" className="block text-sm mb-1">
              Last name
            </label>
            <input
              type="text"
              name="lastName"
              value={contactFormInfo.lastName}
              onChange={handleChange}
              id=""
              placeholder="Snow"
              className=""
              aria-label="lastName"
              required
            />
          </div>
        </div>
        <div className="md:grid md:grid-cols-2 md:gap-5">
          <div>
            <label htmlFor="" className="block text-sm mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={contactFormInfo.email}
              onChange={handleChange}
              id=""
              placeholder="stuck@thewall.net"
              className=""
              aria-label="email"
              required
            />
          </div>
          <div>
            <label htmlFor="" className="block text-sm mb-1">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={contactFormInfo.subject}
              onChange={handleChange}
              id=""
              placeholder="Become the Lord of Light!"
              className=""
              aria-label="subject"
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="" className="block text-sm mb-1">
            Message
          </label>
          <textarea
            name="message"
            id=""
            value={contactFormInfo.message}
            onChange={handleChange}
            //check for screensize, return larger message if deskstop view
            cols={width < breakpoint ? 21 : 46}
            rows={8}
            className="p-1"
            placeholder="Enter your message..."
            aria-label="message"
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
    <div className="flex flex-col items-center text-slate-700 dark:text-slate-50">
      <h5 className="text-3xl mb-10">
        <span className="text-orange-600 dark:text-purple-500">C</span>ontact
      </h5>
      <ContactForm />
    </div>
  );
};
export default Contact;
