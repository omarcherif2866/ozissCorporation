import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-web-hosting-demo',
    templateUrl: './web-hosting-demo.component.html',
    styleUrls: ['./web-hosting-demo.component.scss']
})
export class WebHostingDemoComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

	whyChooseBGImage = [
        {
            img: `assets/img/banner-bg1.jpg`
        }
    ]

    testimonialsSlides: OwlOptions = {
		items: 1,
		loop: true,
		nav: false,
		dots: true,
		autoplay: true,
		smartSpeed: 1000,
		autoplayTimeout: 5000,
		autoplayHoverPause: true
    }

}