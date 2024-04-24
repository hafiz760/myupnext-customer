import Link from "next/link";

const CategoresHeader = () => {
  const categories = [
    { title: "Popular destinations", href: "/search" },
    { title: "All categories", href: "/search" },
    { title: "Tours & experiences", href: "/search" },
    { title: "Attraction tickets", href: "/search" },
    { title: "Hotels", href: "/hotels" },
    { title: "Flights", href: "/flights" },
    { title: "Transport", href: "/transport" },
  ];

  return (
    <div className="container mx-auto flex my-5 items-center justify-center">
      <div className="flex items-center justify-center w-full space-x-4 overflow-x-auto">
        {categories.map((category, index) => {
          return (
            <div key={index}>
              <Link href={category.href} className="hover:text-primary">
                <p className="cursor-pointer font-semibold whitespace-nowrap">
                  {category.title}
                </p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoresHeader;
