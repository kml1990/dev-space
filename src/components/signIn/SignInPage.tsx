import React, { useEffect } from 'react';
import { useSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import SignInForm from './form/SignInForm';

import styles from './SignInPage.module.scss';

export type OnSignIn = () => void;

const SignInPage: React.FC = () => {
  // const { data: session } = useSession();
  // const router = useRouter();

  // useEffect(() => {
  //   if (session) {
  //     router.push('/');
  //   }
  // }, [session]);

  return (
    <div className={styles.signIn}>
      <section className={styles.form}>
        <SignInForm onSignIn={signIn} />
      </section>
    </div>
  );
};

export default SignInPage;
