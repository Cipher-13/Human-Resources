export interface calender {
  employee: string;
  date: string;        // yyyy-mm-dd (from input type="date")
  hours: number;
  project: string;
  description?: string;
  createdAt: Date;
}

export interface prizes {
  employeeName: string;
  prizeType: string;
  grantDate: Date;
  gift: string;
  value: number;
  status: 'نشط' | 'غير نشط';
  statusClass?: string;
  files?: string[];
  createdAt?: Date;
}

export interface Promotions {
  employee: string;
  previousTitle: string;
  newTitle: string;
  promotionDate: string;     // تاريخ الترقية
  effectiveDate: string;     // تاريخ التنفيذ
  salaryAdjustment: number;
  status: 'نشط' | 'غير نشط';
  reason?: string;
  document?: string;         // optional (file / url)
  createdAt: Date;
}

