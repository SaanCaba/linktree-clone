import { Link as TypeLink } from "@/types";
import { getDataFromSheets } from "../utils/getData";
import Link from "next/link";
import Circle from "@/components/Circle";
import Image from "next/image";
import codingImg from "../images/268998.png";

interface Props {
  data: TypeLink[];
}

export default function Home({ data }: Props) {
  console.log(data);
  return (
    <main>
      <h1 className="text-center text-[50px] p-1">
        <i>CONTACTOS</i>
      </h1>
      <ul className="flex gap-5 items-center flex-col pt-4">
        {data.map((el, i) => {
          return (
            <Link key={i} href={el.url} target="__blank">
              <div
                style={{
                  backgroundColor: el.color,
                }}
                className={` p-2 w-[300px] text-center  rounded-lg transition-all duration-300 ease-linear hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]`}
              >
                <span className="cursor-pointer text-white text-xl">
                  {el.label.toUpperCase()}
                </span>
              </div>
            </Link>
          );
        })}
      </ul>
      <Circle
        className={`w-[50px]  transition-all hover:shadow-circle cursor-pointer duration-700 ease-linear hover:bg-greenHover h-[50px] bg-green absolute rounded-full top-[100px] left-[122px]`}
      />
      <Circle
        className={`w-[30px] transition-all hover:shadow-circle cursor-pointer duration-700 ease-linear hover:bg-greenHover h-[30px] bg-green absolute rounded-full top-[100px] right-[122px]`}
      />
      <Circle
        className={`w-[25px] transition-all hover:shadow-circle cursor-pointer duration-700 ease-linear hover:bg-greenHover h-[25px] bg-green absolute rounded-full bottom-[120px] right-[90px]`}
      />

      <Circle
        className={`w-[45px] transition-all hover:shadow-circle cursor-pointer duration-700 ease-linear hover:bg-greenHover h-[45px] bg-green absolute rounded-full bottom-[120px] left-[90px]`}
      />
      <Circle
        className={`w-[65px] transition-all hover:shadow-circle cursor-pointer duration-700 ease-linear hover:bg-greenHover h-[65px] bg-green absolute rounded-full bottom-[40px] left-[47%]`}
      />
      <Circle
        className={`w-[33px]  transition-all hover:shadow-circle cursor-pointer duration-700 ease-linear hover:bg-greenHover h-[33px] bg-green absolute rounded-full top-[350px] left-[48%]`}
      />
      <Image
        src={codingImg}
        className="absolute top-[200px] left-[240px] -rotate-[20deg]"
        alt="Coding img"
        width={120}
        height={120}
      />
      <Image
        src={codingImg}
        className="absolute top-[200px] right-[240px] rotate-[20deg]"
        alt="Coding img"
        width={120}
        height={120}
      />
    </main>
  );
}

export async function getServerSideProps() {
  const data = await getDataFromSheets();
  data.forEach((el) => {
    if (el.label === "Twitter") {
      el.color = "#3aa0f2";
      return;
    }
    if (el.label === "LinkedIn") {
      el.color = "#98c7ed";
      return;
    }
    if (el.label === "Portfolio") {
      el.color = "#121212";
      return;
    }
    el.color = "#474747";
  });
  return {
    props: {
      data,
    },
  };
}
