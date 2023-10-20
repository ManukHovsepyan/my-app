export const sidebarOptions = [
  {
    title: "Main",
    id: 1,
    isVisible: true,
    children: [
      {
        title: "Home",
        id: 2,
        route: "/",
        isVisible: false,
        children: [
          {
            title: "Homeasdsadsa",
            id: 3,
            route: "/asdasd",
          },
          {
            title: "Homeasdsadsa",
            id: 4,
            route: "/asdasd",
          }
        ]
      },
      {
        title: "About Us",
        id: 5,
        route: "/about-us",
        isVisible: false,
        children: [
          {
            title: "absdasd",
            id: 6,
            route: "/asdasd",
          },
          {
            title: "Homeasdsadsa",
            id: 7,
            route: "/asdasd",
          }
        ]
      },
      {
        title: "Contact",
        id: 8,
        route: "/contact",
        isVisible: false,
      }
    ]
  },
  {
    title: "Products",
    id: 9,
    isVisible: true,
    children: [
      {
        title: "Fruits",
        id: 10,
        route: "/fruits",
        isVisible: false,
				children: [
					{
						title: "Frozen fruits",
            id: 11,
						route: "/frozen-fruits",
            children: [
              {
                title: "adkjaskljd",
                id: 12,
                route: "/asas",
              }
            ]
					},
					{
						title: "Fresh fruits",
            id: 13,
						route: "/frsh-fruits"
					}
				] 
      },
      {
        title: "Dry Fruits",
        id: 14,
        route: "/dry-fruits",
        isVisible: false,
      },
    ]
  },
];
