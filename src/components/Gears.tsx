import type { FC } from "react";

interface GearsProps {}
type item = {
  id: number;
  image: string;
  article: string;
  subhead: string;
};

const Gears: FC<GearsProps> = () => {
  const items1: item[] = [
    {
      id: 1,
      image: "/src/assets/guitar-on-piano.jpg",
      article: "Article Title",
      subhead: "Article Subhead",
    },
    {
      id: 2,
      image: "/src/assets/man-with-guitar.jpg",
      article: "Article Title",
      subhead: "Article Subhead",
    },
  ];
  const items2: item[] = [
    {
      id: 1,
      image: "/src/assets/man-with-guitar-2.jpg",
      article: "Article Title",
      subhead: "Article Subhead",
    },
    {
      id: 2,
      image: "/src/assets/music-board.jpg",
      article: "Article Title",
      subhead: "Article Subhead",
    },
    {
      id: 3,
      image: "/src/assets/yellow-guitar.jpg",
      article: "Article Title",
      subhead: "Article Subhead",
    },
  ];
  return (
    <main className="my-8 ">
      <section className="py-8">
        <div className="w-[80px] bg-[#AB0433] h-1 m-auto "></div>
        <h3 className="text-[40px] max-md:text-2xl text-[#505050] font-semibold text-center ">
          Gear Heads
        </h3>
      </section>
      <section className="max-md:flex max-md:flex-col-reverse">
        <div className=" flex max-md:flex-col justify-center items-center gap-4 drop-shadow-sm my-8  text-[#202020]">
          {items1.map((item_one) => (
            <div
              className=" bg-[#EAEAEA] rounded-lg max-md:max-w-fit max-md:m-auto"
              key={item_one.id}
            >
              <img className="max-md:w-[320px]" src={item_one.image} alt="" />
              <div className=" ml-4 rounded-b-lg">
                <h3 className="text-2xl font-bold my-2">{item_one.article}</h3>
                <p className="text-lg font-semibold my-2 text-[#C4C4C4]">
                  {item_one.subhead}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex max-md:flex-col justify-center items-center gap-4 text-[#FFFFFF]">
          {items2.map((item_two) => (
            <div
              className="bg-[#202020] rounded-b-lg max-md:max-w-fit max-md:m-auto"
              key={item_two.id}
            >
              <img className="max-md:w-[320px]" src={item_two.image} alt="" />
              <div className="ml-4">
                <h3 className="text-2xl font-bold my-2">{item_two.article}</h3>
                <p className="text-lg font-semibold my-2 text-[#C4C4C4]">
                  {item_two.subhead}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};
export default Gears;
