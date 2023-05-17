import React, { useEffect, useState } from 'react';
import 'styles/intro.css'
import 'styles/polygon.css'
function Intro() {
  const completionWord = 'LEE SANG HYEON';

  const [typeText, setTypeText] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {

    if (count < completionWord.length) {
      const typingInterval = setTimeout(() => {
        setTypeText((prevTitleValue) => prevTitleValue + completionWord[count]);
        setCount((prevCount) => prevCount + 1);
      }, 300);
      return () => clearTimeout(typingInterval);
    }

    const executeOtherAnimations = () => {
      const letter = document.querySelectorAll('span ul li');
      letter.forEach((item, idx) => {
        item.style.animationDelay = 1 * idx + "s";
      });

      const circle = document.querySelectorAll('.circle');
      circle.forEach((item, idx) => {
        setTimeout(() => {
          item.style.transform = `translateX(0px)`;
        }, 500 * idx);
      });

      const texts = document.querySelectorAll('.texts span ul');
      texts.forEach((item, idx) => {
        setTimeout(() => {
          item.style.transform = `translateY(0px) translateX(-50%)`;
          item.style.opacity = '1';
        }, 0);
      });
    };

    const circles = document.querySelectorAll('.circle');
    const animateWave = () => {
      circles.forEach((circle, index) => {
        setTimeout(() => {
          circle.classList.add('wave');
        }, index * 2000); // 2초 간격으로 파동 애니메이션 시작
      });
    };

    animateWave();
    executeOtherAnimations();


  }, [count, completionWord]);




  return (
    <div className='intro'>
      <div className='intro_left'>
        <div className='intro_polygon'>
          <div className="wrapper">
            <div className="cube">
              <div className="one"></div>
              <div className="two"></div>
              <div className="three"></div>
              <div className="four"></div>
              <div className="five"></div>
              <div className="six"></div>
            </div>
          </div>
        </div>
        <div className='intro_left_texts texts'>
          <span>
            <ul>
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
            <ul>
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
            <ul>
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
            <ul>
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
          <div className='circles'>
            <div className='circle'></div>
            <div className='circle'></div>
            <div className='circle'></div>
          </div>

          <div className='scroll_down'>
            <div className='scroll_ani'>
            </div>
            <span>SCROLL DOWN</span>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Intro;

