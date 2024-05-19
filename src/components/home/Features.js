import Feature1Img from "@/assets/images/feature-1.png";
import Feature2Img from "@/assets/images/feature-2.png";
import Feature3Img from "@/assets/images/feature-3.png";
import Feature4Img from "@/assets/images/feature-4.png";
import CustomButton from "@/shared/CustomButton";
import Image from "next/image";
import plane from "../../assets/images/plane.svg";
import search from "../../assets/images/search.svg";
import enjoy from "../../assets/images/enjoy.svg";
import hand from "../../assets/images/hand.svg";
const Features = () => {
  const features = [
    {
      icon: search,
      title: "Discover the possibilities",
      desc: "With nearly half a million attractions, hotels & more, you are sure to find joy.",
    },
    {
      icon: enjoy,
      title: "Enjoy deals & delights",
      desc: "Quality activities. Great prices. Plus, earn Klook credits to save more.",
    },
    {
      icon: hand,
      title: "Exploring made easy",
      desc: "Book last minute, skip lines & get free cancellation for easier exploring.",
    },
    {
      icon: plane,
      title: "Travel you can trust",
      desc: "Read reviews & get reliable customer support. We are with you at every step.",
    },
  ];
  console.log(Image);
  return (
    <div className="bg-[#FDF0EC] mt-[80px] py-20">
      <div className="container grid grid-cols-1 md:grid-cols-2 place-items-center gap-x-5">
        <div>
          <p className="text-primary text-[20px]">Features</p>
          <h4 className="text-[30px] font-bold">Why Choose Tripiphy</h4>
          <div>
            {features.map((feature, index) => {
              return (
                <div key={index} className="my-3 flex items-center gap-5">
                  <div className="h-[56px] w-[56px] rounded-md flex items-center justify-center bg-primary text-white">
                    <Image
                      src={feature.icon}
                      loading="lazy"
                      className="w-[32px]"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-[18px]">{feature.title}</p>
                    <p className="text-[15px]">{feature.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <CustomButton colored>Get Started</CustomButton>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Image src={Feature1Img} loading="lazy" className="w-[200px]" />
          <Image src={Feature2Img} loading="lazy" className="w-[200px]" />
          <Image src={Feature3Img} loading="lazy" className="w-[200px]" />
          <Image src={Feature4Img} loading="lazy" className="w-[200px]" />
        </div>
      </div>
    </div>
  );
};

export default Features;
