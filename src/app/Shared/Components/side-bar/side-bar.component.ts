import { Component } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
  isRequestsOpen = false;
  isSettingsOpen = false;
  isEvaluationsOpen = false;

  toggleRequests() {
    this.closeAll();
    this.isRequestsOpen = true;
  }

  toggleSettingsMenu() {
    this.closeAll();
    this.isSettingsOpen = true;
  }

  toggleEvaluationsMenu() {
    this.closeAll();
    this.isEvaluationsOpen = true;
  }

  closeAll() {
    this.isRequestsOpen = false;
    this.isSettingsOpen = false;
    this.isEvaluationsOpen = false;
  }
}
