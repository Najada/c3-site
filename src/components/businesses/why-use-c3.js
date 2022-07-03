/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import FeatureCardColumn from 'components/feature-card-column.js';
import Automated from 'assets/key-feature/automated.svg';
import Easy from 'assets/key-feature/Easy.svg';
import Retire from 'assets/feature/Retire.svg';
import SectionHeader from 'components/section-header';

const data = [
  {
    id: 1,
    imgSrc: Automated,
    altText: 'Fully automated',
    title: 'Fully automated',
    text:
      'With APIs enabled for the major carbon registries, you can bridge easily and quickly - 24/7.',
  },
  {
    id: 2,
    imgSrc: Easy,
    altText: 'Use your email or your wallet',
    title: 'Use your email or your wallet',
    text:
      'Whether you are new to web3 or a proficient user, this solution has everything you need to get started.',
  },
  {
    id: 3,
    imgSrc: Retire,
    altText: 'Retire',
    title: 'Retire',
    text:
      'You can permanently retire your credits on-chain to verify your carbon neutrality.',
  },
  {
    id: 4,
    imgSrc: Retire,
    altText: 'Pay with card or swap your crypto',
    title: 'Pay with card or swap your crypto',
    text:
      'Pay with your credit or debit card or swap your crypto directly on the site for your tokenised carbon credits. Coming soon!',
  },
  {
    id: 5,
    imgSrc: Retire,
    altText: 'Incentives for using C3',
    title: 'Incentives for using C3',
    text:
      'Actions such as bridging, staking, and providing liquidity are rewarded in tokens.',
  },
  {
    id: 6,
    imgSrc: Retire,
    altText: 'Governance',
    title: 'Governance',
    text:
      'C3 is a governance token, given you the power to be part of the decisions we make together going forward.',
  }
];

export default function WhyUseC3() {
  return (
    <section sx={{ variant: 'section.keyFeature' }} id="feature">
      <Container>
        <SectionHeader
        //   subtitle="Our App makes it easy, fast and efficient to source and retire carbon credits to fulfill your climate commitments."
          title="Why you should use C3"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '30px 0',
      null,
      '30px 30px',
      '30px 30px',
      '30px',
      '30px 30px',
      '30px 30px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(3,1fr)',
      null,
      'repeat(3,1fr)',
    ],
  },
};
