import React from 'react'
import FormContact from '../components/FormContact'
import headerBg from '../img/header3.jpg'
export default function Contact() {
  return (
    <div style={{
      backgroundImage: `url(${headerBg})`,
    }}>
      <FormContact/>
    </div>
  )
}
