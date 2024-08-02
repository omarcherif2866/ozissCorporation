import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
	selector: 'app-digital-agency-demo',
	templateUrl: './digital-agency-demo.component.html',
	styleUrls: ['./digital-agency-demo.component.scss']
})
export class DigitalAgencyDemoComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

	ctaBGImage = [
        {
            img: `assets/img/agency-image/gradient-bg.jpg`
        }
    ]
	
    projectsSlides: OwlOptions = {
		loop: true,
		nav: false,
		smartSpeed: 1000,
		autoplayTimeout: 5000,
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
			1200: {
				items: 4
			}
		}
    }
    feedbackSlides: OwlOptions = {
		loop: true,
		nav: false,
		smartSpeed: 1000,
		autoplayTimeout: 5000,
		dots: true,
		animateOut: 'fadeOut',
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