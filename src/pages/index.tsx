import Head from '@components/head/Head';
import Navbar from '@components/navbar/Navbar';
import type { GetServerSideProps, NextPage } from 'next';
import { useSession, signIn, signOut, getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Home: NextPage = () => {
  // const { data: session } = useSession();
  // const router = useRouter();

  // useEffect(() => {
  //   if (!session) {
  //     router.push('/signin');
  //   }
  // }, []);

  return (
    <>
      <Head title="Home" />
      <div style={{ height: '100vh', width: '100%'}}>
        <Navbar onSignOut={signOut} />
      </div>
      {/* Signed in as {session?.user?.email} <br />
      <button onClick={() => signOut()}>Sign out</button> */}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context)

  if (!session) {
    return {
      redirect: {
        destination: '/signin',
        permanent: false,
      },
    }
  }

  return {
    props: { session }
  }
}

export default Home;
