import { BaseInput } from '@/components/ui/form/inputs/base-input/BaseInput';
import { useDebounceSettings } from '@/hooks/settings/use-debounce-settings';
import { useProfile } from '@/hooks/use-profile';
import { TypeUpdateUserForm } from '@/types/user.types';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './SettingsUserForm.module.scss';

type SettingsUserFormProps = {};

export const SettingsUserForm = ({}: SettingsUserFormProps) => {
  const { profile } = useProfile();
  const { debouncedUpdate, updateIsPending } = useDebounceSettings();
  const { register, handleSubmit } = useForm({
    mode: 'onChange',
    defaultValues: {
      name: profile?.name,
      email: profile?.email,
      password: undefined,
    },
  });

  const onSubmit: SubmitHandler<TypeUpdateUserForm> = data => {
    debouncedUpdate(data);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <BaseInput
        placeholder='set name'
        defaultValue={profile?.name}
        onChange={e => debouncedUpdate({ name: e.target.value })}
      />
      <div className={styles.form__field}>
        <BaseInput
          placeholder='change email'
          defaultValue={profile?.email}
          onChange={e => debouncedUpdate({ email: e.target.value })}
        />
        <span className={styles.form__description}>
          Email confirmation under development
        </span>
      </div>
      <div className={styles.form__field}>
        <BaseInput
          placeholder='change password'
          onChange={e => debouncedUpdate({ password: e.target.value })}
        />
        <span className={styles.form__description}>
          Email confirmation under development
        </span>
      </div>
    </form>
  );
};
