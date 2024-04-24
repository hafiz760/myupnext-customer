const PageHeader = ({ title, description, bg }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        maxHeight: "300px",
        height: "300px",
      }}
      className="flex flex-col items-center justify-center"
    >
      <h2 className="text-5xl text-white font-bold">{title}</h2>
      <p className="text-white">{description}</p>
    </div>
  );
};

export default PageHeader;
