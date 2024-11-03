import { BaseInput } from '@/components/ui/form/inputs/base-input/BaseInput';
import { useDebounceSettings } from '@/hooks/settings/use-debounce-settings';
import { useProfile } from '@/hooks/use-profile';
import styles from './SettingsUserForm.module.scss';

type SettingsUserFormProps = {};

export const SettingsUserForm = ({}: SettingsUserFormProps) => {
  const { profile } = useProfile();
  const { debouncedUpdate } = useDebounceSettings();

  return (
    <form className={styles.form}>
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
