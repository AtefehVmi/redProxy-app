export type Profile = {
  email: string;
  uuid: string;
  balance: string;
  email_verified: boolean;
  reward_balance: string;
  is_staff: boolean;
  is_anon: boolean;
  referral_code: string;
  total_spent: null | string | number;
};
