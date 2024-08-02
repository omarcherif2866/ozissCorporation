import { Component, OnInit, HostListener } from '@angular/core';

@Component({
    selector: 'app-navbar-style-five',
    templateUrl: './navbar-style-five.component.html',
    styleUrls: ['./navbar-style-five.component.scss']
})
export class NavbarStyleFiveComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}

    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;
    }

    // Navbar Sticky
    isSticky: boolean = false;
    @HostListener('window:scroll', ['$event'])
    checkScroll() {
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (scrollPosition >= 50) {
            this.isSticky = true;
        } else {
            this.isSticky = false;
        }
    }

}