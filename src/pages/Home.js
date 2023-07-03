import React,{useEffect} from 'react'
import Header from '../components/Header'
import Lenguage from '../components/Lenguage'
import Projects from '../components/Projects'
import About from '../components/About'
import ScrollReveal from 'scrollreveal';

export default function Home() {
  useEffect(()=>{
    ScrollReveal().reveal('.headerMyImg,.titleProject,.titleAbout,.titleCarousel',{origin:'top'});
    ScrollReveal().reveal('.textSection,.carouselContainer,.projectCard,.formContainer,.myImg,.textHeader,',{origin:'bottom'})
    
  
  },[])
  return (
    <>
  <Header/>
  <About/>
  <Projects/>
  <Lenguage/>
    </>
  )
}
