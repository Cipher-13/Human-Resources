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
