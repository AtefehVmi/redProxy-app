export const APP_ROUTES = {
  dashboard: "/",
  residentialProxy: "/proxy/residential",
  datacenterProxy: "/proxy/datacenter",
  mobileProxy: "/proxy/mobile",
  ispProxy: "/proxy/isp",
  setting: "/setting",
  transactions: "/transaction",
} as const;

/**
 * @constant {ReadonlyArray<Object>} APP_NAVIGATION - The navigation configuration for the application.
 *
 * This constant is used to render navigation items in the application's sidebar.
 * Each navigation item can either be a direct link or a group of sub-links (children).
 *
 * @property {string} title - The display title of the navigation item.
 * @property {string} [iconSrc] - The source path for the navigation item's icon. Present if the item is a direct link.
 * @property {string} [href] - The route to which the navigation item points. Present if the item is a direct link.
 * @property {Array<Object>} [children] - Sub-navigation items. Present if the navigation item has children.
 * @property {string} children[].title - The display title of the sub-navigation item.
 * @property {string} children[].iconSrc - The source path for the sub-navigation item's icon.
 * @property {string} children[].href - The route to which the sub-navigation item points.
 */

export interface NavModel {
  title: string;
  iconSrc?: string;
  href?: string;
  children?: Array<{
    title: string;
    iconSrc: string;
    href: string;
  }>;
}

export const APP_NAVIGATION = [
  {
    title: "Dashboard",
    iconSrc: "/icons/dashboard-small.svg",
    href: APP_ROUTES.dashboard,
  },
  {
    title: "PROXIES",
    children: [
      {
        title: "Residential Proxies",
        iconSrc: "/icons/resi-small-icon.svg",
        navbarIconSrc: "/icons/resi-icon.svg",
        href: APP_ROUTES.residentialProxy,
      },
      {
        title: "ISP Proxies",
        iconSrc: "/icons/isp-small-icon.svg",
        navbarIconSrc: "/icons/isp-icon.svg",
        href: APP_ROUTES.ispProxy,
      },
      {
        title: "Datacenter Proxies",
        iconSrc: "/icons/datacenter-small-icon.svg",
        navbarIconSrc: "/icons/datacenter-icon.svg",
        href: APP_ROUTES.datacenterProxy,
      },
      {
        title: "LTE/Mobile Proxies",
        iconSrc: "/icons/mobile-small-icon.svg",
        navbarIconSrc: "/icons/mobile-icon.svg",
        href: APP_ROUTES.mobileProxy,
      },
    ],
  },
  {
    title: "Account",
    children: [
      {
        title: "Settings",
        iconSrc: "/icons/settings-small-icon.svg",
        href: APP_ROUTES.setting,
      },
      {
        title: "Transactions",
        iconSrc: "/icons/transaction-small-icon.svg",
        href: APP_ROUTES.transactions,
      },
    ],
  },
] as Array<NavModel>;
