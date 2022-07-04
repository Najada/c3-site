export default {
  widgets: [
    {
      id: 1,
      isList: false,
      description:
        'C3 is an automated way to interface with the Web3 carbon markets, to help us move towards a greener, fairer planet.',
    },
    {
      id: 2,
      isList: true,
      title: 'SOLUTIONS',
      elements: [ {
        label: 'Businesses',
        path: '/businesses'
      },
      {
        label: 'DeFi Natives',
        path: '/defi-natives'
      },
      {
        label: 'Web3 Newcomers',
        path: '/web3-newcomers'
      },
      {
        label: 'Carbon markets',
        path: '/carbon-markets'
      },
      ],
    },
    {
      id: 3,
      isList: true,
      title: 'INFO',
      elements: [
        {
          label: 'Features',
          path: '/features'
        },
        {
          label: 'Incentives',
          path: '/incentives'
        },
      ],
    },
    {
      id: 4,
      isList: true,
      title: 'LEARN',
      elements: [
        {
          label: 'Gitbook',
          path: 'https://docs.c3.app/'
        },
        {
          label: 'Medium',
          path: 'https://medium.com/@C3.app'
        },
      ],
    },
    {
      id: 5,
      isList: true,
      title: 'ADMIN',
      elements: [
        {
          label: 'Privacy Policy',
          path: '/privacy-policy'
        },
      ],
    },
  ],
};
