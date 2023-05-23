const SmallHorizonalLine = () => {
  return (
    <hr className="w-8 h-1 mx-auto my-4 bg-purple-900 border-0 md:my-10 dark:bg-orange-300" />
  );
};

const About = () => {
  return (
    <article className="flex flex-col items-center gap-2 font-poppins text-xl text-slate-700 dark:text-slate-50">
      <h4 className="text-3xl">
        <span className="text-orange-600 dark:text-purple-500">A</span>bout me
      </h4>
      <p className="p-2 sm:pl-5 sm:pr-5">
        I'm a web developer based in Japan. I was born in Denver, Colorado, in
        the United States. I graduated from Colorado State University. During
        University, I studied Biochemistry, Spanish, and History, ultimately
        graduating with a degree in Spanish, with a focus in translation,
        interpreting, and linguistics for education. From there, I began to work
        at a travel agency, and then ended up working for an escrow company
        assisting with title insurance. After that, I moved to Japan, and have
        been living there since 2016, working as an English teacher. While I
        love teaching, and have enjoyed my time as a teacher, I feel that for my
        future, it is best for me to move on.
      </p>
      <SmallHorizonalLine />
      <p className="p-2 sm:pl-5 sm:pr-5">
        I've always had a passion for technology. When I was a high-school and
        university student, I wrote some of my own plugins for World of Warcraft
        in simple lua, and often tweaked the plugins of others. I was often in
        charge of managing things like "DKP" and scheduling, so I often used
        excel or other simpler technologies to assist me. In my professional
        life, I've often assisted the IT department whenever they call to the
        office, helping them when coworkers struggled. This lead to me trying
        various different projects (Python, Java, even a little bit of C) before
        ultimately deciding that I enjoyed web development the most.
      </p>
      <SmallHorizonalLine />
      <p className="p-2 sm:pl-5 sm:pr-5">
        Web development is my biggest interest in programming. The choices of
        technologies and combination of artistic skills along with programming
        skills makes for a good mix where I am both comfortable and passionate.
        I enjoy seeing how technologies can be scaffolded together to making a
        working web application, and React in particular, with its powerful
        data-binding and fast rendering capabilities are very fun to explore. I
        enjoy the challenge of trying new technologies, and have made an effort
        to try new ones as often as possible to find a workflow that I enjoy. At
        heart, though, React is still my favorite technology that I have used to
        date and it is the technology I have the most interest in.
      </p>
    </article>
  );
};
export default About;
