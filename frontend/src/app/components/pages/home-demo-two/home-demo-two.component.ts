import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-home-demo-two',
    templateUrl: './home-demo-two.component.html',
    styleUrls: ['./home-demo-two.component.scss']
})
export class HomeDemoTwoComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

	bannerBGImage = [
        {
            img: `assets/img/banner-bg1.jpg`
        }
    ]

    boxesSlides: OwlOptions = {
		loop: true,
		nav: false,
		dots: false,
		autoplayHoverPause: true,
		autoplay: true,
		margin: 30,
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 2
			},
			768: {
				items: 3
			},
			992: {
				items: 4
			}
		}
    }
    teamSlides: OwlOptions = {
		loop: true,
		nav: false,
		dots: true,
		autoplayHoverPause: true,
		autoplay: true,
		margin: 30,
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 2
			},
			768: {
				items: 2
			},
			992: {
				items: 3
			},
			1500: {
				items: 5
			}
		}
    }
    feedbackSlides: OwlOptions = {
		loop: true,
		nav: false,
		dots: true,
		autoplayHoverPause: true,
		autoplay: true,
		margin: 30,
		items: 1
    }

}