export const sidebarOptions = [
  {
    category: "Main",
    children: [
      {
        title: "Home",
        route: "/"
      },
      {
        title: "About Us",
        route: "/about-us"
      },
      {
        title: "Contact",
        route: "/contact"
      }
    ]
  },
  {
    category: "Products",
    children: [
      {
        title: "Fruits",
        route: "/fruits",
				children: [
					{
						title: "Frozen fruits",
						route: "/frozen-fruits",
            children: [
              {
                title: "adkjaskljd",
                route: "/asas"
              }
            ]
					},
					{
						title: "Fresh fruits",
						route: "/frsh-fruits"
					}
				] 
      },
      {
        title: "Dry Fruits",
        route: "/dry-fruits"
      },
    ]
  },
];
