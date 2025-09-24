import { useRef, useState } from "react";
import type { Gif } from "../interfaces/gif.interface";
import { getGifsByQuery } from "../actions/get-gifs-by-query.action";

// const gifsCache: Record<string, Gif[]> = {};

const useGifs = () => {
    const [previousTerms, setPreviousTerms] = useState<string[]>([]);
    const [gifs, setGifs] = useState<Gif[]>([]);

    const gifsCache = useRef<Record<string, Gif[]>>({}) // Mantiene el valor sin disparar Re-renders

    const handleTermClicked = async (term: string) => {
        if (gifsCache.current[term]) {
            setGifs(gifsCache.current[term]);
            return;
        }
        const gifs = await getGifsByQuery(term);
        setGifs(gifs);
    }
    const handleSearch = async (query: string) => {

        const term = query.toLowerCase().trim()
        if (query.length === 0) return;
        if (previousTerms.includes(term)) return;
        setPreviousTerms([query, ...previousTerms].slice(0, 7));

        const gifs = await getGifsByQuery(query);
        setGifs(gifs);

        gifsCache.current[query] = gifs;
    }

    return {
        //Properties
        gifs,
        // Methods
        handleSearch,
        handleTermClicked,
        previousTerms
    }
}

export default useGifs

