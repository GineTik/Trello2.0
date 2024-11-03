'use client';

import { Button } from '@/components/ui/button/Button';
import { BaseInput } from '@/components/ui/form/inputs/base-input/BaseInput';
import Heading from '@/components/ui/heading/Heading';
import { useAuth } from '@/hooks/use-auth';
import { TypeAuthForm } from '@/types/user.types';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { GoFlame } from 'react-icons/go';
import { PiScanSmileyBold } from 'react-icons/pi';
import { RiBearSmileLine } from 'react-icons/ri';
import styles from './Auth.module.scss';

const Auth = () => {
  const { register, handleSubmit, reset, control } = useForm<TypeAuthForm>({
    mode: 'onChange',
  });

  const [isLoginForm, setIsLoginForm] = useState(false);
  const { auth, authIsPending } = useAuth({
    onSuccessAuth: () => {
      reset();
    },
  });

  const onSubmit: SubmitHandler<TypeAuthForm> = data => {
    auth({
      isLoginForm,
      ...data,
    });
  };

  return (
    <div className={styles.page}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <Heading>
          Authentication :<PiScanSmileyBold />:
        </Heading>
        <BaseInput placeholder='Email' {...register('email')} />
        <BaseInput
          placeholder='Password'
          type='password'
          {...register('password')}
        />
        <div className={styles.form__buttons}>
          <Button
            onClick={() => setIsLoginForm(true)}
            disabled={authIsPending}
            isLoading={authIsPending && isLoginForm}
          >
            <RiBearSmileLine />
            Login
          </Button>
          <Button
            variant='accent'
            onClick={() => setIsLoginForm(false)}
            disabled={authIsPending}
            isLoading={authIsPending && !isLoginForm}
          >
            <GoFlame />
            Registration
          </Button>
          <span>Email confirmation under development</span>
        </div>
      </form>
    </div>
  );
};

export default Auth;
