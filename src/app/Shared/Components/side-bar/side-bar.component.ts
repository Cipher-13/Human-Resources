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
  isPerformanceOpen= false;
  isMeetingsOpen= false;
  isTrainingOpen= false;
  isOriginalOpen= false;
  isHiringOpen= false;

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

  toggleHiring() {
    this.closeAll();
    this.isHiringOpen = true;
  }
  toggleOriginal() {
    this.closeAll();
    this.isOriginalOpen = true;
  }
  toggleTraining() {
    this.closeAll();
    this.isTrainingOpen = true;
  }
  togglePerformance() {
    this.closeAll();
    this.isPerformanceOpen = true;
  }
  toggleMeetings() {
    this.closeAll();
    this.isMeetingsOpen = true;
  }

  closeAll() {
    this.isRequestsOpen = false;
    this.isSettingsOpen = false;
    this.isEvaluationsOpen = false;
    this.isPlansOpen = false;
    this.isReferralsOpen = false;
    this.isCalenderOpen = false;
    this.isPerformanceOpen = false;
    this.isMeetingsOpen = false;
    this.isTrainingOpen = false;
    this.isOriginalOpen = false;
    this.isHiringOpen = false;
  }
}
