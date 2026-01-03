import { Component, OnInit } from '@angular/core';
interface ContractRow {
  name: string;
  type: string;
  creator: string;
  avatarUrl: string;
}


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  contracts: ContractRow[] = [
    {
      name: 'شهادة خبره',
      type: '(Experience letter)',
      creator: 'خالد حسن علي',
      avatarUrl: 'assets/images/Guset-Avatar.png'
    },
    {
      name: 'شهادة خبره',
      type: '(Experience letter)',
      creator: 'خالد حسن علي',
      avatarUrl: 'assets/images/Guset-Avatar.png'
    },
    {
      name: 'شهادة خبره',
      type: '(Experience letter)',
      creator: 'خالد حسن علي',
      avatarUrl: 'assets/images/Guset-Avatar.png'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onPreview(contract: ContractRow): void {
    console.log('Previewing:', contract.name);
  }

  onUseTemplate(contract: ContractRow): void {
    console.log('Using template for:', contract.name);
  }
}
