import type { FC } from "react";
import Product1 from "/src/assets/Product-1.png"
import Product2 from "/src/assets/Product-2.png"
import Product3 from "/src/assets/Product-3.png"



interface FindsProps {}
type item = {
  id: number;
  image: string;
  name: string;
  price: string;
  description: string;
  colour: string;
};

const Finds: FC<FindsProps> = () => {
  const items: item[] = [
    {
      id: 1,
      image: Product1,
      name: "Brand Name",
      price: "$2995",
      description: "Product description here",
      colour: "0 Colours available",
    },
    {
      id: 2,
      image: Product2,
      name: "Brand Name",
      price: "$2995",
      description: "Product description here",
      colour: "0 Colours available",
    },
    {
      id: 3,
      image: Product3,
      name: "Brand Name",
      price: "$2995",
      description: "Product description here",
      colour: "0 Colours available",
    },
  ];
  return (
    <main className="bg-[#EAEAEA] mt-16 py-16">
      <section className="py-8">
        <div className="w-[80px] bg-[#AB0433] h-1 m-auto "></div>
        <h3 className="text-[40px] max-md:text-2xl text-[#505050] font-semibold text-center ">
          Popular Finds
        </h3>
      </section>
      <section className="flex max-md:flex-col justify-center items-center lg:gap-8 gap-y-4">
        {items.map((product) => (
          <div
            className=" rounded-lg border-2 drop-shadow-sm p-y bg-[#FFFFFF] max-md:max-w-fit max-md:m-auto"
            key={product.id}
          >
            <div className=" lg:p-4 rounded-t-lg">
              <img src={product.image} alt="" />
            </div>
            <div className="flex justify-between items-center text-[#252525] font-semibold p-4">
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
            <h4 className="text-[#767676] p-4 ">{product.description}</h4>
            <p className="text-[#767676] pt-10 p-4">{product.colour}</p>
          </div>
        ))}
      </section>
    </main>
  );
};
export default Finds;
