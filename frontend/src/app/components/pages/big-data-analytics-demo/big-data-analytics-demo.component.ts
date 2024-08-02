import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-big-data-analytics-demo',
    templateUrl: './big-data-analytics-demo.component.html',
    styleUrls: ['./big-data-analytics-demo.component.scss']
})
export class BigDataAnalyticsDemoComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

	bannerBGImage = [
        {
            img: `assets/img/bigdata-analytics/main-banner.jpg`
        }
    ]

}