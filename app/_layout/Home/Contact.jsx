import HoverTilt from "@/app/_components/animations/HoverTilt";
import TextSlideIn from "@/app/_components/animations/TextSlideIn";
import ViewScale from "@/app/_components/animations/ViewScale";
import Button from "@/app/_components/Button";

const Contact = () => {
  return (
    <HoverTilt>
      <ViewScale containerStyle="p-8">
        <div className="max-w-4xl mx-auto  text-center rounded-lg bg-gradient-to-br from-violet-600 to-violet-500 text-neutral-900 p-4 shadow-lg shadow-gray-800/30">
          <TextSlideIn>
            <h1 className="text-2xl uppercase font-bold">Contact Me</h1>
          </TextSlideIn>
          <p className="p-4 text-sm font-medium md:text-base md:font-semibold">
            Whether you are starting a project, have business inquiries, or just
            want to say hi, my inbox is always open. Feel free to reach out, and
            I will get back to you as soon as possible.
          </p>
          <Button href="mailto:alvirhasan.dev@gmail.com" className=" px-4 py-2">
            Reach Out
          </Button>
        </div>
      </ViewScale>
    </HoverTilt>
  );
};

export default Contact;
