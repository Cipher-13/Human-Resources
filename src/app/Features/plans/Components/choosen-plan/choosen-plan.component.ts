import { Component, Input } from '@angular/core';
import { PricingTier } from 'src/app/Core/Interfaces/iplans';

@Component({
  selector: 'app-choosen-plan',
  templateUrl: './choosen-plan.component.html',
  styleUrls: ['./choosen-plan.component.scss']
})
export class ChoosenPlanComponent {

  @Input() isAnnual = false;

  tiers: PricingTier[] = [
    {
      id: 'free',
      name: 'Free',
      monthlyPrice: 0,
      annualPrice: 0,
      currency: '../../../../../assets/images/KSA-riyal.png',
      description: 'Basic plan for small businesses just getting started',
      isRecommended: true,
      isCurrent: true,
      features: [
        { name: 'دمج الذكاء الاصطناعي', included: false }
      ],
      limits: [
        { label: 'التخزين', value: '1 GB', icon: 'storage', color: '#E67E22' },
        { label: 'الموظفين', value: '5', icon: 'badge', color: '#3498DB' },
        { label: 'المستخدمون', value: '2', icon: 'group', color: '#2ECC71' }
      ],
      buttonText: 'الخطة الحالية'
    },

    {
      id: 'starter',
      name: 'Starter',
      monthlyPrice: 19.99,
      annualPrice: 191.9, // خصم 20%
      currency: '../../../../../assets/images/KSA-riyal.png',
      description: 'Perfect for small businesses looking to grow',
      trialDays: 7,
      features: [
        { name: 'دمج الذكاء الاصطناعي', included: false }
      ],
      limits: [
        { label: 'التخزين', value: '5 GB', icon: 'storage', color: '#E67E22' },
        { label: 'الموظفين', value: '10', icon: 'badge', color: '#3498DB' },
        { label: 'المستخدمون', value: '5', icon: 'group', color: '#2ECC71' }
      ],
      buttonText: 'اشتراك',
      trialButtonText: 'Start 7 Day Trial'
    },

    {
      id: 'pro',
      name: 'Pro',
      monthlyPrice: 49.99,
      annualPrice: 479.9,
      currency: "../../../../../assets/images/KSA-riyal.png",
      description: 'Ideal for growing businesses',
      trialDays: 14,
      features: [
        { name: 'دمج الذكاء الاصطناعي', included: true }
      ],
      limits: [
        { label: 'التخزين', value: '20 GB', icon: 'storage', color: '#E67E22' },
        { label: 'الموظفين', value: '50', icon: 'badge', color: '#3498DB' },
        { label: 'المستخدمون', value: 'Unlimited', icon: 'group', color: '#2ECC71' }
      ],
      buttonText: 'اشتراك',
      trialButtonText: 'Start 14 Day Trial'
    }
  ];

  getPrice(tier: PricingTier): number {
    return this.isAnnual ? tier.annualPrice : tier.monthlyPrice;
  }

  getPeriod(): string {
    return this.isAnnual ? 'سنوياً' : 'شهرياً';
  }
}
