import React from 'react'
import {BsWhatsapp} from 'react-icons/bs'
import {AiFillGithub, AiFillTwitterCircle, AiOutlineInstagram, AiFillLinkedin} from 'react-icons/ai'
import './Footer.css'

function Footer() {
  return (
  <footer>
    
    <ul className='links'>
       <li><a href='#'>Home</a></li>
       <li><a href='#about'>About</a></li>
       <li><a href='#skill'>Skill</a></li>
       <li><a href='#project'>Project</a></li>
       <li><a href='#contact'>Contact</a></li>
    </ul>
    <div className='footer_social'>
      <a href='https://wa.me/+918959353762' target="_blank" ><BsWhatsapp/></a>
      <a href='https://instagram.com/_lalitpatidar_?igshid=NzZlODBkYWE4Ng==' target="_blank"><AiOutlineInstagram/></a>
      <a href='https://www.linkedin.com/in/lalit-patidar-519617245' target="_blank"><AiFillLinkedin/></a>
      <a href='https://github.com/lalitpatidar018' target="_blank"><AiFillGithub/></a>
      
    </div>
    
  </footer>
  )
}

export default Footer
