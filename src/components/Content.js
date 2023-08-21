import React, { useState, useEffect, useRef, useCallback } from 'react';
import 'styles/common.css';
import 'styles/content.scss';
import About from './About';
import Work from './Work';
import Contact from './Contact';
import Intro from './Intro';
import Sidemenu from './Sidemenu';

function Content() {

  const [isHamOn, setIsHamOn] = useState(false);
  const [isHamSpanOn, setIsHamSpanOn] = useState(false);
  const [isSpanHover, setIsSpanHover] = useState(false);
  const hamRef = useRef(null);
  const currentIndexRef = useRef(0);
  const intervalIdRef = useRef(null); // New ref for storing the interval ID

  const animatedHeader = useCallback(() => {

    const header = document.querySelector('header');
    const ulElement = document.querySelector('.content header ul');

    const liContent = [
      {
        content: `
          <strong>WORK</strong>
          <span>
            Watch What
            <br />
            I Did
          </span>
        `,
        altText: "WORK으로 이동"
      },
      {
        content: `
          <strong>CONTACT</strong>
          <span>
            Get In Touch
            <br />
            With Me
          </span>
        `,
        altText: "CONTACT으로 이동"
      },
      {
        content: `
          <strong>ABOUT</strong>
          <span>
            Creating UI of
            <br />
            a website
          </span>
        `,
        altText: "ABOUT으로 이동"
      },
    ];

    const liClass = ['about_menu', 'work_menu', 'contact_menu'];

    const startInterval = () => {
      if (ulElement.childElementCount >= 30) {
        return;
      }

      intervalIdRef.current = setTimeout(() => {
        const newLi = document.createElement('li');
        newLi.className = liClass[currentIndexRef.current];
        newLi.innerHTML = `
          ${liContent[currentIndexRef.current].content}
          <img src="${process.env.PUBLIC_URL + '/images/Xmark.png'}" alt="${liContent[currentIndexRef.current].altText}" />
        `;

        ulElement.appendChild(newLi);

        currentIndexRef.current = (currentIndexRef.current + 1) % liContent.length;

        startInterval();
      }, 2000);

    };

    startInterval();

    header.addEventListener('mouseenter', () => {
      ulElement.style.animationPlayState = 'paused';
      clearInterval(intervalIdRef.current); // Stop the interval using intervalIdRef
    });

    header.addEventListener('mouseleave', () => {
      ulElement.style.animationPlayState = 'running';
      startInterval(); // Start the interval again
    });

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', () => { });
      header.removeEventListener('mouseenter', () => { });
      header.removeEventListener('mouseleave', () => { });
    };



  }, []);


  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    let vw = window.innerWidth * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    document.documentElement.style.setProperty("--vw", `${vw}px`);
  }



  useEffect(() => {
    const header = document.querySelector('header');
    const ham = document.querySelector('.ham');

    animatedHeader();
    setScreenSize();

    window.addEventListener('resize', () => {
      setScreenSize();
      if (window.innerWidth > 1000) {
        header.style.height = 100 + 'px';
      } else if (window.innerWidth <= 1000) {
        header.style.height = 70 + 'px';
      }
    })

    window.addEventListener("scroll", () => {
      const scrollPosition = window.pageYOffset;

      if (scrollPosition >= 100) {
        const opacity = (scrollPosition - 100) / 100;
        header.style.opacity = 1 - opacity;
        ham.style.opacity = opacity;
      } else if (scrollPosition <= 100) {
        header.style.opacity = 1;
        ham.style.opacity = 0;
      }
    });



    setTimeout(() => {
      if (window.innerWidth > 1000) {
        header.style.height = 100 + 'px';
      } else if (window.innerWidth <= 1000) {
        header.style.height = 70 + 'px';
      }
    }, 2000);

    window.addEventListener('scroll', () => {
      const scrollPosition = window.pageYOffset;

      if (scrollPosition >= 100) {
        const opacity = (scrollPosition - 100) / 100;
        header.style.zIndex = -1;

      } else {
        header.style.opacity = '1';
        hamRef.current.style.opacity = '0';
        header.style.zIndex = 50;
      }

    });



  }, []);

  const handleHamClick = (e) => {
    e.preventDefault();
    setIsHamOn((prev) => !prev);
    setIsHamSpanOn((prev) => !prev);
  };

  return (
    <div className="content">
      <header>
        <p>SEE ALL</p>
        <ul>
          <li className='about_menu'>
            <strong>ABOUT</strong>
            <span>
              Creating UI of<br /> a website
            </span>
            <img src={process.env.PUBLIC_URL + '/images/Xmark.png'} alt="ABOUT으로 이동" />
          </li>
          <li className='work_menu'>
            <strong>WORK</strong>
            <span>
              Watch What<br />I Did
            </span>
            <img src={process.env.PUBLIC_URL + '/images/Xmark.png'} alt="WORK로 이동" />
          </li>
          <li className='contact_menu'>
            <strong>CONTACT</strong>
            <span>
              Get In Touch<br />With Me
            </span>
            <img src={process.env.PUBLIC_URL + '/images/Xmark.png'} alt="CONTACT로 이동" />
          </li>
          <li className='about_menu'>
            <strong>ABOUT</strong>
            <span>
              Creating UI of<br /> a website
            </span>
            <img src={process.env.PUBLIC_URL + '/images/Xmark.png'} alt="ABOUT으로 이동" />
          </li>
        </ul>
      </header>
      <div className={`ham front ${isHamOn ? 'on' : ''}`} ref={hamRef} onClick={handleHamClick}>
        {isHamOn ?
          <span className='span_on'>CLOSE</span>
          :
          <span className='span_off'>SEE ALL</span>
        }
        {/* <span className = {`${isSpanHover ? 'on' : ''}`} onMouseEnter={handleSpanHover} onMouseLeave={handleSpanHover}>{isHamSpanOn ? "CLOSE" : "SEE ALL" }</span> */}
      </div>
      <Sidemenu setIsHamOn={setIsHamOn} isHamOn={isHamOn} isHamSpanOn={isHamSpanOn} setIsHamSpanOn={setIsHamSpanOn} />
      <Intro />
      <About />
      <Work />
      <Contact />
    </div>
  );
}

export default Content;