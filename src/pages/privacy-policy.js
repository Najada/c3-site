import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import PrivacyPolicy from 'components/privacy-policy';
import IMG1 from 'assets/bussines1.svg';
import IMG2 from 'assets/bussiness2.svg';
const data = {
    subTitle: 'MADE FOR BUSINESS',
    title: 'Achieve your<br/> sustainability targets.',
    description:
        'Use our burn functionalities to offset your on-chain carbon credits or hold them on your balance sheet as part of your investment strategy.',
    btnName: 'SEE INCENTIVES',
    btnURL: '/incentives',
    btnName2: 'LET’S GO',
    btnURL2: 'https://c3bridge.vercel.app/',
    bg1: IMG1,
    bg2: IMG2
};

export default function PrivacyPolicyPage() {
    return (
        <ThemeProvider theme={theme}>
            <StickyProvider>
                <Layout>
                    <SEO title="C3" />
                    <PrivacyPolicy/>
                </Layout>
            </StickyProvider>
        </ThemeProvider>
    );
}
