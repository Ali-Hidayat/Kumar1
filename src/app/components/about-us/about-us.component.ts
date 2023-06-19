import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent {
  selectedTab: string = 'AboutKumar';

selectTab(tab: string) {
  this.selectedTab = tab;

}

toggleAccordion(event: MouseEvent) {
    const element = event.currentTarget as HTMLElement;
    element.classList.toggle('active');
    console.log(element);
  }
}
