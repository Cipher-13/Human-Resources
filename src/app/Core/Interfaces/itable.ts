export interface Requests {
  jobNumber: string;
  residenceNumber: string;
  employeeName: string;
  avatar: string;
  jobTitle: string;
  workLocation: string;
  department: string;
  section: string;
  request: string;
  status: string;
  statusClass: string;
}

export interface Ratings {
 name: string;
  description: string;
  status: 'نشط' | 'غير نشط';
  statusClass: string;
  createdAt: Date;
}


export interface Review {
  employeeName: string;      // الموظف
  reviewerName: string;      // المراجع
  reviewCycle: string;       // دورة المراجعة
  reviewDate: Date;          // تاريخ المراجعة
  status: 'نشط' | 'غير نشط'; // الحالة
  statusClass: string;       // class للـ badge
  category: string;          // التصنيف
}
