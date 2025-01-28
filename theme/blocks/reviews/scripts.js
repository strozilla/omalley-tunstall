import Swiper from "swiper";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

document.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper(".swiper", {
    modules: [Navigation, Autoplay],
    direction: "horizontal",
    loop: true,
    autoplay: {
      enabled: true,
      delay: 3000,
    },
    slidesPerView: 1,
    centeredSlides: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
