import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-digital-agency-portfolio-demo',
    templateUrl: './digital-agency-portfolio-demo.component.html',
    styleUrls: ['./digital-agency-portfolio-demo.component.scss']
})
export class DigitalAgencyPortfolioDemoComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

	agencyPortfolioMainBanner = [
        {
            bgImg: `assets/img/agency-portfolio-main-banner/img1.jpg`,
			subTitle: `We are Creative`,
			title: `Digital Agency`,
			desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.`,
			btnText: `Get Started`,
			btnLink: `contact`
        },
        {
            bgImg: `assets/img/agency-portfolio-main-banner/img2.jpg`,
			subTitle: `We are Digital`,
			title: `UX/UI Design`,
			desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.`,
			btnText: `Get Started`,
			btnLink: `contact`
        },
        {
            bgImg: `assets/img/agency-portfolio-main-banner/img3.jpg`,
			subTitle: `We are Agency`,
			title: `Digital Marketing`,
			desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.`,
			btnText: `Get Started`,
			btnLink: `contact`
        }
    ]
	creativeBGImage = [
        {
            img: `assets/img/creative-bg.jpg`
        }
    ]

    homeSlides: OwlOptions = {
		loop: true,
		nav: true,
		smartSpeed: 1000,
		autoplayTimeout: 5000,
		dots: false,
		animateOut: 'fadeOut',
		autoplayHoverPause: true,
		autoplay: true,
		items: 1,
		navText: [
			"<i class='bx bx-chevron-left'></i>",
			"<i class='bx bx-chevron-right'></i>"
		]
    }
    blogSlides: OwlOptions = {
		loop: true,
		nav: false,
		dots: true,
		autoplayHoverPause: true,
		autoplay: true,
		smartSpeed: 1000,
		autoplayTimeout: 5000,
		margin: 30,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			992: {
				items: 3
			}
		}
    }
    partnerSlides: OwlOptions = {
		loop: true,
		nav: false,
		dots: false,
		autoplayHoverPause: true,
		autoplay: true,
		margin: 30,
		responsive: {
			0: {
				items: 2
			},
			576: {
				items: 4
			},
			768: {
				items: 4
			},
			992: {
				items: 6
			}
		}
    }
    feedbackSlides: OwlOptions = {
		loop: false,
		nav: false,
		smartSpeed: 1000,
		autoplayTimeout: 5000,
		dots: true,
		autoplayHoverPause: true,
		autoplay: true,
		items: 1
    }

	// for tab click event
    currentTab = 'tab1';
    switchTab(event: MouseEvent, tab: string) {
        event.preventDefault();
        this.currentTab = tab;
    }

}