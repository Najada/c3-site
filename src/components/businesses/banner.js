/** @jsx jsx */
import { jsx, Container, Box } from 'theme-ui';
import Image from 'components/image';

import CenterTextFeature from 'components/center-text-feature';


export default function Banner({bg1, bg2, subTitle, title, description, btnName, btnURL, btnName2, btnURL2}) {
    return (
        <section  style={{background: '#F9FBFF 0% 0% no-repeat padding-box; border: 1px solid #E3E3E3;z-index:1', position: 'relative'}}>
            <Container sx={styles.containerBox}>
                <Image src={bg1} sx={styles.containerBox.firstBg}></Image>
                <Image src={bg2} sx={styles.containerBox.secondBg}></Image>
                <Box sx={styles.contentBox}>
                    <CenterTextFeature
                        subTitle={subTitle}
                        title={title}
                        description={description}
                        btnName={btnName}
                        btnURL={btnURL}
                        btnName2={btnName2}
                        btnURL2={btnURL2}
                    />
                </Box>
            </Container>
        </section>
    );
}

const styles = {
    containerBox: {
        zIndex: 3,
        pt: ['140px', '145px', '155px', '220px', null, null, '160px', '160px'],
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: ['wrap', null, null, 'nowrap'],
        pb: ['140px', '145px', '155px', '220px', null, null, '160px', '160px'],
        firstBg: {
            position: 'absolute',
            top: '80px',
            left: 0,
            width: '561px',
            height: '521px'
        },
        secondBg: {
            position: 'absolute',
            bottom: '120px',
            right: '40px',
            width: '307px',
            height: '285px'
        }
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
};
