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
  warningFromId: any;
  subject: any;
  severity: any;
  warningDate: any;
  description: any;
  improvementGoals: any;
  improvementStartDate: any;
  improvementEndDate: any;
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

export interface Complain {
  id?: number; // اختياري للداخلية
  complainantId: number; // الشاكي
  employeeName?: string; // اسم الشاكي للعرض
  againstId?: number; // الشخص ضده (ID)
  againstName?: string; // الاسم للعرض
  complaintType: string; // نوع الشكوى
  date: string; // تاريخ الشكوى
  description: string; // وصف الشكوى
  attachments?: string; // رابط أو اسم الملف
  sendWithName: boolean; // نوع الإرسال
  sendWithoutName: boolean; // نوع الإرسال
  status?: string; // الحالة
  createdAt?: Date; // تاريخ الإنشاء
}


export interface Trip {
  employeeId: number;
  employeeName?: string;

  purpose: string;          // الغرض
  destination: string;      // الوجهة

  startDate: string;        // تاريخ البدء
  endDate: string;          // تاريخ الانتهاء

  description: string;      // الوصف
  expectedResults: string;  // النتائج المتوقعة

  advanceAmount: number;    // مبلغ مقدم
  documents?: string;       // الوثائق

  status: string;
  createdAt?: Date;
}
