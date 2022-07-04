/** @jsx jsx */
import { jsx, Heading, Image, Box, Link, Button, Text } from 'theme-ui';
import { Container } from 'theme-ui';


import Socials from 'assets/feature/socials.svg';

import PatternBG from 'assets/workflowBGPattern.svg';
import GIT from 'assets/git.svg';
import DISCORD from 'assets/discord.svg';

import { FaArrowRight, FaMediumM } from 'react-icons/fa';

export default function SocialMedia() {
    return (
        <>
            <section sx={styles.workflow}>
                <Container sx={styles.flex}>
                    <Box>
                        <Heading as="h2">
                            PENALTY OF INCETIVES<br /> FOR ALL YOUR ACTIONS
                        </Heading>
                        <Text as="p">
                            We use gauges to incentivise anyone to bring<br /> on carbon credits and hold them on chain.
                        </Text>
                        <Link href={'https://c3bridge.vercel.app/'} variant="default">
                            <Button variant="reverseTransaparent">SEE INCENTIVES <FaArrowRight /> </Button>
                        </Link>
                    </Box>
                    <Box>
                        <Heading as="h2">
                            ANY QUESTIONS?<br /> WE HAVE THE ANSWERS.
                        </Heading>
                        <Text as="p">
                            Crypto, carbon and DeFi is a complex combination,<br /> let us help you with some information.
                        </Text>
                        <Link href={'https://c3bridge.vercel.app/'} variant="default">
                            <Button variant="reverseTransaparent">READ OUR GITBOOK <FaArrowRight /> </Button>
                        </Link>
                    </Box>

                </Container>
            </section>
            <section>
                <Container sx={styles.container}>
                    <Image style={{width: '337px',
            height: '337px'}} src={Socials}></Image>
                    <Heading>
                        Join our community, read our FAQs or deep<br /> dive in our documents to learn more.
                    </Heading>
                    <Box  sx={styles.buttons}>
                        <Link href={'#'} variant="default">
                            <Button variant="whiteButton" aria-label='CHECK OUT OUR MEDIUM'>
                            <Image src={DISCORD}></Image>    JOIN OUR DISCORD  <FaArrowRight />
                            </Button>
                        </Link>
                        <Link href={'#'} variant="default">
                            <Button variant="whiteButton" aria-label='CHECK OUT OUR MEDIUM'>
                            <FaMediumM style={{fontSize: '26px', marginRight: '10px'}} />         CHECK OUT OUR MEDIUM  <FaArrowRight />
                            </Button> 
                        </Link>
                        <Link href={'https://docs.c3.app/'} variant="default">
                            <Button variant="whiteButton" aria-label='CHECK OUT OUR MEDIUM'>
                            <Image src={GIT}></Image>     READ OUR GITBOOK  <FaArrowRight />
                            </Button>
                        </Link>
                    </Box>
                </Container>
            </section>
        </>

    );
}

const styles = {
    flex: {
        display: 'flex',
        flexDirection: ['column', null, 'row'],
        justifyContent: ['start', null, 'space-between'],
        alignItems: 'center',
        img: {
            width: '78px',
            height: '103px',
            mb: '17px',
        },
        h2: {
            textAlign: 'left',
            font: 'normal normal bold 42px/53px Poppins',
            color: '#F9FBFF',
            mb: '17px',
            fontSize: ['22px', null, '42px']
        },
        svg: {
            width: '17px',
            height: '16px',
            ml: '10px'
        }
        ,
        p: {
            color: 'white',
            lineHeight: '1.3',
            mb: '20px'
        }

    },
    buttons: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: ['center', null, 'space-between'],
        flexDirection:['column', null, null, 'row'],
        a: {
            mt: ['20px', null, '40px'],
            mx: '10px',
            button : {
                whitespace: 'nowrap'
            },

        },
    },
    workflow: {
        backgroundImage: `url(${PatternBG})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left',
        backgroundSize: 'cover',
        position: 'relative',
        py: ['20px', null, '42px']
    },
    container: {
        zIndex: 3,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'column',
        flexWrap: ['wrap', null, null, 'nowrap'],
        pb: [0, 7, 0, null, 7],
        h2: {
            fontSize: ['22px', null, '42px'],
            textAlign: 'center',
            font: 'normal normal bold 42px/53px Poppins',
            color: '#131519'
        },
        img: {
            height: '19px',
            mr: '10px',
            width: 'auto',
            objectFit: 'cover'
        }
    },
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
