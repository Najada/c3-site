/** @jsx jsx */
import { FaArrowRight } from 'react-icons/fa';
import { jsx, Box, Heading, Text, Button, Link } from 'theme-ui';

export default function CenterTextFeature({
    subTitle, 
    title,
    description,
    description2,
    btnName,
    btnURL = '#',
    btnName2,
    btnURL2 = '#',
}) {
    return (
        <Box sx={styles.card}>
            <Box sx={styles.wrapper}>
            <Heading as="h4" dangerouslySetInnerHTML={{ __html: subTitle }}>
                </Heading>
                <Heading as="h2" dangerouslySetInnerHTML={{ __html: title }} sx={styles.wrapper.title}>
                </Heading>
            </Box>

            {description && (
                <Text as="p" className="description" sx={styles.description}>
                    {description}
                </Text>
            )}
             {description2 && (
                <Text as="p" className="description2" sx={styles.description2}>
                    {description2}
                </Text>
            )}

            <Box sx={styles.buttons}>
                {btnName && (
                    <Link href={btnURL} variant="default">
                        <Button variant="primary" aria-label={btnName}>
                            {btnName}
                        </Button>
                    </Link>
                )}
                {btnName2 && (
                    <Link href={btnURL2} variant="default">
                        <Button variant="whiteButton" aria-label={btnName2}>
                            {btnName2} <FaArrowRight></FaArrowRight> 
                        </Button>
                    </Link>
                )}
            </Box>
        </Box>
    );
}

const styles = {
    buttons: {
        gap: ['10px', '10px', null, '50px'],
        display: 'flex',

        
        justifyContent: ['center'],
        alignItems: ['center'],
        flexDirection: ['column', 'column', null, 'row'],
        button: {
            minWidth: '291px',
            m: 0,
            display: 'flex',

        
        justifyContent: ['center'],
        },
       
    },
    card: {
        display: 'flex',
        alignItems: 'flex-center',
        flexDirection: 'column',
        flexShrink: 0,
        a: {
            //m: ['0 auto', null, null, 0],
        },
    },
    wrapper: {
        h4: {
            textAlign: 'center',
            font: 'normal normal bold 22px/33px Poppins',
            color: '#03D06D',
            textTransform: 'uppercase'
        },
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
    description2: {
        fontSize: ['15px', 2, null, null, null, '16px', null, 3],
        lineHeight: '1.4',
        fontWeight: '300'
    },
    description: {
        fontSize: ['15px', 2, null, null, null, '30px', null, '30px'],
        fontWeight: 300,
        lineHeight: [1, null, null, 2, null, '1.1'],
        color: 'text_secondary',
        mb: '30px',
    },
};
