import { Component } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

 
  ngAfterViewInit() {
    let swiper = new Swiper(".mySwiper", {
      direction: "horizontal",
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });





    //   let VideoSwiper = new Swiper(".VideoSwiper", {
    //   direction: "horizontal",
    //   pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    //   },
    // });


 let newSwiper = new Swiper(".swiper-container", {
  slidesPerView: 2.5,
  spaceBetween: 0,
  cssMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "fraction",
  }, navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

 let BlogSwiper = new Swiper(".swiper-container-Gallary", {
  slidesPerView: 2.5,
  spaceBetween: 20,
  cssMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "fraction",
  }, navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

  }




}
