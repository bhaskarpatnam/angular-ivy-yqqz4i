import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  ngOnInit(){
    //this.updateClock();
  }
//   hourEl : any= document.getElementById('hour');
//  minuteEl :any = document.getElementById('minutes');
//  secondEl : any = document.getElementById('seconds');
//  ampmEl = document.getElementById('ampm');
// updateClock() {
//   alert()
//   let h : any= new Date().getHours();
//   let m  : any= new Date().getMinutes();
//   let s  : any= new Date().getSeconds();
//   let ampm = 'AM';

//   if (h > 12) {
//     h = h - 12;
//     ampm = 'PM';
//   }

//   h = h < 10 ? '0' + h : h;
//   m = m < 10 ? '0' + m : m;
//   s = s < 10 ? '0' + s : s;

//   this.hourEl.innerText = h;
//   this.minuteEl.innerText = m;
//   this.secondEl.innerText = s;
//   this.ampmEl.innerText = ampm;
//   setTimeout(() => {
//     this.updateClock();
//   }, 1000);
//}



}
