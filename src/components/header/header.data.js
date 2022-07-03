export default [
  {
    path: 'features',
    isSubMenu: false,
    label: 'Features',
  },
  {
    path: 'made-for',
    isSubMenu: true,
    label: 'Made for',
    elements: [
      {
        path: 'businesses',
        label: 'Businesses'
      },
      {
        path: 'defi-natives',
        label: 'Defi Natives'
      },
      {
        path: 'web3-newcomers',
        label: 'Web3 Newcomers'
      },
      {
        path: 'carbon-markets',
        label: 'Carbon Marketss'
      }
    ]
  },
  {
    path: 'incentives',
    isSubMenu: false,
    label: 'Incentives',
  },
  {
    path: 'about',
    isSubMenu: true,
    label: 'About',
    elements: [
      {
        path: 'https://docs.c3.app/',
        label: 'Documentation',
        isBlank: true
      },
      {
        path: 'https://medium.com/@C3.app',
        label: 'Medium',
        isBlank: true
      }
    ]
  },
];
