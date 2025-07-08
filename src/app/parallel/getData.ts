import { cache } from "react";

async function getData(take: number) {
  return take;
}

export default cache(getData);
