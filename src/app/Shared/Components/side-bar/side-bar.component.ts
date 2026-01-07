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
  isPlansOpen = false;
  isReferralsOpen = false;
  isCalenderOpen = false;


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

  togglePlansMenu() {
    this.closeAll();
    this.isPlansOpen = true;
  }

    toggleReferralsMenu() {
    this.closeAll();
    this.isReferralsOpen = true;
  }

  toggleCalender() {
    this.closeAll();
    this.isCalenderOpen = true;
  }

  closeAll() {
    this.isRequestsOpen = false;
    this.isSettingsOpen = false;
    this.isEvaluationsOpen = false;
     this.isPlansOpen = false;
     this.isReferralsOpen = false;
     this.isCalenderOpen = false;
  }
}
