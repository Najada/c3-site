/** @jsx jsx */
import { jsx, Image, Box, Heading, Text, Button, Link } from 'theme-ui';

export default function FeatureCard({
  src,
  altText = 'default alt text',
  title,
  text,
  btnUrl
}) {
  return (
    <Box sx={styles.card} style={{ backgroundImage: `url(${src})`, backgroundPosition: 'bottom right'}}>
      {/* <Box sx={styles.wrapper}>
        <Image src={src} alt={altText} sx={styles.img} />
      </Box> */}
      {/* <Box> */}
        <Heading sx={styles.title}>{title}</Heading>
        <Text sx={styles.subTitle}>{text}</Text>
        {btnUrl && (
          <Link href={btnUrl} variant="default">
            <Button variant="primary" aria-label={btnUrl}>
              LEARN MORE
            </Button>
          </Link>
        )}
      {/* </Box> */}

    </Box>
  );
}

const styles = {
  card: {
    minHeight: ['unset', null, '450px'],
    pt: ['20px', null, '80px'],
    pb: ['10px', null, '10px'],
    px: '15px',
    background: '#FFFFFF 0% 0% no-repeat padding-box',
    boxShadow: '0px 3px 30px #4E69A529',
    border: '1px solid #EDF6FF',
    borderRadius: '5px',
    paddingBottom: '79px',
    height: 'max-content',
    a: {
      zIndex: '999'
    },
    button: {
      ml: 0,
      mt: '30px',
      fontSize: '18px',
      zIndex: 999
    }
  },

  img: {
    zIndex: '0',
    width: ['70px', null, null, '80px', '190px', '222px'],
    height: 'auto',
    flexShrink: 0,
    bottom: '0',
    right: 0,
    // position: 'absolute',
    mr: [0],
    ml: 0,
  },
  title: {
    fontSize: ['30px', '30px'],
    color: 'heading_secondary',
    lineHeight: 1.4,
    fontWeight: 700,
    mb: ['10px', null, '15px'],
  },

  subTitle: {
    fontSize: ['18px', '18px', '22px'],
    fontWeight: 400,
    lineHeight: '1.4',
    width: '70%'
  },
  wrapper: {
    position: 'relative',
    // width: '100%',
    // display: 'flex',
    // flexDirection: 'row',
    // justifyContent: 'end',

    mt: '-132px',
    
  },
};
