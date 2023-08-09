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
  return (
    <main>
      <h1 className="text-center text-4xl p-1">Mis links</h1>
      <ul className="flex gap-5 items-center flex-col pt-4">
        {data.map((el, i) => {
          return (
            <Link href={el.url} target="__blank">
              <div
                key={i}
                className="bg-customBlack p-2 w-52 text-center border border-2 rounded-lg transition-all duration-300 ease-linear hover:bg-blackHover"
              >
                <span className="cursor-pointer text-white">{el.label}</span>
              </div>
            </Link>
          );
        })}
      </ul>
      <Circle
        className={`w-[50px] transition-all duration-700 ease-linear hover:bg-blackHover h-[50px] bg-black absolute rounded-full top-[100px] left-[122px]`}
      />
      <Circle
        className={`w-[30px] transition-all duration-700 ease-linear hover:bg-blackHover h-[30px] bg-black absolute rounded-full top-[100px] right-[122px]`}
      />
      <Circle
        className={`w-[25px] transition-all duration-700 ease-linear hover:bg-blackHover h-[25px] bg-black absolute rounded-full bottom-[120px] right-[90px]`}
      />

      <Circle
        className={`w-[45px] transition-all duration-700 ease-linear hover:bg-blackHover h-[45px] bg-black absolute rounded-full bottom-[120px] left-[90px]`}
      />
      <Circle
        className={`w-[65px] transition-all duration-700 ease-linear hover:bg-blackHover h-[65px] bg-black absolute rounded-full bottom-[40px] left-[47%]`}
      />
      <Circle
        className={`w-[33px] transition-all duration-700 ease-linear hover:bg-blackHover h-[33px] bg-black absolute rounded-full top-[300px] left-[48%]`}
      />
      <Image
        src={codingImg}
        className="absolute top-[200px] left-[300px] -rotate-[20deg]"
        alt="Coding img"
        width={120}
        height={120}
      />
      <Image
        src={codingImg}
        className="absolute top-[200px] right-[300px] rotate-[20deg]"
        alt="Coding img"
        width={120}
        height={120}
      />
    </main>
  );
}

export async function getServerSideProps() {
  const data = await getDataFromSheets();
  return {
    props: {
      data,
    },
  };
}
