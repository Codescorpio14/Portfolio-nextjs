import Link from "next/link";
import PageTransition from "../_components/animations/PageTransition";

const ProjectsLayout = ({ children }) => {
  return (
    <div className="py-8">
      <Link href="./#projects" className="btn py-2 px-4 blo">
        Go Back
      </Link>

      <div>{children}</div>
    </div>
  );
};

export default ProjectsLayout;
