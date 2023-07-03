import React,{useEffect} from 'react'
import ListProject from '../components/ListProject'
import HeaderProjectPage from '../components/HeaderProjectPage'
import ScrollReveal from 'scrollreveal'

export default function Projects() {
  useEffect(()=>{
    ScrollReveal().reveal('.textHeader2,.phone',{origin:'top'});
    ScrollReveal().reveal('.projectDescription',{origin:'bottom'})
  
  },[])
  return (
    <>
    <HeaderProjectPage/>
    <ListProject/>
    </>
  )
}
