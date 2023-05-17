import React, { useEffect } from 'react'
import 'styles/work.css'
import { FaCircle, FaChrome, FaGithub } from "react-icons/fa";
import 'styles/bg_effect.scss'
function Work() {

  useEffect(() => {
    const workMove = document.querySelector('.work .contents');
    const prev = document.querySelector(".prev_btn");
    const next = document.querySelector(".next_btn");
    const box = document.querySelectorAll('.work_content');
    const workContent = document.querySelectorAll(".work_content");
    let workNum = 0;

    const activation = (i, value) => {
      for (let el of value) {
        el.style.opacity = "0";
      }
      value[i].style.opacity = '1';
    }

    workContent.forEach(item => {
      item.style.opacity = 0;
    })

    window.addEventListener("scroll", () => {
      const windowScroll = window.scrollY || window.pageYOffset;

      console.log(windowScroll);
      if (windowScroll < 1600) {

        workContent.forEach(item => {
          item.style.opacity = 0;
        })

      } else if (windowScroll >= 1900) {

        workNum = 0;
        workContent[0].style.opacity = 1;
        console.log(workNum);
        workMove.style.left = 0;
        if (workNum === 0) {
          prev.style.visibility = 'hidden';
        }
      }
    })


    if (workNum === 0) {
      prev.style.visibility = 'hidden';
    }

    const constrolVisible = () => {
      if (workNum === 0) {
        prev.style.visibility = 'hidden';
      } else {
        prev.style.visibility = 'visible';
      }

      if (workNum === -4) {
        next.style.visibility = 'hidden';
      } else {
        next.style.visibility = 'visible';
      }
    }

    window.addEventListener('resize', () => {
      box.forEach(item => {
        item.style.width = window.clientWidth;
        const boxSize = box[0].clientWidth;
        workMove.style.left = workNum * boxSize + "px";
      })
    })

    prev.addEventListener("click", (e) => {
      e.preventDefault();
      const boxSize = box[0].clientWidth;
      workNum++;
      if (workNum >= 0) {
        workNum = 0;
      }
      workMove.style.left = workNum * boxSize + "px";
      activation(Math.abs(workNum), workContent);
      constrolVisible();
      console.log(workNum);
    })

    next.addEventListener("click", (e) => {
      e.preventDefault();
      const boxSize = box[0].clientWidth;
      workNum--;
      if (workNum < -(box.length - 1)) {
        workNum = -4;
      }
      workMove.style.left = workNum * boxSize + "px";
      activation(Math.abs(workNum), workContent);
      constrolVisible();
    })





  }, []);


  return (
    <div className='work'>


      <div className='section_title'>
        <h2>Work</h2>
      </div>


      <div className='work_wrap'>

        <div className='work_controller'>
          <a className='prev_btn'></a>
          <a className='next_btn'></a>
        </div>

        <div className='work_contents contents'>
          {/* cj */}
          <div className='work_content cj'>
            <div className='work_preview'>
              <div className='mockup'>
                <ul>
                  <li>개인 작업물</li>
                  <li> 웹 접근성 검사 결과 보기</li>
                </ul>
                <div className='pc_mockup'>
                  <div className='pc_screen'>
                    <video src={process.env.PUBLIC_URL + '/images/cjone_vid.webm'}
                      title="cjone video" autoPlay={true} muted={true} loop={true} type="video/webm" >
                    </video>
                  </div>
                </div>
                <div className='tablet_mockup'>
                  <div className='tablet_screen'>
                    <video src={process.env.PUBLIC_URL + '/images/cjone_vid_tablet.mp4'}
                      title="cjone video tablet" autoPlay={true} muted={true} loop={true} type="video/mp4" >
                    </video>
                  </div>
                </div>
                <div className='phone_mockup'>
                  <div className='phone_screen'>
                    <video src={process.env.PUBLIC_URL + '/images/cjone_vid_mo.webm'}
                      title="cjone video mo" muted={true} autoPlay={true} loop={true} type="video/webm" >
                    </video>
                  </div>
                </div>
              </div>
            </div>
            <div className='work_description'>
              <div className='description_space'>
                <h3>CJ ONE</h3>
                <ul className='skill_name'>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JAVASCRIPT</li>
                </ul>

                <dl>
                  <dt>주요 업무</dt>
                  <dd>
                    <dl>
                      <dt>웹 표준 준수</dt>
                      <dd><FaCircle />HTML/CSS W3C 웹 접근성 검사 통과</dd>
                    </dl>
                  </dd>
                  <dd>
                    <dl>
                      <dt>주요 기술</dt>
                      <dd><FaCircle />media query를 이용한 반응형 웹 페이지</dd>
                      <dd><FaCircle />CSS를 활용한 Animation 구현</dd>
                      <dd><FaCircle />JAVASCRIPT을 이용한 gif 이미지 구현</dd>
                    </dl>
                  </dd>
                </dl>
              </div>
              <ul className='link'>
                <li>
                  <a href="https://aromad17.github.io/cjone_clone/" title="cjone 클론 사이트로 이동">
                    <FaChrome />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/aromad17/cjone_clone" title='cjone 클론사이트 깃헙 리파지토리로 이동'>
                    <FaGithub />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* cj */}
          {/* 삼성전기 */}
          <div className='work_content samsung_electric'>
            <div className='work_preview'>
              <div className='mockup'>
                <ul>
                  <li>개인 작업물</li>
                  <li> 웹 접근성 검사 결과 보기</li>
                </ul>
                <div className='pc_mockup'>
                  <div className='pc_screen'>
                    <video src={process.env.PUBLIC_URL + '/images/sselectric.webm'}
                      title="삼성전기" autoPlay={true} muted={true} loop={true} type="video/webm" >
                    </video>
                  </div>
                </div>
              </div>
            </div>
            <div className='work_description'>
              <div className='description_space'>
                <h3>삼성 전기</h3>
                <ul className='skill_name'>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JAVASCRIPT</li>
                </ul>
                <dl>
                  <dt>주요 업무</dt>
                  <dd>
                    <dl>
                      <dt>웹 표준 준수</dt>
                      <dd><FaCircle />HTML/CSS W3C 웹 접근성 검사 통과</dd>
                    </dl>
                  </dd>
                  <dd>
                    <dl>
                      <dt>주요 기술</dt>
                      <dd><FaCircle />CSS를 활용한 Animation 구현 </dd>
                      <dd><FaCircle />JAVASCRIPT를 이용한 2depth 메뉴 구현</dd>
                    </dl>
                  </dd>
                </dl>
              </div>
              <ul className='link'>
                <li>
                  <a href="https://aromad17.github.io/samsung-electric_clone/" title="삼성전기 클론 사이트로 이동">
                    <FaChrome />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/aromad17/samsung-electric_clone" title='삼성 전기 클론사이트 깃헙 리파지토리로 이동'>
                    <FaGithub />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* 삼성전기 */}
          {/* 삼성엔지니어링 */}
          <div className='work_content samsung_engineering'>
            <div className='work_preview'>
              <div className='mockup'>
                <ul>
                  <li>개인 작업물</li>
                  <li> 웹 접근성 검사 결과 보기</li>
                </ul>
                <div className='pc_mockup'>
                  <div className='pc_screen'>
                    <video src={process.env.PUBLIC_URL + '/images/ssengineering.webm'}
                      title="cjone video" autoPlay={true} muted={true} loop={true} type="video/webm" >
                    </video>
                  </div>
                </div>
                <div className='tablet_mockup'>
                  <div className='tablet_screen'>
                    <video src={process.env.PUBLIC_URL + '/images/cjone_vid_tablet.mp4'}
                      title="cjone video tablet" autoPlay={true} muted={true} loop={true} type="video/mp4" >
                    </video>
                  </div>
                </div>
                <div className='phone_mockup'>
                  <div className='phone_screen'>
                    <video src={process.env.PUBLIC_URL + '/images/cjone_vid_mo.webm'}
                      title="cjone video mo" autoPlay={true} muted={true} loop={true} type="video/webm" >
                    </video>
                  </div>
                </div>
              </div>
            </div>

            <div className='work_description'>
              <div className='description_space'>
                <h3>삼성 엔지니어링</h3>
                <ul className='skill_name'>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JAVASCRIPT</li>
                </ul>
                <dl>
                  <dt>주요 업무</dt>
                  <dd>
                    <dl>
                      <dt>웹 표준 준수</dt>
                      <dd><FaCircle />HTML/CSS W3C 웹 접근성 검사 통과</dd>
                    </dl>
                  </dd>
                  <dd>
                    <dl>
                      <dt>주요 기술</dt>
                      <dd><FaCircle />media query를 이용한 반응형 웹 페이지</dd>
                      <dd><FaCircle />CSS를 활용한 Animation 구현</dd>
                      <dd><FaCircle />form,table 양식 서브 페이지 구현</dd>
                      <dd><FaCircle />JAVASCRIPT로 영상배너 연속재생 및 pagination 구현</dd>
                    </dl>
                  </dd>
                </dl>
              </div>
              <ul className='link'>
                <li>
                  <a href="https://aromad17.github.io/samsung-engineering_clone/" title="삼성엔지니어링 클론 사이트로 이동">
                    <FaChrome />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/aromad17/samsung-engineering_clone" title='삼성엔지니어링 클론사이트 깃헙 리파지토리로 이동'>
                    <FaGithub />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* 삼성엔지니어링 */}
          {/* 메신저 */}
          <div className='work_content messanger'>
            <div className='work_preview'>
              <div className='mockup'>
                <ul>
                  <li>개인 작업물</li>
                </ul>

                <div className='mockup_app'>

                  <div className='tablet_mockup_m'>
                    <div className='tablet_screen'>
                      <video src={process.env.PUBLIC_URL + '/images/netflix.webm'}
                        title="netflix video tablet" autoPlay={true} muted={true} loop={true} type="video/webm" >
                      </video>
                    </div>
                  </div>

                  <div className='phone_mockup_m'>
                    <div className='phone_screen'>
                      <video src={process.env.PUBLIC_URL + '/images/netflix.webm'}
                        title="netflix video tablet" autoPlay={true} muted={true} loop={true} type="video/webm" >
                      </video>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='work_description'>
              <div className='description_space'>
                <h3>메신저 앱</h3>
                <ul className='skill_name'>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JAVASCRIPT</li>
                  <li>REACT</li>
                </ul>
                <dl className=''>
                  <dt>주요 업무</dt>
                  <dd className='spa'>
                    Single Page Application
                  </dd>
                  <dd>
                    <dl>
                      <dt>주요 기술</dt>
                      <dd><FaCircle />FIREBASE와 연동하여 실시간 데이터 수정 가능</dd>
                      <dd><FaCircle />API 데이터를 이용하여 화면 컨텐츠 구성</dd>
                      <dd><FaCircle />FIREBASE를 이용한 SOCIAL 계정으로 회원가입, 로그인 가능</dd>
                    </dl>
                  </dd>
                </dl>
              </div>
              <ul className='link'>
                <li>
                  <a href="https://aromad17.github.io/kkotalk/" title="메신저앱 사이트로 이동">
                    <FaChrome />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/aromad17/kkotalk" title='메신저앱 깃헙 리파지토리로 이동'>
                    <FaGithub />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* 메신저 */}
          {/* 넷플 */}
          <div className='work_content netflix'>
            <div className='work_preview'>
              <div className='mockup'>
                <ul>
                  <li>개인 작업물</li>
                </ul>
                <div className='mockup_app'>
                  <div className='tablet_mockup_m'>
                    <div className='tablet_screen'>
                      <video src={process.env.PUBLIC_URL + '/images/netflix.webm'}
                        title="netflix video tablet" autoPlay={true} muted={true} loop={true} type="video/webm" >
                      </video>
                    </div>
                  </div>
                  <div className='phone_mockup_m'>
                    <div className='phone_screen'>
                      <video src={process.env.PUBLIC_URL + '/images/netflix.webm'}
                        title="netflix video tablet" autoPlay={true} muted={true} loop={true} type="video/webm" >
                      </video>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='work_description'>
              <div className='description_space'>
                <h3>넷플릭스</h3>
                <ul className='skill_name'>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JAVASCRIPT</li>
                  <li>REACT</li>
                </ul>
                <dl className=''>
                  <dt>주요 업무</dt>
                  <dd className='spa'>
                    Single Page Application
                  </dd>
                  <dd>
                    <dl>
                      <dt>주요 기술</dt>
                      <dd><FaCircle />FIREBASE 연동으로 회원가입,로그인,회원 정보 수정 기능 구현</dd>
                      <dd><FaCircle />Axios를 사용한 외부 API 이용</dd>
                      <dd><FaCircle />리액트 라우터 v6의 중첩 라우팅 사용</dd>
                      <dd><FaCircle />SCSS 적용</dd>
                    </dl>
                  </dd>
                </dl>
              </div>
              <ul className='link'>
                <li>
                  <a href="https://aromad17.github.io/netflix/" title="netflix 클론 사이트로 이동">
                    <FaChrome />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/aromad17/netflix" title='netflix 클론사이트 깃헙 리파지토리로 이동'>
                    <FaGithub />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* 넷플 */}
        </div>
      </div>




    </div >

  )
}

export default Work