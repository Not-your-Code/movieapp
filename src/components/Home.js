import React, { useState, useEffect } from 'react'
//API

import API from '../API'
//config

import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config'

//components
import HeroImage from './HeroImg'
import Grid from './Grid'
import Thumb from './Thumb'
import Spinner  from './spinner'
import SearchBar from './SearchBar'
import Button from './Button'
//hook
import { useHomeFetch } from '../hooks/useHomeFetch'

//Image
import NoImage from '../images/no_image.jpg'


const Home = () => {

  const { state, loading, error ,searchTerm , setSearchTerm  , setIsLoadingMore} = useHomeFetch()

  console.log(state)

  if(error) return <div>Something went Wrong..</div>

  return (
    <>

      {state.results[0] ?
        <HeroImage
          imgae={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}

        /> : null
      }
      <SearchBar setSearchTerm={setSearchTerm}/>
      <Grid header={searchTerm?'Search Results':'Popular Movies'}>
        {state.results.map(movie => (

          <Thumb 
          key={movie.id}
          clickable
          imgae = {
              movie.poster_path?IMAGE_BASE_URL+POSTER_SIZE+movie.poster_path:NoImage
            
          }

          movieId={movie.id}
          
          />

        ))}
      </Grid>
     {  loading && <Spinner />}
      {state.page < state.total_pages && !loading &&(
        <Button text='Load More' callback={()=>setIsLoadingMore(true)}/>
      )}

    </>
  )
}

export default Home