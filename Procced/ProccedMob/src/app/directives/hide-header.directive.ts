// hide-header.directive.ts - this directive will do the actual job to hide header on content scroll in Ionic Framework.

import { Directive, HostListener, Input, OnInit, Renderer2 } from '@angular/core';
import { DomController, Platform } from '@ionic/angular';

@Directive({
    selector: '[appHideHeader]'
})
export class HideHeaderDirective implements OnInit {

    @Input('appHideHeader') header: any;
   


    private lastY = 0;

    constructor(
        private renderer: Renderer2,
        private domCtrl: DomController,
        private plt: Platform
    ) { }

    ngOnInit(): void {
        this.header = this.header.el;
        this.domCtrl.write(() => {
            this.renderer.setStyle(this.header, 'transition', 'margin-top 1000ms');
        });
    }

    @HostListener('ionScroll', ['$event']) onContentScroll($event: any) {
        // if (this.plt.is('android')){
         if ($event.detail.scrollTop > this.lastY) {
            this.domCtrl.write(() => {
                this.renderer.setStyle(this.header, 'margin-top', `-${ this.header.clientHeight }px`);
            });
        } else {
            this.domCtrl.write(() => {
                this.renderer.setStyle(this.header, 'margin-top', '0');
            });
        }

        this.lastY = $event.detail.scrollTop;
      }
    // }

}