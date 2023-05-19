import React, { useEffect } from 'react'
import 'styles/about.css'
import { FaUserAlt, FaPhone, FaHistory } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { A11y, Navigation, Pagination } from 'swiper';

function About() {



  function moveFirstLiToEnd() {
    const skills = document.querySelectorAll(".about_skills_bottom>ul");
    const skill = document.querySelectorAll(".about_skills_bottom>ul>li");

    if (skills.length > 0 && skill.length > 0) {
      for (let i = 0; i < 9; i++) {
        const firstLi = skill[i].cloneNode(true); // i번째 요소를 복제

        const firstUl = skills[0];
        firstUl.appendChild(firstLi); // 복제된 요소를 맨 뒤에 추가
      }
    }
  }


  useEffect(() => {
    const about = document.querySelector('.about');
    const aboutMove = document.querySelector('.about .contents');
    const sectionT = document.querySelector('.about .section_title');
    about.style.transition = 'all 0.5s'; // 0.5초 동안 변화
    aboutMove.style.transition = 'all 0.5s linear 0s, opacity 1s linear 0s';

    function aboutEffect() {
      let scrollPosition = window.scrollY || window.pageYOffset;

      if (window.innerWidth > 846) {
        let windowH = window.innerHeight;
        let leftPercentage = -((scrollPosition - windowH) / 10) + '%';
        if (scrollPosition > 900) {
          if (scrollPosition <= windowH) {
            about.style.position = 'relative';
            about.style.top = '0';
            aboutMove.style.position = 'absolute';
            aboutMove.style.top = '250px';
            aboutMove.style.transform = 'translateX(' + leftPercentage + ')';
            aboutMove.style.opacity = '1';
          } else if (scrollPosition > windowH) {
            about.style.position = 'sticky';
            about.style.top = '0';
            sectionT.style.position = 'sticky';
            sectionT.style.top = 50 + 'px';
            aboutMove.style.position = 'sticky';
            aboutMove.style.top = '250px';
            aboutMove.style.transform = 'translateX(' + leftPercentage + ')';
            aboutMove.style.opacity = '1';

            if (Number(leftPercentage.replace('%', '')) < -60) {
              about.style.position = 'sticky';
              about.style.top = "0";
              about.style.zIndex = 0;
              aboutMove.style.transform = 'translateX(-60%)';
              aboutMove.style.opacity = '1';
              aboutMove.style.zIndex = -1;
            }
          }
        }
      } else if (window.innerWidth <= 845) {
        about.style.height = 100 + "vh";
        about.style.position = 'relative';
        about.style.top = '0';
        sectionT.style.position = 'absolute';
        sectionT.style.top = 20 + 'px';
        aboutMove.style.position = 'absolute';
        aboutMove.style.top = 50 + '%';
        aboutMove.style.transform = 'translate(0%, -50%)';
        if (scrollPosition >= 400) {
          aboutMove.style.opacity = '1';
        }
      }
    }

    const aboutWid = aboutMove.offsetWidth;
    if (aboutWid > 845) {
      about.style.height = (aboutWid - 2000) + 'px';
    }

    window.addEventListener('resize', () => {
      aboutEffect();
    })


    window.addEventListener('scroll', () => {
      aboutEffect();
    });
  }, []);

  return (

    <div className='about'>

      <div className='section_title'>
        <h2>About <span>-</span>&nbsp;</h2>
        <ul>
          <li>Me</li>
          <li>Skill</li>
        </ul>
      </div>
      <div className='contents'>
        <div className='about_me_wrap'>


          <div className='about_me'>
            <div className='about_me_top'>
              <div className='about_me_left about_me_text'>
                <dl>
                  <dt><FaUserAlt />About me</dt>
                  <dd>이상현</dd>
                  <dd>1993.11.17</dd>
                  <dd>서울시 동작구 거주 중</dd>
                </dl>
              </div>
              <div className='about_me_right about_me_text'>
                <dl>
                  <dt><FaPhone />Contact</dt>
                  <dd>010.6685.0145</dd>
                  <dd>aromad1117@naver.com</dd>
                </dl>
              </div>
            </div>
            <div className='about_me_bottom about_me_text'>
              <dl>
                <dt><FaHistory />History</dt>
                <dd>2019.07 ~ 2019.10 블록체인 미르 개발팀 입사 - 퍼블리셔 업무</dd>
                <dd>2019.08 ~ 2019.10 뉴비코 홈페이지 제작</dd>
                <dd>2022.12 ~ 2023.05 이젠 아카데미 평생 교육원 UI/UX 웹&앱 디자인 & 프론트엔드 강의 수료</dd>
              </dl>
            </div>
          </div>
        </div>
        <div className='about_skills_wrap'>
          <div className='about_skills'>
            <div className='about_skills_top'>




              <div className='about_skills_top_left'>
                <div className='about_skills_pic'>

                  <img src={process.env.PUBLIC_URL + '/images/me.png'} alt="me" />
                  <p>&#128075;안녕하세요&#128075; <br />
                    노력이 결실을 맺을 때의 쾌감을 즐기는<br />
                    프론트엔드 개발자 <strong>이상현</strong> 입니다!
                  </p>
                </div>


              </div>

              <div className='about_skills_top_right'>
                <Swiper
                  modules={[Navigation, Pagination, A11y]}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                >

                  <SwiperSlide>
                    <div className='about_skills_pic'>

                      <img src={process.env.PUBLIC_URL + '/images/me.png'} alt="me" />
                      <p>&#128075;안녕하세요&#128075; <br />
                        노력이 결실을 맺을 때의 쾌감을 즐기는<br />
                        프론트엔드 개발자 <strong>이상현</strong> 입니다!
                      </p>
                    </div>
                    <div className='about_me_top'>
                      <div className='about_me_left about_me_text'>
                        <dl>
                          <dt><FaUserAlt />About me</dt>
                          <dd>이상현</dd>
                          <dd>1993.11.17</dd>
                          <dd>서울시 동작구 거주 중</dd>
                        </dl>
                      </div>
                      <div className='about_me_right about_me_text'>
                        <dl>
                          <dt><FaPhone />Contact</dt>
                          <dd>010.6685.0145</dd>
                          <dd>aromad1117@naver.com</dd>
                        </dl>
                      </div>
                    </div>
                    <div className='about_me_bottom about_me_text'>
                      <dl>
                        <dt><FaHistory />History</dt>
                        <dd>2019.07 ~ 2019.10 블록체인 미르 개발팀 입사 - 퍼블리셔 업무</dd>
                        <dd>2019.08 ~ 2019.10뉴비코 홈페이지 제작</dd>
                        <dd>2022.12 ~ 2023.05 이젠 평생 교육원 UI/UX 웹&앱 디자인 & 프론트엔드 강의 수료</dd>
                      </dl>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <ul>
                      <li>html5/css3.0한국형 웹접근성 지침(KWCAG 2.1)을 준수한 기본 마크업과 레이아웃 구성</li>
                      <li>반응형MEDIA Query를 이용한 반응형 웹페이지 하드코딩 제작 가능</li>
                      <li>JAVASCRIPT 기분문법(core) 하드코딩 가능
                        (2Depth animation을 활용한 네비게이션 하드코딩 제작가능)
                        (BUTTON형, DOT형 반응형 슬라이드 하드코딩 제작)</li>
                      <li>Firebase 연동 백엔드 기능 구현 가능</li>
                    </ul>
                    <ul className='about_skills_icon'>
                      <li className='skill_html'>
                        <img src={process.env.PUBLIC_URL + '/images/html5.png'} alt='html5' />
                        <span className='skill_status'>
                          html5
                        </span>
                        <span className='skill_percentage'>
                          70%
                        </span>
                      </li>
                      <li className='skill_css'>
                        <img src={process.env.PUBLIC_URL + '/images/css3.png'} alt='css3' />
                        <span className='skill_status'>
                          html5
                        </span>
                        <span className='skill_percentage'>
                          70%
                        </span>
                      </li>
                      <li className='skill_js'>
                        <img src={process.env.PUBLIC_URL + '/images/javascript.png'} alt='javascript' />
                        <span className='skill_status'>
                          html5
                        </span>
                        <span className='skill_percentage'>
                          70%
                        </span>
                      </li>
                      <li className='skill_react'>
                        <img src={process.env.PUBLIC_URL + '/images/react.png'} alt='react' />
                        <span className='skill_status'>
                          html5
                        </span>
                        <span className='skill_percentage'>
                          70%
                        </span>
                      </li>
                      <li className='skill_ts'>
                        <img src={process.env.PUBLIC_URL + '/images/typescript.png'} alt='typescript' />
                        <span className='skill_status'>
                          html5
                        </span>
                        <span className='skill_percentage'>
                          70%
                        </span>
                      </li>
                      <li className='skill_sass'>
                        <img src={process.env.PUBLIC_URL + '/images/sass.png'} alt='sass' />
                        <span className='skill_status'>
                          html5
                        </span>
                        <span className='skill_percentage'>
                          70%
                        </span>
                      </li>
                      <li className='skill_figma'>
                        <img src={process.env.PUBLIC_URL + '/images/figma.png'} alt='figma' />
                        <span className='skill_status'>
                          html5
                        </span>
                        <span className='skill_percentage'>
                          70%
                        </span>
                      </li>
                      <li className='skill_photoshop'>
                        <img src={process.env.PUBLIC_URL + '/images/photoshop.png'} alt='photoshop' />
                        <span className='skill_status'>
                          html5
                        </span>
                        <span className='skill_percentage'>
                          70%
                        </span>
                      </li>
                      <li className='skill_illustrator'>
                        <img src={process.env.PUBLIC_URL + '/images/illustrator.png'} alt='illustrator' />
                        <span className='skill_status'>
                          html5
                        </span>
                        <span className='skill_percentage'>
                          70%
                        </span>
                      </li>
                    </ul>
                  </SwiperSlide>
                </Swiper>

              </div>
            </div>
            <div className='about_skills_bottom'>
              <ul>
                <li className='skill_html'>
                  <img src={process.env.PUBLIC_URL + '/images/html5.png'} alt='html5' />
                  <span className='skill_status'>
                    html5
                  </span>
                  <span className='skill_percentage'>
                    70%
                  </span>
                </li>
                <li className='skill_css'>
                  <img src={process.env.PUBLIC_URL + '/images/css3.png'} alt='css3' />
                  <span className='skill_status'>
                    html5
                  </span>
                  <span className='skill_percentage'>
                    70%
                  </span>
                </li>
                <li className='skill_js'>
                  <img src={process.env.PUBLIC_URL + '/images/javascript.png'} alt='javascript' />
                  <span className='skill_status'>
                    html5
                  </span>
                  <span className='skill_percentage'>
                    70%
                  </span>
                </li>
                <li className='skill_react'>
                  <img src={process.env.PUBLIC_URL + '/images/react.png'} alt='react' />
                  <span className='skill_status'>
                    html5
                  </span>
                  <span className='skill_percentage'>
                    70%
                  </span>
                </li>
                <li className='skill_ts'>
                  <img src={process.env.PUBLIC_URL + '/images/typescript.png'} alt='typescript' />
                  <span className='skill_status'>
                    html5
                  </span>
                  <span className='skill_percentage'>
                    70%
                  </span>
                </li>
                <li className='skill_sass'>
                  <img src={process.env.PUBLIC_URL + '/images/sass.png'} alt='sass' />
                  <span className='skill_status'>
                    html5
                  </span>
                  <span className='skill_percentage'>
                    70%
                  </span>
                </li>
                <li className='skill_figma'>
                  <img src={process.env.PUBLIC_URL + '/images/figma.png'} alt='figma' />
                  <span className='skill_status'>
                    html5
                  </span>
                  <span className='skill_percentage'>
                    70%
                  </span>
                </li>
                <li className='skill_photoshop'>
                  <img src={process.env.PUBLIC_URL + '/images/photoshop.png'} alt='photoshop' />
                  <span className='skill_status'>
                    html5
                  </span>
                  <span className='skill_percentage'>
                    70%
                  </span>
                </li>
                <li className='skill_illustrator'>
                  <img src={process.env.PUBLIC_URL + '/images/illustrator.png'} alt='illustrator' />
                  <span className='skill_status'>
                    html5
                  </span>
                  <span className='skill_percentage'>
                    70%
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default About