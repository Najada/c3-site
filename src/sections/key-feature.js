/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Automated from 'assets/key-feature/Automated.svg';
import Easy from 'assets/key-feature/Easy.svg';
import Retire from 'assets/feature/Retire.svg';

const data = [
  {
    id: 1,
    imgSrc: Automated,
    altText: 'Automated',
    title: 'Automated',
    text:
      'All transactions are automatically reconciled when you bridge direct from the registry, meaning you won’t be waiting for us!.',
  },
  {
    id: 2,
    imgSrc: Easy,
    altText: 'Easy',
    title: 'Easy',
    text:
      'Bring your own credits over the bridge or purchase via our third party providers with crypto or credit card.',
  },
  {
    id: 3,
    imgSrc: Retire,
    altText: 'Retire',
    title: 'Retire',
    text:
      'You can permanently retire your credits on-chain to verify your carbon neutrality.',
  }
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: 'section.keyFeature' }} id="feature">
      <Container>
        <SectionHeader
          subtitle="Our App makes it easy, fast and efficient to source and retire carbon credits to fulfill your climate commitments."
          title="Features you’ll love"
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
