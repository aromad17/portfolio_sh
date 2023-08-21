import React, { useState, useEffect, useRef } from 'react';
import 'styles/contact.css';
import { FaGithub } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
function Contact() {
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const form = useRef();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs.sendForm('service_grccemm', 'template_hlatgpe', form.current, 'qTq6OGEExX3rv-VfH')
      .then((result) => {
        console.log(result.text);
        setFormData({ user_name: '', user_email: '', message: '' });
        alert("빠른 확인 후 연락드리겠습니다.")
      }, (error) => {
        console.log(error.text);
      });
  };

  useEffect(() => {
    const contactCon = document.querySelector(".contact .contents");
    const title = contactCon.querySelectorAll('h3');
    const titleLines = document.querySelectorAll('.contact .contents h3 span');
    const touchCont = document.querySelector(".contact .touch ul");
    const fomrCont = document.querySelector(".mail form");

    function contactScroll() {
      const scrollPosition = window.scrollY || window.pageYOffset;
      console.log(scrollPosition);
      if (window.innerWidth > 845) {
        if (scrollPosition <= 2070) {

          titleLines.forEach(line => {
            line.style.width = 0;
          });

          title.forEach(item => {
            item.style.opacity = 0;
          });

          touchCont.style.transform = "translateY(-230%)";
          touchCont.style.opacity = 0;
          fomrCont.style.transform = "translateY(-120%)";
          fomrCont.style.opacity = 0;


        } else if (scrollPosition > 2070) {
          titleLines.forEach(line => {
            line.style.width = 100 + '%';
          });

          title.forEach(item => {
            item.style.opacity = 1;
          });

          touchCont.style.transform = "translateY(0%)";
          touchCont.style.opacity = 1;
          fomrCont.style.transform = "translateY(0%)";
          fomrCont.style.opacity = 1;
        }
      } else if (window.innerWidth <= 845) {
        if (scrollPosition < 1980) {
          titleLines.forEach(line => {
            line.style.width = 0;
          });

          title.forEach(item => {
            item.style.opacity = 0;
          });

          touchCont.style.transform = "translateY(-230%)";
          touchCont.style.opacity = 0;
          fomrCont.style.transform = "translateY(-120%)";
          fomrCont.style.opacity = 0;

        } else if (scrollPosition >= 1900) {
          titleLines.forEach(line => {
            line.style.width = 100 + '%';
          });

          title.forEach(item => {
            item.style.opacity = 1;
          });

          touchCont.style.transform = "translateY(0%)";
          touchCont.style.opacity = 1;
        }
        if (window.innerWidth < 680) {
          if (scrollPosition < 1480) {
            titleLines.forEach(line => {
              line.style.width = 0;
            });

            title.forEach(item => {
              item.style.opacity = 0;
            });

            touchCont.style.transform = "translateY(-230%)";
            touchCont.style.opacity = 0;
            fomrCont.style.transform = "translateY(-120%)";
            fomrCont.style.opacity = 0;

          } else if (scrollPosition >= 1480) {
            titleLines.forEach(line => {
              line.style.width = 100 + '%';
            });

            title.forEach(item => {
              item.style.opacity = 1;
            });

            touchCont.style.transform = "translateY(0%)";
            touchCont.style.opacity = 1;
          }
        }
      }
    }

    window.addEventListener('scroll', () => {
      contactScroll();
    });
    window.addEventListener('resize', () => {
      contactScroll();
    });




  });



  return (
    <div className='contact_frame'>
      <div className='contact top_move'>
        <div className='bg_circle'></div>
        <div className='bg_circle'></div>
        <div className='section_title'>
          <h2>Contact</h2>
        </div>

        <div className='contents'>
          <div className='contact_wrap'>
            <div className='touch'>
              <h3>
                <FaPhoneAlt />GET IN TOUCH
                <span></span>
              </h3>
              <div>
                <ul>
                  <li>
                    <dl>
                      <dt>PHONE</dt>
                      <dd>(+82)10 6685 0145</dd>
                    </dl>
                  </li>
                  <li>
                    <dl>
                      <dt>E-MAIL</dt>
                      <dd>aromad1117@naver.com</dd>
                    </dl>
                  </li>
                  <li>
                    <dl>
                      <dt>GITHUB</dt>
                      <dd>
                        <a href='https://github.com/'>
                          <FaGithub />
                        </a>
                      </dd>
                    </dl>
                  </li>
                </ul>
              </div>
            </div>

            <div className='mail'>
              <h3>
                <FaEnvelope />SEND A MAIL
                <span></span>
              </h3>
              <div>
                <form ref={form} onSubmit={handleSubmit}>

                  <div className='form_con'>
                    <label>이름</label>
                    <input type="text" name="user_name" onChange={handleChange} value={formData.user_name} required />
                  </div>

                  <div className='form_con'>
                    <label>이메일</label>
                    <input type="email" name="user_email" onChange={handleChange} value={formData.user_email} required />
                  </div>

                  <div className='form_con'>
                    <label>내용</label>
                    <textarea name="message" onChange={handleChange} value={formData.message} required />
                  </div>
                  <input type="submit" value="전송" className='send_btn' />

                </form>
              </div>
            </div>
          </div>
        </div>
      </div >
    </div>
  );
}

export default Contact;
