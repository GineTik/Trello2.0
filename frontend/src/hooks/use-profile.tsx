import { profileActions } from '@/redux/slices/user/profile.slice';
import { RootState } from '@/redux/store';
import { userService } from '@/services/user.service';
import { TypeUpdateUserForm, TypeUser } from '@/types/user.types';
import { useMutation, useQuery } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'sonner';

export function useProfile() {
  const profile = useSelector((state: RootState) => state.profile.value);
  const dispatch = useDispatch();

  const {
    data: response,
    isPending: profileIsPending,
    isSuccess: profileIsSuccess,
  } = useQuery({
    queryKey: ['get-profile'],
    queryFn: () => userService.getProfile(),
    enabled: !profile,
  });

  const { mutate: update, isPending: updateIsPending } = useMutation({
    mutationKey: ['update-profile'],
    mutationFn: (data: TypeUpdateUserForm) => userService.update(data),
    onSuccess: (response: AxiosResponse<TypeUser>) => {
      dispatch(profileActions.update(response.data));
      toast.success('Successfully!');
    },
    onError: (error: AxiosError<any>) => {
      toast.error(JSON.stringify(error.response?.data));
    },
  });

  useEffect(() => {
    dispatch(profileActions.update(response?.data));
  }, [response]);

  return {
    profile,
    profileIsPending,
    profileIsSuccess,
    update,
    updateIsPending,
  };
}
