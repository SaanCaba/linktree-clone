import { Link as TypeLink } from "@/types";
import { getDataFromSheets } from "../utils/getData";
import Link from "next/link";

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
                <span className="cursor-pointer">{el.label}</span>
              </div>
            </Link>
          );
        })}
      </ul>
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
