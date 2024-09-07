// import { Routes, Route } from 'react-router-dom';

import React, { useState } from 'react';

import img2 from './images/about.jpg'
import img3 from './images/dot.png'
import { FiAward } from "react-icons/fi";

import { AiOutlineUser } from 'react-icons/ai'
import { AiOutlineMail } from 'react-icons/ai'
import { AiOutlinePhone } from 'react-icons/ai'
import { FaRegAddressBook } from 'react-icons/fa'
import { AiFillFacebook} from 'react-icons/ai';
import {AiOutlineTwitter} from 'react-icons/ai';
import {AiOutlineInstagram} from 'react-icons/ai';
import {BiLogoGmail} from 'react-icons/bi';
import { FaGithub } from "react-icons/fa";
import { GiSkills } from 'react-icons/gi'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { MdCastForEducation } from 'react-icons/md'
import { BiSolidDownload } from 'react-icons/bi'
import { FaPaperPlane} from 'react-icons/fa'
import { PiDotsNineBold} from 'react-icons/pi'
import resume from './images/Rana Ammar Mushtaq.pdf'
import solar from './images/solor.jpg'
import ecom from './images/ecom.jpg'
import todo from './images/todo.jpg'
import AutoTypeText from './components/AutoTypeText';

    
const App = () => {
  const [selected, setSelected] = useState(null);

  const handleItemClick = (index) => {
    setSelected(index);
  };
    const downloadResume = () => {
      const link = document.createElement('a');
      link.href = resume;
      link.setAttribute('download', 'Your_Resume.pdf');
      document.body.appendChild(link);
      link.click();
    };

  return (
    <>
 
 <nav className="navbar navbar-expand-lg navbar-light  fixed-top">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className={`nav-item ${selected === 0 ? 'bold' : ''}`}>
                <a
                  className={`nav-a ${selected === 0 ? 'active' : ''}`}
                  href='#home'
                  onClick={() => handleItemClick(0)}
                >
                  Home
                </a>
              </li>
              <li className={`nav-item ${selected === 1 ? 'bold' : ''}`}>
                <a
                  className={`nav-a ${selected === 1 ? 'active' : ''}`}
                  href='#about'
                  onClick={() => handleItemClick(1)}
                >
                  About
                </a>
              </li>
              <li className={`nav-item ${selected === 2 ? 'bold' : ''}`}>
                <a
                  className={`nav-a ${selected === 2 ? 'active' : ''}`}
                  href='#skill'
                  onClick={() => handleItemClick(2)}
                >
                  Skills
                </a>
              </li>
              <li className={`nav-item ${selected === 2 ? 'bold' : ''}`}>
                <a
                  className={`nav-a ${selected === 2 ? 'active' : ''}`}
                  href='#project'
                  onClick={() => handleItemClick(2)}
                >
                  Projects
                </a>
              </li>
              <li className={`nav-item ${selected === 3 ? 'bold' : ''}`}>
                <a
                  className={`nav-a ${selected === 3 ? 'active' : ''}`}
                  href='#contact'
                  onClick={() => handleItemClick(3)}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <style>
        {`
          .nav-a {
            color: white;
            text-decoration: none; /* Removes underlines */
            transition: color 0.3s;
            margin: 0 10px; /* Adds margin between links */
          }
          .nav-a:hover {
            color: red;
          }
          .bold {
            font-weight: bold;
          }
        `}
      </style>
      {/* Home */}
      {/* <header id='home' className="py-5  main-img" > */}
  
  {/* <div className="text-center "> */}
      {/* <img className="img-fluid rounded-circle  dp-img" src={img} width={200} alt="..."/> */}
      {/* <h1 className='text-white name1'>Hello I'm</h1>
      <h1 className="text-danger   myname">Rana Ammar Mushtaq</h1> */}
      {/* <h5 className="text-white  mb-0">Assosiate Software Engineer -Mern</h5> */}
      {/* <AutoTypeText /> */}
  {/* </div> */}
{/* </header> */}


<div className="home">

<div className="row">
  <div className="col-md-12 mt-5 pt-5 px-5 home-text">
      <h1 className='text-white name1'>Hello I'm</h1>
      <h1 className="text-danger   myname">Rana Ammar Mushtaq</h1>
      <AutoTypeText   />
  </div>
  
</div>

</div>




{/* about */}

<div id='about' className="row featurette text-white p-5" data-aos="fade-up">
  <div className="col-md-7 order-md-2 px-5"  >
    <h2 className="featurette-heading fw-normal lh-1 text-danger">About Me </h2>
    <hr className='about-icon '/>
    <p className="lead">Passionate and motivated in Software Engineering with a strong foundation in HTML, CSS, and JavaScript. Seeking an entry-level position
to contribute to web development projects and further enhance my skills while delivering high-quality user experiences.</p>
<div className="about-detail p-4">
  <div className="row">
    <div className="col-md-6">
      <span className='bio'> <AiOutlineUser/> </span>  Rana Ammar Mushtaq
    </div>
    <div className="col-md-6">
      <span className='bio'><AiOutlineMail/> </span>  ranaammar344@gmail.com
    </div>
  </div>
  <div className="row">
    <div className="col-md-6">
      <span className='bio'><AiOutlinePhone/></span>  +92-3460544380
    </div>
    <div className="col-md-6">
      <span className='bio'><FaRegAddressBook/> </span>  Lahore,Pakistan
    </div>
  </div>
  <div className="row">
    <div className="col-md-6">
      <span className='bio'>Experience:</span>  6 Month
    </div>
    <div className="col-md-6">
      <span className='bio'><AiOutlineLinkedin/> </span> <a href='https://www.linkedin.com/in/rana-ammar-395722152/' target='blank'>Check Linkedin Profile  </a> 
    </div>
  </div>
  <div className="row">
    <div className="col-md-8">
      <span className='bio'><FaGithub /></span> <a href='https://github.com/RanaAmmar344' target='blank'>check Github</a>
    </div>
  </div>
  
  <div className="row">
    <div className="col-md-8">
      <span className='bio'><MdCastForEducation/></span> Bachelor in Information Technology (BS-IT)
    </div>
  </div>
  <div className="row my-3">
    <h4 className='text-danger'>C E R T I F I C A T I O N S</h4>

    <div className="col-md-6">
    <span className='bio'>Graphic Designing</span><p>Digiskill Traning Program. • 2021</p>
    </div>
    <div className="col-md-6">
    <span className='bio'>Mern Stack ( Award Winner <FiAward />)</span><p> Knowledge Stream. • 2023</p>

    </div>
  </div>
  <button  type="button" className="btn btn-danger"onClick={downloadResume}>Download Resume <BiSolidDownload/></button>
    
  </div>
  </div>
  <div className="col-md-5 order-md-1">
    
    <img className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-5" width="500" height="500" src={img2} role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"></img>
  {/* <img src={img2}/> */}
  
  </div>
</div>
<div id='skill' className='skill text-white p-5'data-aos="fade-up" >
<h2   className="featurette-heading fw-normal lh-1 text-danger"> My Skills </h2>
    <hr className='about-icon '/>
    <div className="row">
      <div className="col-md-6">
      <span className='bio'>HTML</span>
      <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar" style={{width: "75%"}}></div>
</div>
      </div>
      <div className="col-md-6">
      <span className='bio'>CSS</span>
      <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar" style={{width: "75%"}}></div>
</div>
      </div>
    </div>
    <div className="row my-3">
      <div className="col-md-6">
      <span className='bio'>JAVASCRIPT</span>
      <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar" style={{width: "55%"}}></div>
</div>
      </div>
      <div className="col-md-6">
      <span className='bio'>REACT JS</span>
      <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar" style={{width: "75%"}}></div>
</div>
      </div>
    </div>
    <div className="row my-3">
      <div className="col-md-6">
      <span className='bio'>TAILWIND CSS</span>
      <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar" style={{width: "65%"}}></div>
</div>
      </div>
      <div className="col-md-6">
      <span className='bio'>BOOTSTRAP</span>
      <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar" style={{width: "75%"}}></div>
</div>
      </div>
    </div>
    <div className="row my-3">
      <div className="col-md-6">
      <span className='bio'>REDUX</span>
      <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar" style={{width: "55%"}}></div>
</div>
      </div>
      <div className="col-md-6">
      <span className='bio'>GIT GITHUB</span>
      <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar" style={{width: "75%"}}></div>
</div>
      </div>
    </div>
    <div className="row my-3">
      <div className="col-md-6">
      <span className='bio'>NODE JS</span>
      <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar" style={{width: "60%"}}></div>
</div>
      </div>
      <div className="col-md-6">
      <span className='bio'>EXPRESS JS</span>
      <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar" style={{width: "68%"}}></div>
</div>
      </div>
    </div>
    <div className="row my-3">
      <div className="col-md-6">
      <span className='bio'>MONGODB</span>
      <div className="progress" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
  <div className="progress-bar" style={{width: "60%"}}></div>
</div>
      </div>
  
    </div>
</div>
{/* project */}
<div className="container-fluid p-0 " data-aos="fade-up">
  <div id='project' className="section-project">
    
  
  <div className='project-title '>
  <h2 className="featurette-heading fw-normal lh-1 text-danger">My Projects</h2>
  </div>
    <hr className='about-icon-project '/>
  
    <div className="row project-row my-5">
      <div className="col-md-3 p-card ">
      <a  href='https://solar-rose.vercel.app/' target='blank' >
      <div   className="card" >
  <img src={solar} className="card-img-top" height={200} alt="..."/>
  <div className="card-body">
    <p className="card-text">Solar Energy website built with ReactJS Mobile Responsive.</p>
  </div>
</div>
</a>
      </div>
      <div className="col-md-3 p-card ">
      <a  href='https://ecom-shop-pi.vercel.app/' target='blank' >
      <div   className="card" >
  <img src={ecom} className="card-img-top" height={200} alt="..."/>
  <div className="card-body">
    <p className="card-text"> E-Commerance website built ReactJS & Redux/Context Api</p>
  </div>
</div>
</a>
      </div>
      <div className="col-md-3  p-card ">
      <a  href='https://expologistics.vercel.app/' target='blank' >
      <div   className="card" >
  <img src='https://cdn.pixabay.com/photo/2018/05/14/20/54/truck-3401529_1280.jpg' className="card-img-top"  height={200} alt="..."/>
  <div className="card-body">
    <p className="card-text"> expologistics built in ReactJS Mobile Responsive</p>
  </div>
</div>
</a>
      </div>
   
    </div>
    <div className="row project-row my-5">
    <div className="col-md-3 p-card ">
      <a  href='https://apta.vercel.app/' target='blank' >
      <div   className="card" >
  <img src='https://www.apta.org/contentassets/41a24f4f3ff5445fb351803cd948e878/mcmillanfeature-440x225.png?width=440&height=225&mode=crop' className="card-img-top"  height={200} alt="..."/>
  <div className="card-body">
    <p className="card-text">APTA-Medical website built with ReactJS Mobile Responsive</p>
  </div>
</div>
</a>
      </div>
    <div className="col-md-3 p-card ">
      <a  href='https://atomcamp.vercel.app/' target='blank' >
      <div   className="card" >
  <img src='https://www.atomcamp.com/wp-content/uploads/2023/12/main-banner.png' className="card-img-top"  height={200} alt="..."/>
  <div className="card-body">
    <p className="card-text">Atom camp website built with ReactJS Mobile Responsive</p>
  </div>
</div>
</a>
      </div>
    </div>
</div>
</div>
<d iv className="hair-me">
  <PiDotsNineBold className='doted'/>
  <FaPaperPlane className='hair-icon'/>
  <h1 className='hairme2'>HIRE ME FOR YOUR AWESOME PROJECTS</h1>
  <a  href='#about'  type="button" className="btn btn-dark mx-3 hire-button ">HIRE ME</a>
  <PiDotsNineBold className='doted'/>
</d>
{/* contact */}
<div className='project-title my-3'data-aos="fade-up" >
  <h2 className="featurette-heading fw-normal lh-1 text-danger">Contact Me</h2>
  </div>
    <hr className='about-icon-project '/>
    <div id='contact' className="container-contact"data-aos="fade-up">

    <div className="col-md-8 mb-md-0 mb-5 m-5  ">
            <form   action="https://formspree.io/f/xbjvqbzw" method="POST">

              
                <div className="row">

                    
                    <div className="col-md-6">
                        <div className="md-form mb-0  ">
                            <input type="name" placeholder='Your Name' id="name" name="name" className="form-control"/>
                            
                        </div>
                    </div>
                    
                    <div className="col-md-6 c-email">
                        <div className="md-form mb-0">
                            <input type="email"  placeholder='Your Email'  id="email" name="email" className="form-control"/>
                            
                        </div>
                    </div>
                   

                </div>
                
            
            
                <div className="row">

                   
                    <div className="col-md-8">

                        <div className="md-form mt-4">
                            <textarea type="message" placeholder=' message' id="message" name="message" rows="3" cols='5' className="form-control md-textarea"></textarea>
                            
                        </div>

                    </div>
                </div>
               

            <div className="text-start my-3">
                <button type='submit' className="btn btn-outline-warning" >Send Message</button>
            </div>
            </form>

            <div className="status"></div>
        </div>
    </div>
{/* footer */}
<div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top mx-5">
      <p className='text-white'>© 2023 Company, Inc. All rights reserved by Rana Ammar.</p>
      <ul className="list-unstyled d-flex">
        <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><AiFillFacebook className='footer-icon'/></svg></a></li>
        <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><AiOutlineTwitter className='footer-icon'/></svg></a></li>
        <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><AiOutlineInstagram className='footer-icon'/></svg></a></li>
        <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><BiLogoGmail className='footer-icon'/></svg></a></li>
      </ul>
    </div>



    </>
  )
}

export default App
