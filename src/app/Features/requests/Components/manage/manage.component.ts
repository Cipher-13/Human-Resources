import { Requests } from './../../../../Core/Interfaces/itable';
import { Component, HostListener, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

const ELEMENT_DATA: Requests[] = [
  {
    jobNumber: '1',
    residenceNumber: '2311421',
    employeeName: 'احمد علي محمد',
    avatar: 'assets/avatar.png',
    jobTitle: 'مصمم مواقع',
    workLocation: 'المكتب الرئيسي',
    department: 'التصميم',
    section: 'البرمجة',
    request: 'عمل إضافي',
    status: 'موافقة',
    statusClass: 'status-approved',
  },
  {
    jobNumber: '2',
    residenceNumber: '2311422',
    employeeName: 'محمد أحمد حسن',
    avatar: 'assets/avatar.png',
    jobTitle: 'Frontend Developer',
    workLocation: 'الفرع الثاني',
    department: 'البرمجة',
    section: 'Angular',
    request: 'إجازة',
    status: 'قيد المراجعة',
    statusClass: 'status-pending',
  },
  {
    jobNumber: '3',
    residenceNumber: '2311423',
    employeeName: 'سارة محمود',
    avatar: 'assets/avatar.png',
    jobTitle: 'Backend Developer',
    workLocation: 'المكتب الرئيسي',
    department: 'البرمجة',
    section: 'API',
    request: 'استقالة',
    status: 'مرفوضة',
    statusClass: 'status-rejected',
  },
  {
    jobNumber: '4',
    residenceNumber: '2311422',
    employeeName: 'كارم العزايزه',
    avatar: 'assets/avatar.png',
    jobTitle: 'Mobile Developer',
    workLocation: 'الفرع الثاني',
    department: 'البرمجة',
    section: 'IOS',
    request: 'إجازة',
    status: 'قيد المراجعة',
    statusClass: 'status-pending',
  },
  {
    jobNumber: '5',
    residenceNumber: '2311422',
    employeeName: 'فاروق علي ',
    avatar: 'assets/avatar.png',
    jobTitle: 'Frontend Developer',
    workLocation: 'الفرع الثاني',
    department: 'البرمجة',
    section: 'React',
    request: 'مغادرة',
    status: 'موافقة',
    statusClass: 'status-approved',
  },
];

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss'],
})
export class ManageComponent implements OnInit {
  searchText = '';
  selectedFilter = 'طلب';
  isFilterOpen = false;

  filters = ['طلب', 'عمل إضافي', 'إجازة', 'مغادرة', 'استقالة', 'سلفة'];

  displayedColumns: string[] = [
    'status',
    'request',
    'section',
    'department',
    'workLocation',
    'jobTitle',
    'employeeName',
    'residenceNumber',
    'jobNumber',
  ];

  dataSource = new MatTableDataSource<Requests>(ELEMENT_DATA);

  ngOnInit() {
    this.displayedColumns = this.displayedColumns.reverse();
  }

  toggleFilter() {
    this.isFilterOpen = !this.isFilterOpen;
  }

  selectFilter(filter: string) {
    this.selectedFilter = filter;
    this.isFilterOpen = false;
    this.applyFilter();
  }

  applyFilter() {
    const search = this.searchText.trim().toLowerCase();
    const filter = this.selectedFilter;

    this.dataSource.filterPredicate = (data: Requests) => {
      if (filter === 'طلب') {
        return data.request.toLowerCase().includes(search);
      }
      return (
        data.request === filter &&
        (data.employeeName.toLowerCase().includes(search) ||
          data.jobNumber.includes(search) ||
          data.residenceNumber.includes(search))
      );
    };

    this.dataSource.filter = Math.random().toString();
  }

  @HostListener('document:click')
  closeDropdown() {
    this.isFilterOpen = false;
  }
}
