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



export interface meetings {
  name: string;
  description?: string;
  status: 'نشط' | 'غير نشط';
  defaultDuration?: number; // Duration in minutes or hours
  meetingsCount?: number;
  createdAt: Date;
}


export interface Ratings {
 name: string;
  description: string;
  status: 'نشط' | 'غير نشط';
  statusClass: string;
  createdAt: Date;
}

export interface Advertisement {
  id?: number;
  title: string;
  category: string;
  shortDescription?: string;
  content?: string;
  isFeatured: boolean;
  isHighPriority: boolean;
  isCompanyWide: boolean;
  startDate: Date;
  endDate: Date;
  targetBranches: string;
  targetDepartments: string;
  createdAt: Date;
  status?: string;
  statusClass?: string;
}

export interface Requirements{
  name: string;
  email: string;
  planName: string;
  planDuration: 'شهري' | 'سنوي';
  status: 'pending' | 'approved' | 'rejected';
  requestedAt: Date;
}

export interface OrderPolicy {
  orderName: string;
  orderDate: Date;
  userName: string;
  planName: string;
  originalPrice: number;
  couponCode?: string;
  discount: number;
  finalPrice: number;
  status: 'pending' | 'paid' | 'cancelled';
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


export interface Rooms {
  meeting: string;
  subject: string;
  type: string;
  description: string;
  recordedBy: string;
  registrationDate: string;
  registrar: string;
  createdAt: Date;
}

export interface Resignation {
  id?: number;                // optional ID
  employeeId: number | '';    // selected employee
  employeeName?: string;      // name of employee for display
  resignationDate: string;    // yyyy-mm-dd
  lastWorkingDay: string;     // yyyy-mm-dd
  noticePeriod: number;       // in days
  reason: string;
  status: 'قيد المراجعة' | 'مقبولة' | 'مرفوضة';
  document?: string;          // optional document URL
  createdAt?: Date;           // timestamp
}

