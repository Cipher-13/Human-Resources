import { Component } from '@angular/core';

@Component({
  selector: 'app-consequences',
  templateUrl: './consequences.component.html',
  styleUrls: ['./consequences.component.scss']
})
export class ConsequencesComponent {
  emptyColumns = Array(4).fill(null);

  projects = [
    {
      proceduralSort: 'اجراء تأديبي',
      proceduralTime: '10 يناير 2024',
      proceduralCause: 'التغيب عن العمل',
      procedural: 'تم رصد تغيبك عن العمل دون إذن مسبق أو عذر مقبول، وهذا يُعد مخالفة لسياسات الحضور والانصراف المعتمدة بالشركة. نرجو الالتزام بمواعيد العمل الرسمية وتقديم طلب الإجازة أو إخطار الغياب عبر النظام المعتمد مسبقًا، علماً بأن تكرار هذا السلوك قد يعرضك لإجراءات تأديبية أشد وفقًا للائحة الشركة.',
      expanded: false

    },
    {
      proceduralSort: 'اجراء تحذيري ',
      proceduralTime: '10 يناير 2024',
      proceduralCause: 'التأخر عن العمل',
      procedural: 'تم رصد تغيبك عن العمل دون إذن مسبق أو عذر مقبول، وهذا يُعد مخالفة لسياسات الحضور والانصراف المعتمدة بالشركة. نرجو الالتزام بمواعيد العمل الرسمية وتقديم طلب الإجازة أو إخطار الغياب عبر النظام المعتمد مسبقًا، علماً بأن تكرار هذا السلوك قد يعرضك لإجراءات تأديبية أشد وفقًا للائحة الشركة.',
      expanded: false

    },
  ];

}
