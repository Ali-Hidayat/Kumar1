import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projec-listing',
  templateUrl: './projec-listing.component.html',
  styleUrls: ['./projec-listing.component.css']
})
export class ProjecListingComponent {
  selectedTab: string = 'consumer';

  selectTab(tab: string) {
    this.selectedTab = tab;
  }


selectedOption1: string = 'select';
selectedOption2: string = 'select';
selectedOption3: string = 'select';
selectedOption4: string = 'select';
selectedOption5: string = 'select';

constructor(private router:Router) { }



onOptionClick1(option: string) {
  this.selectedOption1 = option;
}

onOptionClick2(option: string) {
  this.selectedOption2 = option;
}

onOptionClick3(option: string) {
  this.selectedOption3 = option;
}

onOptionClick4(option: string) {
  this.selectedOption4 = option;
}

onOptionClick5(option: string) {
  this.selectedOption5 = option;
}

onDocumentClick(event: MouseEvent) {
  const target = event.target as HTMLElement;
  const toggle = document.querySelector('.dropdown__switch') as HTMLInputElement;

  if (target === toggle) return;

  const isDropdownChild = target.closest('.dropdown__filter');

  if (!isDropdownChild) {
    toggle.checked = false;
  }
}


showImageDetails(id:number){
  const imgId = id;
  this.router.navigate(['project/' + imgId]);
  console.log('i m called')
  


}

}
