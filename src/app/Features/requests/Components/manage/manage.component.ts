import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent {

  searchText = '';
  isFilterOpen = false;

  filters = [
    'طلب',
    'عمل إضافي',
    'إجازة',
    'مغادرة',
    'استقالة',
    'سلفة'
  ];

  selectedFilter = 'طلب';

  toggleFilter() {
    this.isFilterOpen = !this.isFilterOpen;
  }

  selectFilter(filter: string) {
    this.selectedFilter = filter;
    this.isFilterOpen = false;
  }

  @HostListener('document:click')
  closeDropdown() {
    this.isFilterOpen = false;
  }
}
