import CustomHeader from './shared/components/CustomHeader'
import PreviousSearches from './gifs/components/PreviousSearches'
import SearchBar from './shared/components/SearchBar'
import GifList from './gifs/components/GifList'
import useGifs from './gifs/hooks/useGifs'

export const GifsApp = () => {
    const { previousTerms, handleSearch, handleTermClicked, gifs } = useGifs()
    return (
        <>
            {/* Header */}
            <CustomHeader title='Buscador de gifs' description='Descubre y comparte el Gif perfecto' />

            {/* Search */}
            <SearchBar placeholder='Busca lo que quieras' onQuery={handleSearch} />

            {/* Previous searches */}
            <PreviousSearches title='Busquedas previas' searches={previousTerms} onLabelClicked={handleTermClicked} />
            {/* Gifs*/}
            <GifList gifs={gifs} />
        </>
    )
}

