import Button from "../_components/Button";

const ProjectsLayout = ({ children }) => {
  return (
    <div className="p-8">
      <Button href="./#projects" className="py-2 px-4">
        Go Back
      </Button>

      <div>{children}</div>
    </div>
  );
};

export default ProjectsLayout;
