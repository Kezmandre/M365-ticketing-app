import { useState } from 'preact/hooks'
import React from 'react'
import EventIntro from '../component/EventIntro'
import RegistrationForm from '../component/RegistrationForm'

const Home = () => {

    const [currentPage, setCurrentPage] = (useState(1))

    const goToNext=()=>{
        setCurrentPage(currentPage + 1)
    }


  return (
    <div>
        {currentPage === 1 ? (
            <EventIntro OnNext={goToNext}/>
        ):(
         <RegistrationForm/>   
        )}
    </div>
  )
}

export default Home