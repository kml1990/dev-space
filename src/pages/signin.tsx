import Head from '@components/head/Head';
import SignInPage from '@components/signIn/SignInPage';
import type { GetServerSideProps, NextPage } from 'next';
import { getSession } from 'next-auth/react';

const SignIn: NextPage = () => {
  return (
    <>
      <Head title="Sign In" />
      <SignInPage />
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async context => {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
};

export default SignIn;
