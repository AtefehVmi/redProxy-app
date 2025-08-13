import { clientStorage } from "@/utils/clientStorage";
import { createAppErrorMessage } from "@/utils/createAppErrorMessage";
import { isServer } from "@/utils/isServer";
import axios from "axios";
import { toast } from "react-toastify";
import Order, { GenerateResidentialProxy, Plans, Profile } from "./models";

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASEURL,
  withCredentials: true,
});

instance.interceptors.request.use(
  async function (config) {
    if (isServer()) {
      if (process.env.NODE_ENV === "development") {
        config.headers.Authorization = `Token ${process.env.TOKEN}`;
      }
      // see: https://github.com/vercel/next.js/issues/49757
      const cookies = await import("next/headers");
      const headers = await cookies.headers();
      config.headers.Cookie = headers.get("Cookie");
    } else {
      if (process.env.NODE_ENV === "development") {
        const token = clientStorage.getToken();
        if (token) {
          config.headers.Authorization = `Token ${token}`;
        }
      }
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  async function (response) {
    if (
      response.config.url === "/users/register/" ||
      response.config.url === "/users/login/"
    ) {
      if (response.status === 200 || response.status === 201) {
        const {
          data: { email, email_verified },
        } = response;
        if (!email_verified) {
          sessionStorage.setItem("email", email);
          location.replace("/activation");
        }
      }
    }

    if (response.status === 401) {
      localStorage.removeItem("token");
      location.replace("/login");
    }
    if (response.status === 500) {
      toast.error("Something unexpected happened");
    }
    return response;
  },
  async function (error) {
    error.appError = createAppErrorMessage(error);
    console.log(error?.response);

    console.log(error?.response?.status, isServer());
    if (isServer()) {
      if (error?.response?.status === 401) {
        const { redirect } = await import("next/navigation");
        return redirect("/sign-in" + "?session_expired=true");
      }
    }

    return Promise.reject(error);
  }
);

export async function regisetrUser(payload: any): Promise<any> {
  const { data } = await axios.post(
    `${process.env.NEXT_PUBLIC_API_BASEURL}/users/register/`,
    {
      email: payload?.email,
      password: payload?.password,
      captcha: payload?.captcha,
    },
    {
      withCredentials: true,
    }
  );
  return data;
}

export async function loginUser(payload: any): Promise<any> {
  const { data } = await axios.post(
    `${process.env.NEXT_PUBLIC_API_BASEURL}/users/login/`,
    {
      email: payload?.email,
      password: payload?.password,
      captcha: payload?.captcha,
    },
    {
      withCredentials: true,
    }
  );
  return data;
}

export async function getUserProfile(): Promise<Profile> {
  const { data } = await instance.get("/users/profile/");
  return data;
}

export async function getPlanDetails(plan_id?: string): Promise<any> {
  const { data } = await instance.get("/proxies/plan/details/", {
    params: { plan_id },
  });
  return data;
}

export async function getResiCountries(name: string): Promise<any> {
  const { data } = await instance.get(`/residential/${name}/countries/`);
  return data;
}

export async function getResiStates(
  name: string,
  country: string
): Promise<any> {
  const { data } = await instance.get(
    `/residential/${name}/states/?country=${country}`
  );
  return data;
}

export async function getResiCities(
  name: string,
  country: string,
  state: string
): Promise<any> {
  const { data } = await instance.get(
    `/residential/${name}/cities/?country=${country}&state=${state}`
  );
  return data;
}

export async function generateProxy(
  name: string,
  payload: GenerateResidentialProxy
): Promise<any> {
  const { data } = await instance.post(
    `/residential/${name}/generate/`,
    payload
  );
  return data;
}

export async function getPricings() {
  const { data } = await instance.get(`/residential/enterprise/plans/`);
  return data;
}

export async function getProductPlans(name: string): Promise<Plans> {
  const { data } = await instance.get(`/products/${name}/plans/`);
  return data;
}

export async function getUserPlans(name: string = "enterprise"): Promise<any> {
  const { data } = await instance.get(`/residential/${name}/plans/`);
  return data;
}

export async function getProxyUsageDetails(
  name: "residential" | "premium_residential" | "enterprise_residential",
  plan_id?: string
): Promise<any> {
  const { data } = await instance.get(`/residential/${name}/details/`, {
    params: { plan_id },
  });
  return data;
}

export async function getPlan(plan_id?: string): Promise<any> {
  const { data } = await instance.get(`/proxies/plan/details/`, {
    params: { plan_id },
  });
  return data;
}

export async function depositBalance(
  amount: number,
  method: number
): Promise<any> {
  return await instance.post("/payment/deposit/", { amount, method });
}

export async function getOrders({
  completed = true,
  productName,
  all = false,
}: {
  completed?: boolean;
  productName?: string;
  all?: boolean;
} = {}): Promise<Order[]> {
  let queryString = "";

  const params = new URLSearchParams();
  if (productName) {
    params.append("product", productName);
  }
  if (all) {
    params.append("all", all.toString());
  }
  params.append("completed", completed.toString());
  queryString = `?${params.toString()}`;

  const { data } = await instance.get(`/payment/orders/${queryString}`);
  return data;
}

export async function getTransactions(): Promise<any> {
  const { data } = await instance.get("/payment/orders/transactions/");
  return data;
}

export async function getProxiesByName(name: string): Promise<any> {
  const { data } = await instance.get(`/payment/orders/?product=${name}`);
  return data;
}

export async function getPackages(name: string): Promise<any> {
  const { data } = await instance.get(`/payment/purchase/packages/${name}/`);
  return data;
}

export async function getPurchaseSeries(): Promise<any> {
  const { data } = await instance.get(`/payment/orders/chart/`);
  return data;
}

export async function getPurchaseOverview(): Promise<any> {
  const { data } = await instance.get(`/payment/orders/purchase-details/`);
  return data;
}

export async function calculateDiscount(
  code: string,
  amount: number
): Promise<any> {
  const { data } = await instance.get(
    `/payment/coupon/${code}?amount=${amount}`
  );
  return data;
}

export async function purchaseRotatingProxy(
  name: string,
  quantity: number,
  method: number,
  coupon?: string,
  plan?: string
): Promise<any> {
  const { data } = await instance.post(`/payment/purchase/rotating/${name}/`, {
    quantity,
    method,
    coupon,
    plan,
  });
  return data;
}
