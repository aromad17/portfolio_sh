import React, { useEffect, useState } from 'react';
import 'styles/intro.css'
import 'styles/circle_effect.css'
import 'styles/text_glitch.scss'
function Intro() {
  const completionWord = 'LEE SANG HYEON';

  const [typeText, setTypeText] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {

    if (count < completionWord.length) {
      const typingInterval = setTimeout(() => {
        setTypeText((prevTitleValue) => prevTitleValue + completionWord[count]);
        setCount((prevCount) => prevCount + 1);
      }, 100);
      return () => clearTimeout(typingInterval);
    }

    const executeOtherAnimations = () => {

      const javascript = document.querySelectorAll('.javascript li');
      const react = document.querySelectorAll('.react li');
      const frontend = document.querySelectorAll('.frontend li');
      const html = document.querySelectorAll('.html li');

      const texts = document.querySelectorAll('.texts span ul');
      texts.forEach((item, idx) => {
        setTimeout(() => {
          item.style.transform = `translateY(0px) translateX(-50%)`;
          item.style.opacity = '1';
        }, 0);
      });



      javascript.forEach((item, idx) => {
        item.style.animationDelay = 0.4 * idx + "s";
      });

      react.forEach((item, idx) => {
        item.style.animationDelay = 0.7 * idx + "s";
      });

      frontend.forEach((item, idx) => {
        item.style.animationDelay = 0.55 * idx + "s";
      });

      html.forEach((item, idx) => {
        item.style.animationDelay = 1.1 * idx + "s";
      });

    };

    executeOtherAnimations();

    if (window.innerWidth >= 1000) {
      const intro = document.querySelector(".intro_content_logo");
      const myName = document.querySelector(".main-title");
      intro.addEventListener("mousemove", (e) => {
        let posX = e.pageX / 20;
        let posY = e.pageY / 20;
        myName.style.right = 0 - posX + "px";
        myName.style.bottom = 0 - posY + "px";
      })
    }

    const glitch = document.querySelector('.glitch');

    setTimeout(() => {
      glitch.style.opacity = 1;
    }, 0);

    const pl = document.querySelector(".pl");

    setTimeout(() => {
      pl.style.opacity = 1;
    }, 0);


  }, [count, completionWord]);




  return (
    <div className='intro_frame'>
      <div className='intro top_move'>
        <div className='intro_left'>
          <div className='intro_polygon'>

            <div className="pl">
              <svg className="pl__rings" viewBox="0 0 50% 50%" width="100%" height="100%">
                <g fill="none" strokeLinecap="round" strokeWidth="4">
                  <g className="pl__ring" transform="rotate(0)">
                    <ellipse className="pl__orbit" cx="64" cy="64" rx="60" ry="30" stroke="#242226" />
                    <ellipse className="pl__orbit" cx="64" cy="64" rx="60" ry="30" stroke="#242226" strokeDasharray="50 240" />
                    <ellipse className="pl__orbit" cx="64" cy="64" rx="60" ry="30" stroke="#242226" strokeDasharray="25 265" />
                  </g>
                  <g className="pl__ring" transform="rotate(0)">
                    <ellipse className="pl__orbit" cx="64" cy="64" rx="60" ry="30" stroke="hsla(422,90%,50%,0)" />
                    <ellipse className="pl__orbit" cx="64" cy="64" rx="60" ry="30" stroke="#242226" strokeDasharray="50 240" />
                    <ellipse className="pl__orbit" cx="64" cy="64" rx="60" ry="30" stroke="#242226" strokeDasharray="25 265" />
                  </g>
                  <g className="pl__ring" transform="rotate(0)">
                    <ellipse className="pl__orbit" cx="64" cy="64" rx="60" ry="30" stroke="hsla(422,90%,50%,0)" />
                    <ellipse className="pl__orbit" cx="64" cy="64" rx="60" ry="30" stroke="#242226" strokeDasharray="50 240" />
                    <ellipse className="pl__orbit" cx="64" cy="64" rx="60" ry="30" stroke="#242226" strokeDasharray="25 265" />
                  </g>
                  <g className="pl__ring" transform="rotate(0)">
                    <ellipse className="pl__orbit" cx="64" cy="64" rx="60" ry="30" stroke="hsla(422,90%,50%,0)" />
                    <ellipse className="pl__orbit" cx="64" cy="64" rx="60" ry="30" stroke="#242226" strokeDasharray="50 240" />
                    <ellipse className="pl__orbit" cx="64" cy="64" rx="60" ry="30" stroke="#242226" strokeDasharray="25 265" />
                  </g>
                  <g className="pl__ring" transform="rotate(180)">
                    <ellipse className="pl__orbit" cx="64" cy="64" rx="60" ry="30" stroke="#242226" />
                    <ellipse className="pl__orbit" cx="64" cy="64" rx="60" ry="30" stroke="#242226" strokeDasharray="50 240" />
                    <ellipse className="pl__orbit" cx="64" cy="64" rx="60" ry="30" stroke="#242226" strokeDasharray="25 265" />
                  </g>
                  <g className="pl__ring" transform="rotate(180)">
                    <ellipse className="pl__orbit" cx="64" cy="64" rx="60" ry="30" stroke="hsla(422,90%,50%,0)" />
                    <ellipse className="pl__orbit" cx="64" cy="64" rx="60" ry="30" stroke="#242226" strokeDasharray="50 240" />
                    <ellipse className="pl__orbit" cx="64" cy="64" rx="60" ry="30" stroke="#242226" strokeDasharray="25 265" />
                  </g>
                  <g className="pl__ring" transform="rotate(0)">
                    <ellipse className="pl__electron" cx="64" cy="64" rx="60" ry="30" stroke="hsl(0,0%,100%)" strokeDasharray="1 289" strokeWidth="8" />
                    <ellipse className="pl__electron" cx="64" cy="64" rx="60" ry="30" stroke="hsl(0,0%,100%)" strokeDasharray="1 289" strokeWidth="8" />
                  </g>
                  <g className="pl__ring" transform="rotate(180)">
                    <ellipse className="pl__electron" cx="64" cy="64" rx="60" ry="30" stroke="hsl(0,0%,100%)" strokeDasharray="1 289" strokeWidth="8" />
                    <ellipse className="pl__electron" cx="64" cy="64" rx="60" ry="30" stroke="hsl(0,0%,100%)" strokeDasharray="1 289" strokeWidth="8" />
                    <ellipse className="pl__electron" cx="64" cy="64" rx="60" ry="30" stroke="hsl(0,0%,100%)" strokeDasharray="1 289" strokeWidth="8" />
                    <ellipse className="pl__electron" cx="64" cy="64" rx="60" ry="30" stroke="hsl(0,0%,100%)" strokeDasharray="1 289" strokeWidth="8" />
                  </g>
                </g>
              </svg>
              <div className="pl__nucleus">
                <div className="pl__nucleus-particle"></div>
                <div className="pl__nucleus-particle"></div>
                <div className="pl__nucleus-particle"></div>
                <div className="pl__nucleus-particle"></div>
                <div className="pl__nucleus-particle"></div>
                <div className="pl__nucleus-particle"></div>
                <div className="pl__nucleus-particle"></div>
                <div className="pl__nucleus-particle"></div>
                <div className="pl__nucleus-particle"></div>
                <div className="pl__nucleus-particle"></div>
                <div className="pl__nucleus-particle"></div>
                <div className="pl__nucleus-particle"></div>
                <div className="pl__nucleus-particle"></div>
              </div>
            </div>

          </div>
          <div className='intro_left_texts texts'>
            <span>
              <ul className='javascript'>
                <li>J</li>
                <li>A</li>
                <li>V</li>
                <li>A</li>
                <li></li>
                <li>S</li>
                <li>C</li>
                <li>R</li>
                <li>I</li>
                <li>P</li>
                <li>T</li>
              </ul>
            </span>
            <span>
              <ul className='react'>
                <li>R</li>
                <li>E</li>
                <li>A</li>
                <li>C</li>
                <li>T</li>
              </ul>
            </span>
          </div>
        </div>

        <div className='intro_content'>
          <div className='intro_content_logo'>
            <h1 className="main-title">{typeText}<span className='typing_bar'>|</span></h1>
          </div>

          <div className='intro_content_right texts'>
            <span>
              <ul className='frontend'>
                <li>F</li>
                <li>R</li>
                <li>O</li>
                <li>N</li>
                <li>T</li>
                <li>&nbsp;</li>
                <li>E</li>
                <li>N</li>
                <li>D</li>
              </ul>
            </span>
            <span>
              <ul className='html'>
                <li>H</li>
                <li>T</li>
                <li>M</li>
                <li>L</li>
                <li>&nbsp;</li>
                <li>+</li>
                <li>&nbsp;</li>
                <li>C</li>
                <li>S</li>
                <li>S</li>
              </ul>
            </span>
          </div>

          <div className='intro_content_footer'>
            <div className="glitch" data-text="프론트엔드 개발자">편의성과 창의성을 추구하는 <strong>프론트엔드 개발자</strong></div>

            <div className='scroll_down'>
              <div className='scroll_ani'>
              </div>
              <span>SCROLL DOWN</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Intro;

