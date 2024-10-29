import { ROUTES } from '@/config/routes.config';
import { authService } from '@/services/auth.service';
import { TypeAuthForm } from '@/types/user.types';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

type UseAuthOptions = {
  onSuccessAuth?: () => void;
};

type TypeAuthMutationOptions = TypeAuthForm & {
  isLoginForm: boolean;
};

export const useAuth = ({ onSuccessAuth }: UseAuthOptions) => {
  const { push } = useRouter();
  const queryClient = useQueryClient();

  const { mutate: auth, isPending: authIsPending } = useMutation({
    mutationKey: ['auth'],
    mutationFn: (data: TypeAuthMutationOptions) =>
      authService.main(data.isLoginForm ? 'login' : 'registration', data),
    onSuccess: () => {
      toast.success('Successfully!');
      push(ROUTES.DASHBOARD);
      queryClient.invalidateQueries({ queryKey: ['get-profile'] });
      onSuccessAuth && onSuccessAuth();
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

  return { auth, authIsPending };
};
