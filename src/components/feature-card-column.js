/** @jsx jsx */
import { jsx, Image, Box, Heading, Text,  } from 'theme-ui';

export default function FeatureCardColumn({
  src,
  altText = 'default alt text',
  title,
  text,
}) {
  return (
    <Box sx={styles.card}>
      <Image src={src} alt={altText} sx={styles.img} />

      <Box sx={styles.wrapper}>
        <Heading sx={styles.wrapper.title}>{title}</Heading>
        <Text sx={styles.wrapper.subTitle}>{text}</Text>
      </Box>
    </Box>
  );
}

const styles = {
  card: {
    background: '#FFFFFF 0% 0% no-repeat padding-box',
    boxShadow: '0px 3px 30px #4E69A529',
    border: '1px solid #EDF6FF',
    borderRadius: '5px',
    display: 'flex',
    alignItems: ['center', 'flex-center'],
    flexDirection: 'column',
    mb: -1,
    textAlign: ['center', null, 'center'],
    px: ['20px', null, '24px'],
    py: ['20px', null, '30px'],
  },
  img: {
    mx: ['auto', null, 0],
    ml: ['auto', null, '-13px'],
    mb: ['20px', null, '30px'],
    objectFit: 'cover',
    height: ['52px',null, null  ,'62px', null, '82px'],
    width: ['80px', null, null, '90px', null, '122px'],
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    title: {
      fontSize: '22px',
      color: 'heading_secondary',
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, 3],
    },
    subTitle: {
      fontSize: '16px',
      fontWeight: 300,
      lineHeight: '1.4',
    },
  },
};
