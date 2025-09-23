import React, { useState } from 'react'
import { mockGifs } from './mock-data/gifs.mock'
import CustomHeader from './shared/components/CustomHeader'
import PreviousSearches from './gifs/components/PreviousSearches'
import SearchBar from './shared/components/SearchBar'
import GifList from './gifs/components/GifList'

const GifsApp = () => {
    const [previousTerms, setPreviousTerms] = useState(['dragon ball z']);
    const handleTermClicked = (term: string) => {
        console.log({ term });
    }
    const handleSearch = (query: string) => {
        console.log({ query });
    }

    return (
        <>
            {/* Header */}
            <CustomHeader title='Buscador de gifs' description='Descubre y comparte el Gif perfecto' />

            {/* Search */}
            <SearchBar placeholder='Busca lo que quieras' onQuery={handleSearch} />

            {/* Previous searches */}
            <PreviousSearches title='Busquedas previas' searches={previousTerms} onLabelClicked={handleTermClicked} />
            {/* Gifs*/}
            <GifList gifs={mockGifs} />
        </>
    )
}

export default GifsApp
