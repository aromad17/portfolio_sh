import React, { useEffect } from 'react'
import 'styles/about.css'
import { FaUserAlt, FaPhone, FaHistory } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { A11y, Navigation, Pagination } from 'swiper';

function About() {

  useEffect(() => {
    const about = document.querySelector('.about_frame');
    const aboutMove = document.querySelector('.about');
    const aboutCon = document.querySelector('.about .contents')
    const sectionT = document.querySelector('.about .section_title');
    aboutCon.style.transition = 'all 0.5s'; // 0.5초 동안 변화
    aboutMove.style.transition = 'all 0.5s linear 0s, opacity 1s linear 0s';

    function aboutEffect() {
      let scrollPosition = window.scrollY || window.pageYOffset;

      if (window.innerWidth > 1000) {
        let windowH = window.innerHeight;
        let leftPercentage = -((scrollPosition - windowH) / 10) + '%';
        if (scrollPosition > 900) {
          if (scrollPosition <= windowH) {
            aboutMove.style.top = 50 + "px";
            aboutMove.style.position = 'relative';
            aboutCon.style.transform = 'translateX(' + leftPercentage + ')';
            aboutCon.style.opacity = '1';
          } else if (scrollPosition > windowH) {
            aboutMove.style.position = 'sticky';
            sectionT.style.position = 'absolute';
            sectionT.style.top = 0 + 'px';
            aboutCon.style.transform = 'translateX(' + leftPercentage + ')';
            aboutCon.style.opacity = '1';

            if (Number(leftPercentage.replace('%', '')) < -60) {
              aboutCon.style.zIndex = 0;
              aboutCon.style.transform = 'translateX(-60%)';
              aboutCon.style.opacity = '1';
            }
          }
        }
      } else if (window.innerWidth <= 1000) {
        if (scrollPosition < 500) {
          about.style.height = 100 + "vh";
          about.style.position = 'relative';
          about.style.top = '0';
          sectionT.style.position = 'absolute';
          sectionT.style.top = 20 + 'px';
          aboutCon.style.position = 'absolute';
          aboutCon.style.top = 50 + '%';
          aboutCon.style.opacity = '0';
          aboutCon.style.transform = 'translate(0%, -45%)';
        } else if (scrollPosition >= 500) {
          aboutCon.style.opacity = '1';
        }
      }
    }

    const aboutWid = aboutMove.offsetWidth;
    if (aboutWid > 1000) {
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
    <div className='about_frame'>
      <div className='about top_move'>

        <div className='section_title'>
          <h2>About</h2>
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
                  <dd>2019.08 ~ 2019.10 뉴비코 홈페이지 제작 참여</dd>
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
                      저는 사용자 인터페이스를 생각하는<br />
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
                          저는 사용자 인터페이스를 생각하는
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
                          <dd>2019.08 ~ 2019.10뉴비코 홈페이지 제작 참여</dd>
                          <dd>2022.12 ~ 2023.05 이젠 평생 교육원 UI/UX 웹&앱 디자인 & 프론트엔드 강의 수료</dd>
                        </dl>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <ul>
                        <li>html5/css3.0한국형 웹접근성 지침(KWCAG 2.1)을 준수한 시멘틱 웹 마크업과 레이아웃 구성</li>
                        <li>반응형MEDIA Query를 이용한 반응형 웹페이지 하드코딩 제작 가능</li>
                        <li>JAVASCRIPT 기분문법(core) 하드코딩 가능
                          (2Depth animation을 활용한 네비게이션 하드코딩 제작가능)
                          (BUTTON형, DOT형 반응형 슬라이드 하드코딩 제작)</li>
                        <li>Firebase 연동 백엔드 기능 구현 가능</li>
                        <li>리액트를 이용한 SPA 제작 가능</li>
                        <li>API를 활용하여 데이터를 가져오거나 상호작용 가능</li>
                      </ul>
                      <ul className='about_skills_icon'>
                        <li className='skill_html'>
                          <img src={process.env.PUBLIC_URL + '/images/html5.png'} alt='html5' />
                          <span className='skill_status'>
                            html5
                          </span>
                          <span className='skill_percentage'>
                            90%
                          </span>
                        </li>
                        <li className='skill_css'>
                          <img src={process.env.PUBLIC_URL + '/images/css3.png'} alt='css3' />
                          <span className='skill_status'>
                            CSS3
                          </span>
                          <span className='skill_percentage'>
                            80%
                          </span>
                        </li>
                        <li className='skill_js'>
                          <img src={process.env.PUBLIC_URL + '/images/javascript.png'} alt='javascript' />
                          <span className='skill_status'>
                            JAVASCRIPT
                          </span>
                          <span className='skill_percentage'>
                            80%
                          </span>
                        </li>
                        <li className='skill_react'>
                          <img src={process.env.PUBLIC_URL + '/images/react.png'} alt='react' />
                          <span className='skill_status'>
                            REACT
                          </span>
                          <span className='skill_percentage'>
                            70%
                          </span>
                        </li>
                        <li className='skill_ts'>
                          <img src={process.env.PUBLIC_URL + '/images/typescript.png'} alt='typescript' />
                          <span className='skill_status'>
                            TS
                          </span>
                          <span className='skill_percentage'>
                            50%
                          </span>
                        </li>
                        <li className='skill_sass'>
                          <img src={process.env.PUBLIC_URL + '/images/sass.png'} alt='sass' />
                          <span className='skill_status'>
                            SASS
                          </span>
                          <span className='skill_percentage'>
                            80%
                          </span>
                        </li>
                        <li className='skill_figma'>
                          <img src={process.env.PUBLIC_URL + '/images/figma.png'} alt='figma' />
                          <span className='skill_status'>
                            FIGMA
                          </span>
                          <span className='skill_percentage'>
                            80%
                          </span>
                        </li>
                        <li className='skill_photoshop'>
                          <img src={process.env.PUBLIC_URL + '/images/photoshop.png'} alt='photoshop' />
                          <span className='skill_status'>
                            PHOTOSHOP
                          </span>
                          <span className='skill_percentage'>
                            80%
                          </span>
                        </li>
                        <li className='skill_illustrator'>
                          <img src={process.env.PUBLIC_URL + '/images/illustrator.png'} alt='illustrator' />
                          <span className='skill_status'>
                            illustrator
                          </span>
                          <span className='skill_percentage'>
                            75%
                          </span>
                        </li>
                      </ul>
                    </SwiperSlide>
                  </Swiper>

                </div>
              </div>
              <div className='about_skills_bottom'>
                <ul className='about_skills_icon'>
                  <li className='skill_html'>
                    <img src={process.env.PUBLIC_URL + '/images/html5.png'} alt='html5' />
                    <span className='skill_status'>
                      html5
                    </span>
                    <span className='skill_percentage'>
                      90%
                    </span>
                  </li>
                  <li className='skill_css'>
                    <img src={process.env.PUBLIC_URL + '/images/css3.png'} alt='css3' />
                    <span className='skill_status'>
                      CSS3
                    </span>
                    <span className='skill_percentage'>
                      80%
                    </span>
                  </li>
                  <li className='skill_js'>
                    <img src={process.env.PUBLIC_URL + '/images/javascript.png'} alt='javascript' />
                    <span className='skill_status'>
                      JAVASCRIPT
                    </span>
                    <span className='skill_percentage'>
                      80%
                    </span>
                  </li>
                  <li className='skill_react'>
                    <img src={process.env.PUBLIC_URL + '/images/react.png'} alt='react' />
                    <span className='skill_status'>
                      REACT
                    </span>
                    <span className='skill_percentage'>
                      70%
                    </span>
                  </li>
                  <li className='skill_ts'>
                    <img src={process.env.PUBLIC_URL + '/images/typescript.png'} alt='typescript' />
                    <span className='skill_status'>
                      TS
                    </span>
                    <span className='skill_percentage'>
                      50%
                    </span>
                  </li>
                  <li className='skill_sass'>
                    <img src={process.env.PUBLIC_URL + '/images/sass.png'} alt='sass' />
                    <span className='skill_status'>
                      SASS
                    </span>
                    <span className='skill_percentage'>
                      80%
                    </span>
                  </li>
                  <li className='skill_figma'>
                    <img src={process.env.PUBLIC_URL + '/images/figma.png'} alt='figma' />
                    <span className='skill_status'>
                      FIGMA
                    </span>
                    <span className='skill_percentage'>
                      80%
                    </span>
                  </li>
                  <li className='skill_photoshop'>
                    <img src={process.env.PUBLIC_URL + '/images/photoshop.png'} alt='photoshop' />
                    <span className='skill_status'>
                      PHOTOSHOP
                    </span>
                    <span className='skill_percentage'>
                      80%
                    </span>
                  </li>
                  <li className='skill_illustrator'>
                    <img src={process.env.PUBLIC_URL + '/images/illustrator.png'} alt='illustrator' />
                    <span className='skill_status'>
                      illustrator
                    </span>
                    <span className='skill_percentage'>
                      75%
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div >
    </div >
  )
}

export default About