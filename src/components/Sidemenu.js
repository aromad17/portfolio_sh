import React, { useEffect } from 'react'
import $ from 'jquery';
import 'styles/sidemenu.scss';
import Content from './Content';


function Sidemenu({ isHamOn, setIsHamOn, isHamSpanOn, setIsHamSpanOn }) {

  useEffect(() => {
    var $menu = $('.Menu-list'),
      $item = $('.Menu-list-item'),
      w = $(window).width(), //window width
      h = $(window).height(); //window height

    $(window).on('mousemove', function (e) {
      var offsetX = 0.5 - e.pageX / w, //cursor position X
        offsetY = 0.5 - e.pageY / h, //cursor position Y
        dy = e.pageY - h / 2, //@h/2 = center of poster
        dx = e.pageX - w / 2, //@w/2 = center of poster
        theta = Math.atan2(dy, dx), //angle between cursor and center of poster in RAD
        angle = theta * 180 / Math.PI - 90, //convert rad in degrees
        offsetPoster = $menu.data('offset'),
        transformPoster = 'translate3d(0, ' + -offsetX * offsetPoster + 'px, 0) rotateX(' + (-offsetY * offsetPoster) + 'deg) rotateY(' + (offsetX * (offsetPoster * 2)) + 'deg)'; //poster transform

      //get angle between 0-360
      if (angle < 0) {
        angle = angle + 360;
      }

      //poster transform
      $menu.css('transform', transformPoster);

      //parallax for each layer
      $item.each(function () {
        var $this = $(this),
          offsetLayer = $this.data('offset') || 0,
          transformLayer = 'translate3d(' + offsetX * offsetLayer + 'px, ' + offsetY * offsetLayer + 'px, 20px)';

        $this.css('transform', transformLayer);
      });
    });

    const liCon = document.querySelectorAll(".Menu-list li");
    const windowHeight = window.innerHeight;
    const menu = document.querySelector(".Menu");
    const moveH = window.innerHeight;
    const topElement = Array.from(document.querySelectorAll(".top_move"));

    liCon.forEach((item, idx) => {
      item.addEventListener("click", () => {
        menu.classList.remove("on");
        const targetElement = topElement[idx];

        if (targetElement) {
          const rect = targetElement.getBoundingClientRect();
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          const targetTop = rect.top + scrollTop;

          window.scrollTo({
            top: targetTop,
            left: 0,
            behavior: 'smooth'
          });
        }
      });
    });
  }, [])

  const handleHamClick = (e) => {
    e.preventDefault();
    setIsHamOn((prev) => !prev);
    setIsHamSpanOn((prev) => !prev);
  };

  return (
    <div className={`Menu ${isHamOn ? 'on' : ''}`}>
      <ul className="Menu-list" data-offset="10">
        <li className="Menu-list-item" data-offset="20"
          onClick={handleHamClick}
        >
          Home
          <span className="Mask"><span>Intro</span></span>
          <span className="Mask"><span>Intro</span></span>
        </li>
        <li className="Menu-list-item" data-offset="16"
          onClick={handleHamClick}
        >
          About
          <span className="Mask"><span>About</span></span>
          <span className="Mask"><span>About</span></span>
        </li>
        <li className="Menu-list-item" data-offset="12"
          onClick={handleHamClick}
        >
          Work
          <span className="Mask"><span>Work</span></span>
          <span className="Mask"><span>Work</span></span>
        </li>
        <li className="Menu-list-item" data-offset="8"
          onClick={handleHamClick}
        >
          Contact
          <span className="Mask"><span>Contact</span></span>
          <span className="Mask"><span>Contact</span></span>
        </li>
      </ul>
    </div>

  )
}

export default Sidemenu