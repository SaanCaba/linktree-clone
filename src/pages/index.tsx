import { SHEETS_URL } from "@/constants";
import Papa from "papaparse";

type Link = {
  label: string;
  url: string;
};

async function getDataFromSheets(): Promise<Link[]> {
  const response = await fetch(SHEETS_URL);
  const data = await response.text();
  const dataParsed = new Promise<Link[]>((resolve, reject) => {
    Papa.parse<Link>(data, {
      header: true,
      complete: (result) => resolve(result.data),
      error: reject,
    });
  });
  return dataParsed;
}

interface Props {
  data: Link[];
}

export default function Home({ data }: Props) {
  return (
    <main>
      {data.map((el) => {
        return <h1>{el.label}</h1>;
      })}
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
