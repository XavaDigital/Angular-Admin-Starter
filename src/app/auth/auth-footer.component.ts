import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';

declare var $: any;

@Component({
  selector: 'auth-footer',
  templateUrl: './auth-footer.component.html',
})
export class AuthFooterComponent {
  test: Date = new Date();
}
