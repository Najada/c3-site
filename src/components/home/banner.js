/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import TextFeature from 'components/text-feature';
import Image from 'components/image';

import BannerImg from 'assets/banner-image.svg';
import BannerShape from 'assets/banner-shape.svg';

const data = {
  subTitle: 'Core features',
  title: 'A <span class="text-primary">bridge</span> to a<br/> better planet',
  description:
    'C3 is an automated bridge. We enable you to interface with the blockchain-powered carbon markets, to support a fairer, greener planet.',
  btnName: 'LAUNCH APP',
  btnURL: 'https://c3bridge.vercel.app/',
};

export default function Banner() {
  return (
    <section >
      <Container sx={styles.containerBox}>
        <Box sx={styles.contentBox}>
            <Box sx={styles.shapeBox}>
            <Image src={BannerShape} alt="Shape" />
          </Box> 
          <TextFeature
            title={data.title}
            description={data.description}
            btnName={data.btnName}
            btnURL={data.btnURL}
          />
        </Box>
        <Box sx={styles.thumbnail}>
          <Image src={BannerImg} alt="Thumbnail" />
          
        </Box>
      </Container>
    </section>
  );
}

const styles = {
  containerBox: {
   // maxWidth: '1020px',
    pt: ['140px', '145px', '155px', '100px', null, null, '120px', '120px'],
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: ['wrap', null, null, 'nowrap'],
    pb: [0, 7, 0, null, 7],
  },
  contentBox: {
    flexShrink: 0,
    px: [0, null, '30px', 0],
    textAlign: ['center', null, null, 'left'],
    width: ['100%', '80%', null, 340, 400, 430, null, 485],
    pb: ['50px', '60px', null, 0],
    mx: ['auto', null, null, 0],
    '.description': {
      pr: [0, null, 6, 7, 6],
    },
  },
  thumbnail: {
    //maxWidth: '819px',
    display: 'inline-flex',
    position: 'relative',
    mr: 'auto',
    ml: ['auto', null, null, null, 7],
    '> img': {
      position: 'relative',
      zIndex: 1,
      height: [310, 'auto'],
    },
  },
  shapeBox: {
   // maxWidth: '1024px',
    top: '30px',
    left: '30px',
    position: 'absolute',
    overflow: 'hidden',
    bottom: 0,
    right: 0,
    zIndex: -1,
    display: ['none', 'inline-block', 'none', null, 'inline-block'],
  },
};
