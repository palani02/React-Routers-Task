import React from 'react'
import './Portfolio.css';
function Portfolio() {
  return (
//     <header>
//     <a href="/" class="logo"><i class="fab fa-node-js"></i></a>

//     <div id="menu" class="fas fa-bars"></div>
//     <nav class="navbar">
//         <ul>
//         <li><a class="active" href="#home">Home</a></li>
//         <li><a href="#about">About</a></li>
//         <li><a href="#skills">Skills</a></li>
//         <li><a href="#education">Education</a></li>
//         <li><a href="#work">Work</a></li>
//         <li><a href="#experience">Experience</a></li>
//         <li><a href="#contact">Contact</a></li>
//         </ul>
//     </nav>
// </header>

<div><h3>Portfolio</h3>
    <div className='subject'>
    <h1>Palani Baba</h1>
    <h1>B.E(C.S.E)</h1>
    <h1>Student</h1>
    <h1>Saveetha Engineering College</h1>
    <div><h1>Education Qualification</h1>
<table>
    <tr>
        <th>Highest Degree</th>
        <th>Years</th>
        <th>Institution</th>
        <th>CGPA</th>
    </tr>
    <tr>
        <td><b>B.E</b>(Computer Science Engineering)</td>
        <td>July 2021 - Present</td>
        <td>Saveetha Engineering College</td>
        <td>8.2 CGPA</td>
    </tr>
    <tr>
    <td>Diploma</td>
    <td>2017-2019</td>
    <td>Sitheshwarar Polytechnic College</td>
    <td>82.5%</td>
    </tr>
   
        <tr>
            <td>SSLC</td>
            <td>2016-2018</td>
            <td>Sri RamaKrishna Matric Higher Secondaray School</td>
          
            </tr>
</table></div>
    <div>

    {/* <strong><h1>Interest</h1></strong>
    <ul>
     <h3><li> 
      </li>
      <li>Programming</li>
      <li>Playing football, badminton</li>
      </h3> 
    </ul> */}
    <div><h1>Language Known</h1><h3><ul>
    <li>Tamil - Read,Write,Speak</li>
    <li>English - Read,Write,Speak</li>
   
</ul></h3></div>
    </div>
    </div>
    </div>
  )
}

export default Portfolio