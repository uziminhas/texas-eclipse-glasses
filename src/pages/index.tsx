import Image from 'next/image';
import type { GetStaticPropsContext } from 'next';

import {
  UserGroupIcon,
  SunIcon,
  PhotoIcon,
  FireIcon,
  UserIcon,
  BuildingLibraryIcon,
  CubeIcon,
  PaintBrushIcon,
  DocumentIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';

import { withTranslationProps } from '~/lib/props/with-translation-props';

import Layout from '~/core/ui/Layout';
import Container from '~/core/ui/Container';
import Footer from '~/components/Footer';
import SiteHeader from '~/components/SiteHeader';
import SubHeading from '~/core/ui/SubHeading';
import Button from '~/core/ui/Button';
import Heading from '~/core/ui/Heading';
import Hero from '~/core/ui/Hero';
import Divider from '~/core/ui/Divider';
import SlideUpTransition from '~/core/ui/SlideUpTransition';

const Index = () => {
  return (
    <Layout>
      <SiteHeader />

      <Container>
        <SlideUpTransition>
          <div
            className={
              'my-12 flex flex-col items-center md:flex-row lg:my-24' +
              ' mx-auto flex-1 justify-center'
            }
          >
            <div
              className={'flex w-full flex-1 flex-col items-center space-y-10'}
            >
              <Button href={'/pricing'} variant={'flat'} size={'small'} round>
                <span className={'flex items-center space-x-2 font-normal'}>
                  <span>View our glasses</span>

                  <ChevronRightIcon className={'h-3'} />
                </span>
              </Button>

              <HeroTitle>
                <span>Be a part of Texas history</span>

                <span
                  className={
                    'bg-gradient-to-b bg-clip-text text-transparent' +
                    ' from-blue-800 via-blue-300 to-red-500 leading-[1.2]'

                   
                    
                  }
                >
                  <b>by watching the solar eclipse of the century</b>
                </span>
              </HeroTitle>

              <div
                className={
                  'text-center text-gray-500 dark:text-gray-400' +
                  ' flex max-w-lg flex-col space-y-1 font-heading md:w-full'
                }
              >
                <span>Our eclipse glasses are proudly made in the USA </span>

                <span>
                  and are ISO 12312-2 compliant and CE certified.
                </span>

                <span>Don't risk buying unsafe glasses on Amazon.</span>
              </div>

              <div className={'flex items-center space-x-4'}>
                <Button round href={'/pricing'}>
                  <span className={'flex items-center space-x-2'}>
                    <span>Order today</span>
                    <ChevronRightIcon className={'h-3'} />
                  </span>
                </Button>


              </div>
            </div>
          </div>

          <div className={'flex justify-center py-12'}>
            <Image
              priority
              className={
                'hero-image-shadow rounded-2xl' +
                ' shadow-blue-400/30 dark:shadow-blue-500/30'
              }
              width={2688}
              height={1824}
              src={`/assets/images/glasses_outline.png`}
              alt={`App Image`}
            />
          </div>
        </SlideUpTransition>
      </Container>

      <Divider />

      <Container>
        <div
          className={
            'flex flex-col items-center justify-center space-y-24 py-12'
          }
        >
          <div
            className={
              'flex max-w-3xl flex-col items-center space-y-4 text-center'
            }
          >
            <div className={'flex flex-col items-center space-y-2'}>
              <div>
                <FireIcon className={'h-6 text-blue-500'} />
              </div>

              <b className={'text-blue-500'}>Why buy our eclipse glasses?</b>
            </div>

            <Hero>Made in the USA</Hero>

            <SubHeading>
              Safe for viewing all phases of the 2023 and 2024 solar eclipse
            </SubHeading>
          </div>

          <div>
            <div className={'grid gap-12 lg:grid-cols-3'}>
              <div className={'flex flex-col space-y-3 text-center'}>
                <FeatureIcon>
                  <SunIcon className={'h-6'} />
                </FeatureIcon>

                <Heading type={3}>Protection</Heading>

                <div className={'text-gray-500 dark:text-gray-400'}>
                  Filters out 100% of harmful ultra-violet rays and 99.999% of intense visible light
                </div>
              </div>

              <div className={'flex flex-col space-y-3 text-center'}>
                <FeatureIcon>
                  <PhotoIcon className={'h-6'} />
                </FeatureIcon>

                <Heading type={3}>Premium</Heading>

                <div className={'text-gray-500 dark:text-gray-400'}>
                  Our protective lenses provide clear and sharp solar images that are enjoyable to view
                </div>
              </div>

              <div className={'flex flex-col space-y-3 text-center'}>
                <FeatureIcon>
                  <UserGroupIcon className={'h-6'} />
                </FeatureIcon>

                <Heading type={3}>Trusted</Heading>

                <div className={'text-gray-500 dark:text-gray-400'}>
                  Our glasses are produced by American Paper Optics, the largest 3D glasses manufacturing company in the world
                </div>
              </div>

            </div>
          </div>
        </div>
      </Container>

      <Divider />

      <Container>
        <div className={'py-12'}>
          <div
            className={
              'flex flex-col justify-between rounded-lg lg:flex-row' +
              ' space-y-4 bg-primary-50 px-8 py-10 dark:bg-primary-500/5' +
              ' lg:space-y-0'
            }
          >
            <div className={'flex flex-col justify-between space-y-2'}>
              <Heading type={3}>
                <p className={'text-gray-800 dark:text-white'}>
                  Don't miss the event of the century.
                </p>
              </Heading>

              <Heading type={4}>
                <p className={'text-blue-500'}>Order your eclipse glasses, today.</p>
              </Heading>
            </div>

            <div className={'flex flex-col justify-end space-y-2'}>
              <div>
                <Button
                  className={'w-full lg:w-auto'}
                  size={'large'}
                  href={'/pricing'}
                >
                  Buy now
                </Button>
              </div>

              <div className="flex flex-col space-y-2 text-center">
                <span className={'text-xs'}>From $4.99</span>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Divider />

      <Footer />
    </Layout>
  );
};

export default Index;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  const { props } = await withTranslationProps({ locale });

  return {
    props,
  };
}

function HeroTitle({ children }: React.PropsWithChildren) {
  return (
    <h1
      className={
        'text-center text-4xl text-black-500 dark:text-white md:text-5xl' +
        ' flex flex-col space-y-1 font-heading font-medium xl:text-7xl'
      }
    >
      {children}
    </h1>
  );
}

function FeatureIcon(props: React.PropsWithChildren) {
  return (
    <div className={'flex justify-center'}>
      <div
        className={'rounded-xl bg-primary-500/10 p-4 dark:bg-primary-500/10'}
      >
        {props.children}
      </div>
    </div>
  );
}
