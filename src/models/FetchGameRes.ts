import Game from "./Game";

export default interface FetchGameRes {
    count: number;
    results: Game[];
  }