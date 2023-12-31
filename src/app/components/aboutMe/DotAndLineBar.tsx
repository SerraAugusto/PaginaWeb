import React from 'react'
import styled from 'styled-components'


const DotStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 27px;
  height: 27px;
  background-color: #77c2db;
  border-radius: 50%;

`
const DotAndBarContainer = styled.div`
display: flex;
flex-direction: column;
padding-right: 10px;

`
const LeftBar = styled.li`
background-color: #8f8e8e;
padding: 2px;
align-self: center;
list-style: none;
height: 100%;
`


export default function DotAndLineBar() {
  return <>
  
  <DotAndBarContainer>
              <DotStyle></DotStyle>
              <LeftBar></LeftBar>
            </DotAndBarContainer>
  
  </>
}
