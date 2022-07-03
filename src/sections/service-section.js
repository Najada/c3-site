import React, { useEffect, useState } from 'react';
/** @jsx jsx */
import {
  jsx,
  Container,
  Box,
  Grid,
  Text,
  Heading,
  Button,
  Image,
  Flex,
  Link
} from 'theme-ui';
import ServiceThumb from 'assets/bridging.svg';
import Liquidity from 'assets/liquidity.svg';
import Staking from 'assets/staking.svg';

import Checkmark from 'assets/checkmark.svg';
import SectionHeader from 'components/section-header';


const data = {
  subTitle: 'C3 is given to those who tokenize carbon credits on chain.',
  title: 'Bridging',
  features: [

    'Bridging rewards are given in C3',

    'Use veC3 to boost rewards up to 100%s',

    'Vote to boost your carbon token up to 100%',

  ],
};

const liquidity = {
  subTitle: 'C3 is given to those who provide liquidity',
  title: 'Liquidity mining',
  features: [
    'Use veC3 to boost rewards up to 100%',

    'Vote to increase your pool rewards up to 50%',
  ],
};

const staking = {
  subTitle: 'C3 is given to those who hold assets in the carbon vaults.',
  title: 'Staking',
  features: [
    'Hold veC3S to boost rewards up to 250%',

    'Vote for your token to boost base rewards up to 50%',
  ],
};
export default function ServiceSection() {
  // modal popup video handler
  const [videoOpen, setVideoOpen] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setVideoOpen(true);
  };

  const getButtonMarkup = () => {
   return <Link sx={styles.button}  href={'/incentives'} variant="default">
    <Button variant="primary" aria-label={'incentives'}>
      LEARN MORE
    </Button>
  </Link>
  }

  useEffect(() => {
    data.features.forEach((text, i) => {
      // console.log(text, i)
    });
  });

  return (
    <div style={{ marginTop: '77px' }}>
      <SectionHeader
        title="Incentives you’ll love"
        isWhite={false}
      />
      <section sx={{ variant: 'section.services' }}>

        <Container sx={styles.containerBox}>

          <Box sx={styles.contentBox}>
            <Heading as="h3" sx={styles.title}>
              {data.title}
            </Heading>
            <Text as="p" className="description" sx={styles.description}>
              {data.subTitle}
            </Text>
            <Grid sx={styles.grid}>
              {/* <List items={data.features} childStyle={styles.listItem} /> */}
              <Box
                as="ul"
                sx={{
                  listStyleType: 'none',
                  margin: 0,
                  padding: 0,
                  // ...parentStyle,
                }}
              >  {data.features.map((text, i) => {
                return <Flex
                  as="li"
                  key={i}
                  sx={styles.listItem.li}
                >
                  <Image src={Checkmark} sx={styles.listItem.img}></Image>

                  {text}
                </Flex>
              })
                }

              </Box>
              {getButtonMarkup()}
            </Grid>
          </Box>
          <Box sx={styles.thumbnail}>
            <Image src={ServiceThumb} alt="Thumbnail" />
          </Box>
        </Container>
      </section>
      <section sx={{ variant: 'section.services' }}>

        <Container sx={styles.containerBox}>
          <Box sx={styles.thumbnail} >
            <Image src={Liquidity} alt="Thumbnail" />
          </Box>
          <Box sx={styles.contentBox}>
            <Heading as="h3" sx={styles.title}>
              {liquidity.title}
            </Heading>
            <Text as="p" className="description" sx={styles.description}>
              {liquidity.subTitle}
            </Text>
            <Grid sx={styles.grid}>
              <Box
                as="ul"
                sx={{
                  listStyleType: 'none',
                  margin: 0,
                  padding: 0,
                  // ...parentStyle,
                }}
              >  {liquidity.features.map((text, i) => {
                return <Flex
                  as="li"
                  key={i}
                  sx={styles.listItem.li}
                >
                  <Image style={{ mr: '0' }} src={Checkmark} sx={styles.listItem.img}></Image>

                  {text}
                </Flex>
              })
                }

              </Box>
             {getButtonMarkup()}
            </Grid>
          </Box>

        </Container>
      </section>
      <section sx={{ variant: 'section.services' }}>

        <Container sx={styles.containerBox}>

          <Box sx={styles.contentBox}>
            <Heading as="h3" sx={styles.title}>
              {staking.title}
            </Heading>
            <Text as="p" className="description" sx={styles.description}>
              {staking.subTitle}
            </Text>
            <Grid sx={styles.grid}>
              <Box
                as="ul"
                sx={{
                  listStyleType: 'none',
                  margin: 0,
                  padding: 0,
                  // ...parentStyle,
                }}
              >  {staking.features.map((text, i) => {
                return <Flex
                  as="li"
                  key={i}
                  sx={styles.listItem.li}
                >
                  <Image src={Checkmark} sx={styles.listItem.img}></Image>

                  {text}
                </Flex>
              })
                }

              </Box>
              {getButtonMarkup()}
            </Grid>
          </Box>
          <Box sx={styles.thumbnail}>
            <Image src={Staking} alt="Thumbnail" />
          </Box>
        </Container>
      </section>
    </div>
  );
}

const styles = {
  title: {
    fontSize: '30px',
    color: "heading",
    fontWeight: "bold",
    mb: '10px'
  },
  description: {
    fontSize: '22px',
    color: "heading",
    fontWeight: "300",
    lineHeight: '1.4',
    mb: '20px'
  },
  listItem: {
    li: {
      display: 'flex',
      justifyContent: 'start',
      alignItems: 'center',
      font: 'normal normal 700 16px/23px Poppins',
      fontSize: '16px',
      mb: '30px',
      flexDirection: 'row'
    },
    img: {
      width: '20px',
      height: '20px',
      marginRight: '12px'

    },
  },
  containerBox: {
    maxWidth: 'unset',
    display: 'flex',
    alignItems: ['flex-start', null, null, 'center'],
    justifyContent: ['flex-between', null, null, 'space-between'],
    flexDirection: ['column', null, null, 'row'],
    // pb: 0,
    // p: 0
  },
  thumbnail: {
    // mr: [0, null, "-150px"],
    ml: 0,
    position: 'relative',
    '> img': {
      position: 'relative',
      maxHeight: '450px',
      zIndex: 1,
    },
  },

  contentBox: {
    width: ['100%', null, null, 315, 390, 450, null, 500],
    flexShrink: 0,
    mb: [7, null, 60, 0],
    textAlign: ['left', null, null, 'left'],
  },
  button: {
    button:
    {
      // p:0,
      m:0
    }
  
  }
};
