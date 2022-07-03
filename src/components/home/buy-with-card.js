/** @jsx jsx */
import { jsx, Container, Box, Heading, Text, Link, Button } from 'theme-ui';
import Image from 'components/image';
import BannerShape from 'assets/circleBgPattern.svg';
import Aither from 'assets/aither.png';
import Cards from 'assets/cards.svg';

import List from 'components/list';
import { FaArrowRight } from 'react-icons/fa';

const data = {
    title: 'Buy with a <span>card</span> or <br/><span>swap</span> your crypto',
    features: [
        'Use your credit or debit card to buy carbon credits.',
        'Use Sushi Swap to swap your existing crypto.',
        'Get C3 ‘rewards’ for every tonne you bridge.'
    ],
    qualities: [
        '<span>Polygon</span> network, for fast, cheap and energy efficient transactions.',
        '<span>Aither</span>, one of Europe’s largest carbon project developers and credit traders.',
        '<span>KlimaDAO</span>, a carbon-backed algorithmic digital cryptocurrency which is the home of the on-chain carbon market.'
    ]
};

export default function BuyWithCard() {
    return (
        <>
         <section  sx={styles.section} >
            <Container sx={styles.containerBox}>
                <Box sx={styles.contentBox}>
                    <Box>
                        <Text as="span" className="description" sx={styles.description}>
                            COMING SOON
                        </Text>
                        <Heading as="h2" dangerouslySetInnerHTML={{ __html: data.title }} sx={styles.wrapper.title}>
                        </Heading>

                    </Box>
                    <List items={data.features}></List>
                </Box>
                <Image src={Cards} sx={styles.image}></Image>
            </Container>
        </section>
        <section  style={{ backgroundColor: '#F9FBFF'}}>
            <Container sx={styles.containerBoxT}>
                <Box sx={styles.contentBox}>
                    <Box>
                        
                        <Heading as="h2" dangerouslySetInnerHTML={{ __html: 'You’re in good company' }} sx={styles.wrapper.title}>
                        </Heading>
                        <Text as="span" className="description" sx={styles.description}>
                        {/* We’re working with the biggest and the best */}
                        </Text>
                        <List items={data.qualities}></List>
                    </Box>
                    {/* <List items={data.features}></List> */}
                    <Link href={'https://docs.c3.app/'} variant="default">
                    <Button variant="whiteButton" aria-label={'gitbook'}>
                        {'SEE OUR GITBOOK'} <FaArrowRight></FaArrowRight>
                    </Button>
                    </Link>
                </Box>
                <Image src={Aither} sx={styles.image}></Image>
            </Container>
        </section>
        </>
       
        
    );
}

const styles = {
    section: {
        py: ['30px', null, '100px'],
        backgroundColor: '#F9FBFF',
        backgroundSize: 'cover',
        backgroundRepear: 'no-repeat',
        backgroundImage: `url(${BannerShape})`,
    },
    wrapper: {

        title: {
            fontSize: ['24px', null, '30px', '30px', '30px', '42px', null, '52px'],
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
    image: {
        maxWidth: '449px',
        maxHeight: '446px',
        my: [5, null, 0],
    },
    containerBoxT: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: ['wrap', null, null, 'nowrap'],
        pt: [0, 7, 0, null, 7],
        pb: [0, 7, 0, null, 7],
    },
    containerBox: {
        // background: 'red',
        // maxWidth: '1020px',
        background: '#FFFFFF 0% 0% no-repeat padding-box',
        boxShadow: '0px 3px 30px #4E69A529',
        border: '1px solid #EDF6FF',
        borderRadius: '5px',
        py: ['20px', null, '70px'],
        px: ['20px', null, '70px'],

        pt: ['140px', '145px', '155px', '100px', null, null, '120px', '120px'],
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: ['wrap', null, null, 'nowrap'],
        pb: [0, 7, 0, null, 7],
    },
    contentBox: {

        
        // flexShrink: 0,
        // px: [0, null, '30px', 0],
        // textAlign: ['center', null, null, 'left'],
        // width: ['100%', '80%', null, 340, 400, 430, null, 485],
        // pb: ['50px', '60px', null, 0],
        // mx: ['auto', null, null, 0],
        // '.description': {
        //   pr: [0, null, 6, 7, 6],
        // },
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
    //   shapeBox: {
    //    // maxWidth: '1024px',
    //     top: '30px',
    //     left: '30px',
    //     position: 'absolute',
    //     overflow: 'hidden',
    //     bottom: 0,
    //     right: 0,
    //     zIndex: -1,
    //     display: ['none', 'inline-block', 'none', null, 'inline-block'],
    //   },
};
