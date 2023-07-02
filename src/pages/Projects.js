import React,{useEffect} from 'react'
import ListProject from '../components/ListProject'
import HeaderProjectPage from '../components/HeaderProjectPage'
import ScrollReveal from 'scrollreveal'

export default function Projects() {
  useEffect(()=>{
    ScrollReveal().reveal('.textHeader2',{origin:'top'});
    ScrollReveal().reveal('.listContainer',{origin:'left'})
    ScrollReveal().reveal('.reverse',{origin:'right'})
  
  },[])
  return (
    <>
    <HeaderProjectPage/>
    <ListProject/>
    </>
  )
}
