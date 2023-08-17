import React, { useRef } from 'react';

import styled from 'styled-components'
import Header from '@/app/components/layouts/Header'

import LandingSpace from '@/app/components/landingSpace/LandingSpace'
import AboutMe from '@/app/components/aboutMe/AboutMe'
import Skills from '@/app/components/skills/Skills'
import Portfolios from '@/app/components/portfolios/Portfolio'






export default function index() {
  return ( <>
   
     <Header></Header>
  <LandingSpace></LandingSpace>
 
  
  <Skills></Skills>  

      
  <AboutMe></AboutMe>
  
  
      
<Portfolios></Portfolios>

  </>
    
  )
}

