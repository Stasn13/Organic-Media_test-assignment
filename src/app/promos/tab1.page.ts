import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

    promos: Array<object> = [];

    constructor() {
    }

    ngOnInit() {
        this.generatePromos();
      console.log(this.promos)
    }

    private randomInteger(min, max) {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }

    private generatePromos() {
        const arrLength = this.randomInteger(4, 7)

        for (let i = 1; i < arrLength; i++) {
            this.promos.push({
                index: i,
                title: 'Month\'s Promo',
                desc: 'Our selected promo, winners will be announced soon',
                daysCount: this.randomInteger(1, 3),
                daysLength: this.randomInteger(3, 5),
                hot: this.randomInteger(1, 3) % 2 != 1,
                views: this.randomInteger(100, 300),
                enrolled: this.randomInteger(20, 60)
            })
        }
    }
}
