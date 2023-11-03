import type { FC } from "react";
import Guitar1 from '/src/assets/Guitar-1.png';
import Guitar2 from '/src/assets/Guitar-1.png';
import Guitar3 from '/src/assets/Guitar-1.png';

interface ProductsProps {}
type item = {
  id: number;
  image: string;
  name: string;
  price: string;
  description: string;
  colour: string;
};

const Products: FC<ProductsProps> = () => {
  const items: item[] = [
    {
      id: 1,
      image: Guitar1,
      name: "Brand Name",
      price: "$2995",
      description: "Product description here",
      colour: "0 Colours available",
    },
    {
      id: 2,
      image: Guitar2,
      name: "Brand Name",
      price: "$2995",
      description: "Product description here",
      colour: "0 Colours available",
    },
    {
      id: 3,
      image: Guitar3,
      name: "Brand Name",
      price: "$2995",
      description: "Product description here",
      colour: "0 Colours available",
    },
  ];
  return (
    <main className="mt-52">
      <section className="py-8">
        <div className="w-[80px] bg-[#AB0433] h-1 m-auto"></div>
        <h3 className="lg:text-[40px] text-2xl text-[#505050] font-semibold text-center">
          New Products
        </h3>
      </section>
      <section className="flex max-md:flex-col justify-center items-center lg:gap-8 gap-y-4">
        {items.map((guitar) => (
          <div
            className=" rounded-lg border-2 drop-shadow-sm max-md:max-w-fit max-md:m-auto"
            key={guitar.id}
          >
            <div className=" bg-[#D3D3D3] lg:p-4 p-2 rounded-t-lg">
              <img className="max-md:w-68" src={guitar.image} alt="" />
            </div>
            <div className="flex justify-between items-center text-[#252525] font-semibold lg:p-4 p-2">
              <h3>{guitar.name}</h3>
              <p>{guitar.price}</p>
            </div>
            <h4 className="text-[#767676] lg:p-4 p-2 ">{guitar.description}</h4>
            <p className="text-[#767676] lg:pt-10 pt-4 lg:p-4 p-2">
              {guitar.colour}
            </p>
          </div>
        ))}
      </section>
    </main>
  );
};
export default Products;
