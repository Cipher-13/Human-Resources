import { Component } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {

    isRequestsOpen = false;

  toggleRequests() {
    this.isRequestsOpen = !this.isRequestsOpen;
  }

  closeRequests() {
    this.isRequestsOpen = false;
  }

}
