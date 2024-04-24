import About1Img from "@/assets/images/about1.png";
import About2Img from "@/assets/images/about2.png";
import CustomButton from "@/shared/CustomButton";
import Image from "next/image";

const About = () => {
  return (
    <div className="bg-[#FDF0EC] mt-[100px] py-10">
      <div className="container grid xs:grid-cols-1 lg:grid-cols-2 my-10">
        <div className="relative h-[300px]">
          <Image
            className="xs:w-[200px] md:w-[300px] xs:h-[200px] md:h-[270px] absolute top-[-50px] left-20 shadow-lg home-about-img"
            src={About1Img}
            alt="About"
            loading="lazy"
          />
          <Image
            className="xs:w-[200px] md:w-[300px] xs:h-[200px] md:h-[270px] absolute xs:bottom-10 md:bottom-[-30px] lg:bottom-[-50px] right-20 shadow-lg home-about-img"
            src={About2Img}
            alt="About"
            loading="lazy"
          />
        </div>
        <div className="p-x-10">
          <p className="text-primary text-[20px]">About Us</p>
          <h4 className="text-[30px] font-bold">
            We will make you happy with our tour Services.
          </h4>
          <p className="mt-10">
            Phasellus pretium commodo purus at consequat. Fusce in augue
            suscipit dui pharetra molestie. Aenean iaculis dui eu tellus dictum
            euismod. Nam bibendum libero et ipsum aliquam, non vehicula dui
            cursus. Sed pharetra ornare faucibus. Pellentesque faucibus pulvinar
            turpis, quis suscipit ipsum. Sed fermentum nulla eget urna viverra
            feugiat. Maecenas convallis viverra metus in rutrum.{" "}
          </p>
          <ul className="list-disc custom-list mb-8">
            <li>
              Phasellus pretium commodo purus at consequat. scipit dui pharetra
              molestie.
            </li>
            <li>
              Phasellus pretium commodo purus at consequat. scipit dui pharetra
              molestie.
            </li>
            <li>
              Phasellus pretium commodo purus at consequat. scipit dui pharetra
              molestie.
            </li>
          </ul>
          <CustomButton colored>Get Started</CustomButton>
        </div>
      </div>
    </div>
  );
};

export default About;
