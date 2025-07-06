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

export type City = {
  name: string;
  code: string;
};

export type State = {
  name: string;
  code: string;
  cities: City[];
};

export type Country = {
  code: string;
  name: string;
  iso_code: string;
  states: State[];
};

export interface GenerateResidentialProxy {
  format: string;
  port: string;
  country: string;
  state: string;
  city: string;
  rotation: string;
  quantity: number;
  lifetime: number;
  plan: string;
}

export default interface Order {
  id: number;
  name: string;
  status: string;
  created: string;
  provider: string;
  total_amount: string;
  quantity: number;
  duration: string;
}
