const LargePageHeader = ({ bg, showForm, children }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className={`flex flex-col items-center justify-center ${
        showForm ? "pt-[2rem] pb-32" : "py-32"
      } rounded-3xl`}
    >
      {children}
    </div>
  );
};

export default LargePageHeader;
