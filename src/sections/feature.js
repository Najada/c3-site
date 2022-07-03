/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
// import Performance from 'assets/feature/performance.svg';
// import Partnership from 'assets/feature/partnership.svg';
// import Subscription from 'assets/feature/subscription.svg';
// import Support from 'assets/feature/support.svg';

import Business from 'assets/key-feature/business.svg';
import DeFi from 'assets/key-feature/defi.svg';
import Web3 from 'assets/key-feature/web3.svg';
import Carbon from 'assets/key-feature/carbon.svg';

const data = [
  {
    id: 1,
    imgSrc: Business,
    altText: 'Business',
    title: 'Business',
    text:
      'Use our burn functionality to offset your carbon credits, or hold them on your balance sheet as part of your investment strategy.',
    btnUrl: '/businesses'
    },
  {
    id: 2,
    imgSrc: DeFi,
    altText: 'DeFi Natives',
    title: 'DeFi Natives',
    text:
      'Connect via Metamask or WalletConnect and get started immediately with low fees and quick transactions on the Polygon network.',
      btnUrl: '/defi-natives'
    },
  {
    id: 3,
    imgSrc: Web3,
    altText: 'Web3 Newcomers',
    title: 'Web3 Newcomers',
    text:
      'You can now get involved in the Web3 carbon markets in minutes, sign up with your email and check out with your credit or debit card.',
    btnUrl: '/web3-newcomers'
  },
  {
    id: 4,
    imgSrc: Carbon,
    altText: 'Carbon markets',
    title: 'Carbon markets',
    text:
      'Quickly bring your credits on-chain and leverage the liquidity, transparency, and interoperability of decentralized financial applications.',
    btnUrl: '/carbon-markets'
    },
];

export default function Feature() {
  return (
    <section sx={{ variant: 'section.feature' }}>
      <Container>
        <SectionHeader
          title="Built for"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
              btnUrl={item.btnUrl}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    // pt: [0, null, null, null, null, null, 2],
    // px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      '40px 0',
      null,
      '45px 30px',
      null,
      null,
      null,
      null,
      '60px 60px',
    ],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
    gridAutoRows: ['1fr', null, '1fr']
  },
};
