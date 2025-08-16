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

export type PoolTypes = {
  price: number | null;
  name: string;
  description: string;
  is_active: boolean;
};

export type Config = {
  plan_name: string;
  plan_uuid: string;
  pool_type_name: string;
  username: string;
  password: string;
  uuid: string;
  name: string;
  protocol: string;
  format: string;
  rotation: string;
  sticky_lifetime: number;
  country: string;
  state: string;
  city: string;
  quantity: number;
  is_active: boolean;
  created: string;
  updated: string;
};

export type City = {
  name: string;
  code: string;
};

export type State = {
  name: string;
  cities: City[];
};

export type Country = {
  code: string;
  name: string;
  states: State[];
};

export interface GenerateResidentialProxy {
  name: string;
  plan_uuid: string;
  protocol: string;
  port: number;
  format: string;
  rotation: string;
  sticky_lifetime: number;
  country: string;
  state: string;
  city: string;
  quantity: number;
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

export interface Plan {
  id: number;
  name: string;
  duration: string;
  price: string;
  active: boolean;
  minimum_quantity: number;
}

export type Plans = {
  id: number;
  name: string;
  active: boolean;
  plans: Plan[];
};

export type Transaction = {
  name: string;
  status: string;
  duration: string;
  provider: string;
  id: number;
  product: number;
  plan: number;
  user_plan: number;
  quantity: number;
  order_data: {};
  total_amount: number;
  coupon: number;
  updated: string;
  created: string;
  expire_at: string;
};

export type ResidentialPlan = {
  uuid: string;
  name: string;
  pool_type: PoolTypes;
  type: string;
  reference_id: string;
  subuser_id: string;
  username: string;
  password: string;
  expiration: string;
  created: string;
  total_gb: number;
  total_cost: number;
};
