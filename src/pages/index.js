import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
// import Banner from '../sections/banner';
import Banner from 'components/home/banner';
import KeyFeature from '../sections/key-feature';
import ServiceSection from '../sections/service-section';
import Feature from '../sections/feature';
import WorkFlow from '../sections/workflow';

import BuyWithCard from 'components/home/buy-with-card';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="C3" />
          <Banner />
          <KeyFeature />
         
          <Feature />
          <WorkFlow title="GET STARTED IN MINUTES" showImage={true}/>
          <ServiceSection />
          <BuyWithCard />
          <WorkFlow title="The future of carbon markets is<br/> here, are you ready for it?" showImage={false}/>
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
