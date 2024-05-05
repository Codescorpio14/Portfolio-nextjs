import Image from "next/image";

const Project = ({ imageSrc, title, detail, usedLang, link }) => {
  const langList = usedLang.map((lang) => <p key={lang}>{lang}</p>);
  return (
    <div className="project-container">
      <div className="project-header">
        <div className="circle-con">
          <span className="circle-red"></span>
          <span className="circle-yellow"></span>
          <span className="circle-green"></span>
        </div>
        <p>{title}</p>
      </div>
      <div className="project-content">
        <Image width={400} height={300} src={imageSrc} alt={title} />
        <div className="project-texts">
          <p>{detail}</p>
          <div className="lang-list">{langList}</div>
          <a
            className="btn live-link"
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            Live Site
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
