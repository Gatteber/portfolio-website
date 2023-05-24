const ContactForm = () => {
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log('correctly handled submit');
  };
  return (
    <div className="p-5 outline outline-1">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <label htmlFor="">
          Name:
          <input type="text" />
        </label>
        <label htmlFor="">
          Email:
          <input type="email" name="" id="" />
        </label>
        <label htmlFor="">
          Message:
          <textarea></textarea>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
const Contact = () => {
  return (
    <div className="flex flex-col items-center text-slate-700 dark:text-slate-50">
      <h5 className="text-3xl">
        <span className="text-orange-600 dark:text-purple-500">C</span>ontact
      </h5>
      <p>Let's get in touch.</p>
      <ContactForm />
    </div>
  );
};
export default Contact;
