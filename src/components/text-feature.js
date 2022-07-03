/** @jsx jsx */
import { jsx, Box, Heading, Text, Button, Link } from 'theme-ui';
import { FaArrowRight } from 'react-icons/fa';

export default function TextFeature({
  title,
  description,
  btnName,
  btnURL = '#',
}) {
  return (
    <Box sx={styles.card}>
      <Box sx={styles.wrapper}>
        <Heading as="h2" dangerouslySetInnerHTML={{ __html: title }} sx={styles.wrapper.title}>
        </Heading>
      </Box>

      {description && (
        <Text as="p" className="description" sx={styles.description}>
          {description}
        </Text>
      )}

      {btnName && (
        <Link href={btnURL} variant="default">
          <Button variant="whiteButton" aria-label={btnName}>
            {btnName} <FaArrowRight></FaArrowRight>
          </Button>
        </Link>
      )}
    </Box>
  );
}

const styles = {
  card: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexShrink: 0,
    a: {
      m: ['0 auto', null, null, 0],
    },
  },
  wrapper: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    title: {
      fontSize: ['24px', null, '28px', '30px', '48px', '60px', null, '72px'],
      color: 'heading_secondary',
      lineHeight: [1.3, null, null, null, 1.2],
      fontWeight: '700',
      letterSpacing: '-.5px',
      mb: 5,
      span: {
        color: '#5ECC77'
      }
    },
  },
  description: {
    fontSize: ['15px', 2, null, null, null, '30px', null, 3],
    fontWeight: 300,
    lineHeight: [1, null, null, 2, null, '1.1'],
    color: 'text_secondary',
    mb: '30px',
  },
};
