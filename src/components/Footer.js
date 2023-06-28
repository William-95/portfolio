import React from 'react'
import "../css/footer.css";

export default function Footer() {
  return (
    <footer>
       <ul class="social-icon">
              <li> <a href="https://www.facebook.com/profile.php?id=100010400947448" target="_blank" rel="noreferrer"> <i class="fab fa-facebook" style={{color:'#3b5998'}}></i> </a> </li>
              <li> <a href="https://www.instagram.com/williamverga/" target="_blank" rel="noreferrer"><i class="fab fa-instagram" style={{color:'#ff00ff'}}></i></a> </li>
              <li> <a href="https://www.linkedin.com/in/william-verga-170723231/" target="_blank" rel="noreferrer"><i class="fab fa-linkedin" style={{color:'#0e76a8'}}></i></a> </li>
              <li> <a href="https://github.com/William-95" target="_blank" rel="noreferrer"><i class="fab fa-github" style={{color:'#171515'}}></i></a> </li>
              <li> <a href="/email.html" target="_blank" rel="noreferrer"><i class="fas fa-envelope-square" style={{color:'#FF0000'}}></i></a> </li>
            </ul>
          <p>&#169;2023 William Verga | Portfolio | All Rights Reserved</p>
    </footer>
  )
}
