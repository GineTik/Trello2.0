import { ROUTES } from '@/config/routes.config';
import { profileActions } from '@/redux/slices/user/profile.slice';
import { RootState } from '@/redux/store';
import { removeAccessTokenFromStorage } from '@/services/auth-token.service';
import { authService } from '@/services/auth.service';
import { TypeAuthForm } from '@/types/user.types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'sonner';

type UseAuthOptions = {
  onSuccessAuth?: () => void;
};

type TypeAuthMutationOptions = TypeAuthForm & {
  isLoginForm: boolean;
};

export const useAuth = (options?: UseAuthOptions) => {
  const { push } = useRouter();
  const queryClient = useQueryClient();
  const profile = useSelector((state: RootState) => state.profile.value);
  const dispatch = useDispatch();

  const [isAuth, setIsAuth] = useState<Boolean>(false);

  useEffect(() => {
    setIsAuth(profile != null);
  }, [profile]);

  const { mutate: auth, isPending: authIsPending } = useMutation({
    mutationKey: ['auth'],
    mutationFn: (data: TypeAuthMutationOptions) =>
      authService.main(data.isLoginForm ? 'login' : 'registration', data),
    onSuccess: (data: AxiosResponse) => {
      dispatch(profileActions.update(data.data));
      push(ROUTES.TASKS);

      toast.success('Successfully!');
      //queryClient.invalidateQueries({ queryKey: ['get-profile'] });

      options?.onSuccessAuth && options.onSuccessAuth();
    },
    onError: (error: AxiosError<{ message: string[] }>) => {
      if (error.response?.status == 404) {
        toast.error('email or password incorrect');
        return;
      }

      toast.error(
        <ul>{error?.response?.data?.message?.map(m => <li>- {m}</li>)}</ul>,
      );
    },
  });

  const { mutate: logout, isPending: logoutIsPending } = useMutation({
    mutationKey: ['logout'],
    mutationFn: () => authService.logout(),
    onSuccess: () => {
      removeAccessTokenFromStorage();
      dispatch(profileActions.logout());
      push(ROUTES.HOME);

      //queryClient.invalidateQueries({ queryKey: ['get-profile'] });
      toast.success('Successfully!');
    },
  });

  return { auth, authIsPending, logout, logoutIsPending, isAuth };
};
