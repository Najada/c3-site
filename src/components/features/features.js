/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';

import Automated from 'assets/feature/automated.svg';
import Card from 'assets/feature/card.svg';
import Retire from 'assets/feature/Retire.svg';
import Wallet from 'assets/feature/wallet.svg';
import FeatureCardColumn from 'components/feature-card-column';

const data = [
    {
        id: 1,
        imgSrc: Automated,
        altText: 'Fully automated',
        title: 'Fully automated',
        text:
            'Using APIs into three carbon registries, you can bridge easily, fast and 24/7.',
    },
    {
        id: 2,
        imgSrc: Retire,
        altText: 'Retire',
        title: 'Retire',
        text:
            'You can permanently retire your credits on chain to verify your carbon neutrality.',
    },
    {
        id: 3,
        imgSrc: Wallet,
        altText: 'Start with an email or use your wallet',
        title: 'Start with an email or use your wallet',
        text:
            'Whether you are new to Web3 or a proficient user, this solution has everything you need to get started. Coming soon!',
    },
    {
        id: 4,
        imgSrc: Card,
        altText: 'Pay with card or swap your crypto',
        title: 'Pay with card or swap your crypto',
        text:
            'Pay with your credit or debit card or swap your crypto directly on the site for your tokenised carbon credits. Coming soon!',
    },
];

// export default function Feature() {
//     return (
//         <section sx={{ variant: 'section.feature' }}>
//             <Container>
//                 <SectionHeader
//                     // slogan="Quality features"
//                     title="Built for"
//                 />

//                 <Grid sx={styles.grid}>
//                     {data.map((item) => (
//                         <FeatureCard
//                             key={item.id}
//                             src={item.imgSrc}
//                             alt={item.altText}
//                             title={item.title}
//                             text={item.text}
//                             btnUrl={item.btnUrl}
//                         />
//                     ))}
//                 </Grid>
//             </Container>
//         </section>
//     );
// }

export default function Feature() {
    return (
      <section sx={{ variant: 'section.keyFeature' }} id="feature">
        <Container>
          {/* <SectionHeader
            subtitle="Our App makes it easy, fast and efficient to source and retire carbon credits to fulfill your climate commitments."
            title="Features you’ll love"
          /> */}
  
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
        pt: [0, null, null, null, null, null, 2],
        px: [5, 6, 0, null, 7, 8, 7],
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
    },
};
