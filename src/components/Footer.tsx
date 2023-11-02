import type { FC } from "react";
import logo from "/src/assets/Central Music Logo.png";

interface FooterProps {}
type List = {
  id: number;
  list: string;
};

const Footer: FC<FooterProps> = () => {
  const List1: List[] = [
    { id: 1, list: "Overview" },
    { id: 2, list: "Order History" },
    { id: 3, list: "Wishlist" },
    { id: 4, list: "Account information" },
  ];

  const List2: List[] = [
    { id: 1, list: "Security Notice" },
    { id: 2, list: "Location & Hours" },
    { id: 3, list: "Rentals" },
    { id: 4, list: "Privacy Notice" },
  ];
  return (
    <main>
      <footer className="flex justify-between items-center bg-[#505050] p-10">
        <section className="flex items-center gap-6 ml-8">
          <div>
            <h1 className="text-[#FFFFFF] text-sm font-bold">
              <div className="w-[58px] bg-[#FFFFFF] h-1 my-1"></div>
              My Account
            </h1>
            {List1.map((menu) => (
              <ul key={menu.id} className="text-sm text-[#FFFFFF] ">
                <li>{menu.list}</li>
              </ul>
            ))}
          </div>

          <div className="max-md:hidden">
            <h1 className="text-[#FFFFFF] text-sm font-bold">
              <div className="w-[58px] bg-[#FFFFFF] h-1 my-1"></div>
              Store
            </h1>
            {List2.map((menu) => (
              <ul key={menu.id} className="text-sm text-[#FFFFFF] ">
                <li>{menu.list}</li>
              </ul>
            ))}
          </div>
        </section>
        <section className="mr-4 max-md:hidden">
          <img src={logo} alt="logo" />
        </section>
      </footer>
      <p className="bg-[#252525] text-[#FFF] text-xs py-1 pl-16">
        ©2021 Music Store
      </p>
    </main>
  );
};
export default Footer;
