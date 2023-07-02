import React,{useEffect} from 'react'
import Header from '../components/Header'
import Lenguage from '../components/Lenguage'
import Projects from '../components/Projects'
import ScrollReveal from 'scrollreveal';

export default function Home() {
  useEffect(()=>{
    ScrollReveal().reveal('.headerMyImg,.titleProject',{origin:'top'});
    ScrollReveal().reveal('.projectCard,.formContainer',{origin:'bottom'})
    ScrollReveal().reveal('.textHeader,.titleCarousel',{origin:'left'})
    ScrollReveal().reveal('.carouselContainer',{origin:'right'})
  
  },[])
  return (
    <>
  <Header/>
  <Lenguage/>
  <Projects/>
    </>
  )
}
