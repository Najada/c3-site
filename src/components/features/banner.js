/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import TextFeature from 'components/text-feature';
import Image from 'components/image';

import BannerShape from 'assets/featuresBGShape.svg';
import CenterTextFeature from 'components/center-text-feature';

const data = {
    title: 'Simple and automated, swap and buy natively.',
    description:
        'C3 is your entry point to the carbon markets. It has been built with accessibility in mind and has in-built rewards for all users.',
    btnName: 'SEE INCENTIVES',
    btnURL: '/incentives',
    btnName2: 'LET’S GO',
    btnURL2: 'https://c3bridge.vercel.app/',
};

export default function Banner() {
    return (
        <section  style={{background: '#F9FBFF 0% 0% no-repeat padding-box', border: '1px solid #E3E3E3', zIndex:'1'}}>
            <Container sx={styles.containerBox}>
                <Box sx={styles.contentBox}>
                    <Box sx={styles.shapeBox}>
                        <Image src={BannerShape} alt="Shape" />
                    </Box>
                    <CenterTextFeature
                        title={data.title}
                        description={data.description}
                        btnName={data.btnName}
                        btnURL={data.btnURL}
                        btnName2={data.btnName2}
                        btnURL2={data.btnURL2}
                    />
                </Box>
            </Container>
        </section>
    );
}

const styles = {
    containerBox: {
        zIndex: 3,
        pt: ['140px', '145px', '155px', '220px', null, null, '160px', '120px'],
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: ['wrap', null, null, 'nowrap'],
        pb: 7,
    },
    contentBox: {
        flexShrink: 0,
        zIndex: 3,
        px: [0, null, '30px', 0],
        textAlign: ['center', null, null, 'center'],
        width: ['100%', '80%', null, '80%', '80%', '80%', null, '80%'],
        pb: ['50px', '60px', null, 0],
        mx: ['auto', null, null, 0],
        '.description': {
            pr: [0, null, 6, 7, 6],
        },
    },
    shapeBox: {
        top: '100px',
        left: '10%',
        position: 'absolute',
        overflow: 'hidden',
        bottom: 0,
        right: 0,
        zIndex: -1,
        display: ['none', 'inline-block', 'none', null, 'inline-block'],
    },
};
