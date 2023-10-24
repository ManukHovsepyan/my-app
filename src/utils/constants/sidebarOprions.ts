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
            title: "123",
            id: 3,
            route: "/123",
          },
          {
            title: "234",
            id: 4,
            route: "/234",
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
            title: "456",
            id: 6,
            route: "/456",
          },
          {
            title: "789",
            id: 7,
            route: "/789",
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
        title: "All Products",
        id: 15,
        isVisible : false,
        route: "/all-products"
      },
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
