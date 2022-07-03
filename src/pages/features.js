import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from '../contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'components/features/banner';
import Feature from 'components/features/features';
import SocialMedia from 'components/features/social-media';
import WorkFlow from 'sections/workflow';

export default function FeaturesPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="C3" />
          <Banner></Banner>
          <Feature></Feature>
          {/* <WorkFlow title="GET STARTED IN MINUTES"/> */}
          <SocialMedia></SocialMedia>
          <WorkFlow title="The future of carbon markets is here,<br/> are you ready for it?"/>
        </Layout>

      </StickyProvider>
    </ThemeProvider>
  );
}
