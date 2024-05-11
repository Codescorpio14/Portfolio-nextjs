import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="about">
      <h1 className="title">About me</h1>
      <div className="about-intro">
        <div className="about-text">
          <p>
            Hello, I&apos;m Aminul Hasan Alvir, a passionate front-end developer
            hailing from Dhaka, Bangladesh. Despite graduating with honors in
            LLB, my heart lies in the world of technology. I have honed my
            skills in front-end development, specializing in crafting fully
            responsive and interactive web pages.
          </p>
          <p>
            My arsenal includes proficiency in HTML, CSS, and vanilla
            JavaScript. I am adept at utilizing CSS frameworks such as Tailwind,
            and Sass to enhance the aesthetic and functionality of my projects.
            Additionally, I have embraced the power of React.js and its
            libraries to bring dynamic and seamless user experiences to life.
          </p>
          <p>
            With a firm foundation in front-end technologies, I aspire to
            transition into a full-stack developer role in the future. I am
            enthusiastic about staying at the forefront of technology and
            contributing my skills to create innovative and user-centric digital
            experiences. Let&apos;s build something amazing together!
          </p>
        </div>
        <div className="about-image">
          <Image
            className="about-img"
            height={447}
            width={559}
            src="/image/my-photo.png"
            alt="Photo of alvir"
          />
        </div>
      </div>
      <hr />
      <h1 className="title">Skills</h1>
      <div className="about-skills">
        <i className="fa-brands fa-html5" style={{ color: " #ff9500" }}></i>
        <i className="fa-brands fa-css3" style={{ color: "#0a64ff" }}></i>
        <i className="fa-brands fa-js" style={{ color: "#e6de00" }}></i>
        <i className="fa-brands fa-react" style={{ color: "#478bff" }}></i>
        <i className="fa-brands fa-sass" style={{ color: "#fe58d2" }}></i>

        <Image
          className="c-icon"
          height={100}
          width={100}
          src="/image/tailwindcss.png"
          alt="tailwind"
        />

        <Image
          className="c-icon"
          height={100}
          width={100}
          src="/image/nextjs.jpg"
          alt="tailwind"
        />

        <Image
          className="c-icon"
          height={100}
          width={100}
          src="/image/nodejs.png"
          alt="tailwind"
        />
      </div>
    </section>
  );
};

export default About;
