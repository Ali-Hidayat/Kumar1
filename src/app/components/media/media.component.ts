import { Component } from '@angular/core';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css']
})
export class MediaComponent {


  selectedTab: string = 'EVENT';

selectTab(tab: string) {
  this.selectedTab = tab;

}
}
