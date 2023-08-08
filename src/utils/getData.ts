import { SHEETS_URL } from "@/constants";
import { Link } from "@/types";
import Papa from "papaparse";

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

export {getDataFromSheets}

