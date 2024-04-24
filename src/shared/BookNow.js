import BookImg from "@/assets/images/book.png";
import CustomButton from "./CustomButton";

const BookNow = () => {
  return (
    <div
      className="grid md:grid-cols-3 rounded-xl my-10"
      style={{
        backgroundImage: `url(${BookImg.src})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="md:col-span-1 bg-primary text-white p-8 md:rounded-lg md:rounded-r-[90px]">
        <h2 className="text-3xl font-bold mb-5">
          Are You ready For Your Trip?
        </h2>
        <p className="text-sm mb-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
        <CustomButton>Book Now</CustomButton>
      </div>
      <div className="md:col-span-2"></div>
    </div>
  );
};

export default BookNow;
