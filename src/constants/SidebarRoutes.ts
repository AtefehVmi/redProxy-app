export const APP_ROUTES = {
  dashboard: "/",
  transactions: "/general/transactions",
  tickets: "/general/tickets",
  specificTicket: (id: string | number) => `/general/tickets/${id}`,
  ticketsNew: "/general/tickets/new",
  residential: "/residential/rotating",
  residentialStatic: "/residential/static",
  datacenterStatic: "/datacenter/static",
  datacenterRotating: "/datacenter/rotating",
  mobileRotating: "/mobile/rotating",
  mobileLTE: "/mobile/lte",
  sneaker: "/sneaker",
  profile: "/profile",
  login: "/login",
  signUp: "/sign-up",
  accountActivation: "/activation",
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
export const APP_NAVIGATION = [
  {
    title: "Dashboard",
    iconSrc: "/icons/globe.svg",
    href: APP_ROUTES.dashboard,
  },
  {
    title: "General",
    children: [
      {
        title: "Transactions",
        iconSrc: "/nav/transactions.svg",
        href: APP_ROUTES.transactions,
      },
      {
        title: "Tickets",
        iconSrc: "/nav/tickets.svg",
        href: APP_ROUTES.tickets,
      },
    ],
  },
  {
    title: "Residential",
    children: [
      {
        title: "Rotating Residential",
        iconSrc: "/nav/residential.svg",
        href: APP_ROUTES.residential,
      },
      {
        title: "Static Residential",
        iconSrc: "/nav/static-residential.svg",
        href: APP_ROUTES.residentialStatic,
      },
    ],
  },
  {
    title: "Datacenter",
    children: [
      {
        title: "Rotating Datacenter",
        iconSrc: "/nav/datacenter.svg",
        href: APP_ROUTES.datacenterRotating,
      },
      {
        title: "Static Datacenter",
        iconSrc: "/nav/datacenter.svg",
        href: APP_ROUTES.datacenterStatic,
      },
    ],
  },
  {
    title: "Mobile",
    children: [
      {
        title: "Rotating Mobile",
        iconSrc: "/nav/mobile.svg",
        href: APP_ROUTES.mobileRotating,
      },
      {
        title: "LTE Mobile",
        iconSrc: "/nav/mobile.svg",
        href: APP_ROUTES.mobileLTE,
      },
    ],
  },
  // {
  // 	title: "Sneaker",
  // 	children: [
  // 		{
  // 			title: "Sneaker",
  // 			iconSrc: "/nav/sneaker.svg",
  // 			href: APP_ROUTES.sneaker,
  // 		},
  // 	],
  // },
] as Array<{
  title: string;
  iconSrc?: string;
  href?: string;
  children?: Array<{
    title: string;
    iconSrc: string;
    href: string;
  }>;
}>;
