import Genre from "./Genre";
import Platform from "./Platform";

export default interface GameQuery{
    genre: Genre | null;
    platform: Platform | null;
    orderBy: string | null;
    searchText: string | null;
}