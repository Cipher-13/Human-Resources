export interface PricingFeature {
  name: string;
  included: boolean;
}

export interface PricingLimit {
  label: string;
  value: string;
  icon: string;
  color: string;
}

export interface PricingTier {
  id: string;
  name: string;
  monthlyPrice: number;
  annualPrice: number;
  currency: string;
  description: string;
  trialDays?: number;
  isRecommended?: boolean;
  isCurrent?: boolean;
  features: PricingFeature[];
  limits: PricingLimit[];
  buttonText: string;
  trialButtonText?: string;
}

