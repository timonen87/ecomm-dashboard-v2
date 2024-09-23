

export type Menu = {
    id: number;
    title: string;
    path?: string;
    newTab: boolean;
    submenu?: Menu[];
  };


const menuData: Menu[] = [
  {
    id: 1,
    title: "Главная",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Разработка",
    path: "/about",
    newTab: false,
  },

  {
    id: 39,
    title: "Docs",
    path: "/docs",
    newTab: false,
  },
  {
    id: 3,
    title: "Шаблоны",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Интернет-магазины",
        path: "/blog-details",
        newTab: false,
      },
      {
        id: 42,
        title: "Landing Page",
        path: "/contact",
        newTab: false,
      },
      {
        id: 43,
        title: "Dashboard",
        path: "/blog",
        newTab: false,
      },
      {
        id: 44,
        title: "Блоги",
        path: "/blog-sidebar",
        newTab: false,
      },


    ],
  },

  // {
  //   id: 4,
  //   title: "Примеры страниц",
  //   newTab: false,
  //   submenu: [
  //     {
  //       id: 41,
  //       title: "About Page",
  //       path: "/about",
  //       newTab: false,
  //     },
  //     {
  //       id: 42,
  //       title: "Contact Page",
  //       path: "/contact",
  //       newTab: false,
  //     },
  //     {
  //       id: 43,
  //       title: "Blog Grid Page",
  //       path: "/blog",
  //       newTab: false,
  //     },
  //     {
  //       id: 44,
  //       title: "Blog Sidebar Page",
  //       path: "/blog-sidebar",
  //       newTab: false,
  //     },
  //     {
  //       id: 45,
  //       title: "Blog Details Page",
  //       path: "/blog-details",
  //       newTab: false,
  //     },
  //     {
  //       id: 46,
  //       title: "Sign In Page",
  //       path: "/signin",
  //       newTab: false,
  //     },
  //     {
  //       id: 47,
  //       title: "Sign Up Page",
  //       path: "/signup",
  //       newTab: false,
  //     },
  //     {
  //       id: 48,
  //       title: "Error Page",
  //       path: "/error",
  //       newTab: false,
  //     },
  //   ],
  // },
];
export default menuData;
