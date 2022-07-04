import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import WorkFlow from '../sections/workflow';
import Banner from 'components/businesses/banner';
import WhyUseC3 from 'components/businesses/why-use-c3';
import IMG1 from 'assets/web2.svg';
import IMG2 from 'assets/web1.svg';
const data = {
  subTitle: 'DEFI NATIVES',
  title: 'A Web3 experience',
  description:
      'Connect via Metamask or WalletConnect and get started immediately with low fees on Polygon, an energy efficient and fast blockchain.',
  // description2: 'Actions such as bridging, staking, and providing liquidity are rewarded in these tokens. By locking them in escrow (into veC3), you are entitled to the protocol fees, as well as voting rights. The longer you lock, the greater amount of veC3 you get.',
  btnName: 'SEE INCENTIVES',
  btnURL: '/incentives',
  btnName2: 'LET’S GO',
  btnURL2: 'https://c3bridge.vercel.app/',
  bg1: IMG1,
  bg2: IMG2
};

export default function DefiNativesPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="C3" />
          <Banner  bg1={data.bg1} bg2={data.bg2} subTitle={data.subTitle} title={data.title} description={data.description}  btnName={data.btnName}  btnName2={data.btnName2}  btnURL={data.btnURL}  btnURL2={data.btnURL2}> </Banner>
          <WhyUseC3></WhyUseC3>
          <WorkFlow title="The future of carbon markets is here,<br/> are you ready for it?"/>
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
