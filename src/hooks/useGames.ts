import Game from "../models/Game";
import GameQuery from "../models/GameQuery";
import useData from "./useData";

const useGames = (gameQuery: GameQuery | null) => useData<Game>('/games', 
    [gameQuery] ,
    {
        params: {
            genres: gameQuery?.genre?.id, 
            platforms: gameQuery?.platform?.id, 
            ordering: gameQuery?.orderBy, 
            search: gameQuery?.searchText
        }
    }
)    

export default useGames;