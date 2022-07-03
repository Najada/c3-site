/** @jsx jsx */
import { jsx, Box, Grid, Container, Image, Heading, Text } from 'theme-ui';
import { Link } from 'components/link';
import data from './footer.data';
import Logo from 'assets/logo.webp';

export default function Footer() {

  function footerSection(item) {

    if (item.isList) {
      return <Box
        key={`footer-widget--key${item.id}`}
        sx={styles.widgets.widgetItem}
      >
        <Box sx={styles.widgets.infoWrapper}>

          <Heading as="h3">{item.title}</Heading>
          <Box as="ul"
            sx={{
              listStyleType: 'none',
              margin: 0,
              padding: 0,
            }}>
            {item.elements.map((el, i) => (
              <Box as="li" key={i}>
                {el}
              </Box>

            ))}
          </Box>
        </Box>
      </Box>
    }
    return <Box
      key={`footer-widget--key${item.id}`}
      sx={styles.widgets.logo}
    >
      <Image src={Logo} alt='C3 Logo'/>
      <Box sx={styles.widgets.infoWrapper}>
        <Text as="p">{item.description}</Text>
      </Box>
    </Box>
  }

  return (
    <footer sx={styles.footer}>
      <Container>
        <Grid sx={styles.widgets}>

          {data.widgets.map((item) => (

            footerSection(item)

          ))}
        </Grid>
        <Box sx={styles.footer.footerBottomArea}>
          <Text sx={styles.footer.copyright}>
            © Crypto Carbon Company. All Rights Reserved.
          </Text>
        </Box>
      </Container>
    </footer>
  );
}

const styles = {
  footer: {
    background: '#EDF6FF 0% 0% no-repeat padding-box',
    footerBottomArea: {
      background: '#EDF6FF 0% 0% no-repeat padding-box',
      borderTop: '1px solid',
      borderTopColor: 'border_color',
      display: 'flex',
      p: 3,
      // pt: [7, null, 8],
      // pb: ['40px', null, '100px'],
      textAlign: 'center',
      flexDirection: 'column',
    },


    link: {
      fontSize: [1, '15px'],
      color: 'text',
      fontWeight: '400',
      mb: 2,
      cursor: 'pointer',
      transition: 'all 0.35s',
      display: 'block',
      textDecoration: 'none',
      lineHeight: [1.5, null, 1.8],
      px: [2, null, 4],
      ':hover': {
        color: 'primary',
      },
    },
    copyright: {
      fontSize: [1, '15px'],
      width: '100%',
    },
  },
  widgets: {
    logo: {
      img: {
        width: '58px',
        height: '57px'
      },
      p: {
        fontSize: '16px',
        lineHeight: '1.4',
      }
      
    },
    fontSize: '16px',
    lineHeight: '1.4',
    py: [8, null, 9],
    px: [4, 0, 3, null, 7, 10],
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: ['40px 0', null, '45px 30px', null, '60px 30px', '50px 90px'],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      'repeat(5,2fr)',
      '4fr 3fr 1fr 1fr 1fr'
    ],
    widgetItem: {
      textAlign: 'center',
    },
    infoWrapper: {
      mt: [2, 3, null, 2, 4],
      mb: -1,
      h3: {
        fontSize:'16px',
        color: 'heading_secondary',
        lineHeight: 1.4,
        fontWeight: 700,
        mb: [2, null, null, null, '15px'],
         textAlign: 'left'
      },
      li: {
        mb: '20px',
        fontWeight: '300',
        textAlign: 'left'
      },
      p: {
        fontSize: [1, '15px'],
        fontWeight: 400,
        lineHeight: 2,
      },
    },
  },
};
