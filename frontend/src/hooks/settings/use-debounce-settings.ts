import { DEBOUNCE_DELAY } from '@/config/debounce.config';
import { TypeUpdateUserForm } from '@/types/user.types';
import debounce from 'lodash.debounce';
import { useCallback, useState } from 'react';
import { useProfile } from '../use-profile';

export const useDebounceSettings = () => {
  const { update, updateIsPending } = useProfile();

  const [previousData, setPreviousData] = useState<TypeUpdateUserForm>({});

  const _debouncedUpdate = useCallback(
    debounce(data => {
      update(data);
      setPreviousData({});
    }, DEBOUNCE_DELAY),
    [],
  );

  const debouncedUpdate = useCallback(
    (newData: TypeUpdateUserForm) => {
      newData = trimDataValues(newData);

      const actualData = {
        ...previousData,
        ...newData,
      };
      setPreviousData(actualData);
      _debouncedUpdate(actualData);
    },
    [previousData],
  );

  return { debouncedUpdate, updateIsPending };
};

function trimDataValues(data: TypeUpdateUserForm) {
  return Object.keys(data).reduce((result, key) => {
    result = {
      ...result,
      [key]: data[key as keyof TypeUpdateUserForm]?.trim(),
    };
    return result;
  }, {});
}
