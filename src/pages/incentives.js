import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import ServiceSection from '../sections/service-section';
import WorkFlow from '../sections/workflow';
import Banner from 'components/incentives/banner';

export default function IndentivesPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="C3" />
          <Banner> </Banner>
          <ServiceSection />
          <WorkFlow title="The future of carbon markets is here,<br/> are you ready for it?"/>
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
