import Head from 'next/head';
import { GetStaticPropsContext } from 'next';
import Image from 'next/image';


import { withTranslationProps } from '~/lib/props/with-translation-props';

import configuration from '~/configuration';
import SiteHeader from '~/components/SiteHeader';

import Layout from '~/core/ui/Layout';
import Hero from '~/core/ui/Hero';
import Container from '~/core/ui/Container';
import SubHeading from '~/core/ui/SubHeading';
import Footer from '~/components/Footer';
import PricingTable from '~/components/PricingTable';

const Pricing = () => {
  return (
    <>
      <Layout>
        <Head>
          <title key="title">
            {`Pricing - ${configuration.site.siteName}`}
          </title>
        </Head>

        <SiteHeader />

        <Container>
          <div className={'flex flex-col space-y-2'}>
            <div className={'flex flex-col items-center'}>
              <Hero>Shop</Hero>
              <SubHeading>Eclipse glasses for all your needs</SubHeading>
            </div>
            <div className={'flex justify-center py-8'}>
              <Image
                priority
                className={
                  'rounded-2xl' +
                  ' shadow-blue-400/30 dark:shadow-blue-500/30'
                }
                width={2688}
                height={1824}
                src={`/assets/images/white-eclipse-glasses.png`}
                alt={`App Image`}
              />
            </div>

            <PricingTable />
          </div>
        </Container>

        <Footer />
      </Layout>
    </>
  );
};

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const { props } = await withTranslationProps({ locale });

  return {
    props,
  };
}

export default Pricing;
