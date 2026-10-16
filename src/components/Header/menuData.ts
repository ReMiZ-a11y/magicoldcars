import { Menu } from "@/types/Menu";

export const menuData: Menu[] = [
  {
    id: 1,
    title: "Popularne",
    newTab: false,
    path: "/popular?sort=popular",
  },
  {
    id: 2,
    title: "Pojazdy",
    newTab: false,
    path: "/shop-with-sidebar",
  },
  {
    id: 3,
    title: "Kontakt",
    newTab: false,
    path: "/contact",
  },
  {
    id: 6,
    title: "Strony",
    newTab: false,
    path: "/",
    submenu: [
      {
        id: 61,
        title: "Sklep z paskiem bocznym",
        newTab: false,
        path: "/shop-with-sidebar",
      },
      {
        id: 62,
        title: "Sklep bez paska bocznego",
        newTab: false,
        path: "/shop-without-sidebar",
      },
      {
        id: 64,
        title: "Płatność",
        newTab: false,
        path: "/checkout",
      },
      {
        id: 65,
        title: "Koszyk",
        newTab: false,
        path: "/cart",
      },
      {
        id: 66,
        title: "Życzenia",
        newTab: false,
        path: "/wishlist",
      },
      {
        id: 67,
        title: "Logowanie",
        newTab: false,
        path: "/signin",
      },
      {
        id: 68,
        title: "Rejestracja",
        newTab: false,
        path: "/signup",
      },
      {
        id: 70,
        title: "Kontakt",
        newTab: false,
        path: "/contact",
      },
      {
        id: 62,
        title: "Error",
        newTab: false,
        path: "/error",
      },
      {
        id: 63,
        title: "Poprawny Email",
        newTab: false,
        path: "/mail-success",
      },
    ],
  },
  {
    id: 7,
    title: "Blogs",
    newTab: false,
    path: "/",
    submenu: [
      {
        id: 71,
        title: "Blog z paskiem bocznym",
        newTab: false,
        path: "/blogs/blog-grid-with-sidebar",
      },
      {
        id: 72,
        title: "Blog z siatką",
        newTab: false,
        path: "/blogs/blog-grid",
      },
      {
        id: 73,
        title: "Blog szczegóły z paskiem bocznym",
        newTab: false,
        path: "/blogs/blog-details-with-sidebar",
      },
      {
        id: 74,
        title: "Blog szczegóły",
        newTab: false,
        path: "/blogs/blog-details",
      },
    ],
  },
];
