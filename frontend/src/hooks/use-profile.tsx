import { userService } from '@/services/user.service';
import { TypeUpdateUserForm } from '@/types/user.types';
import { useMutation, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { toast } from 'sonner';

export function useProfile() {
  const {
    data: profile,
    isPending: profileIsPending,
    isSuccess: profileIsSuccess,
  } = useQuery({
    queryKey: ['get-profile'],
    queryFn: () => userService.getProfile(),
  });

  const { mutate: update, isPending: updateIsPending } = useMutation({
    mutationKey: ['update-profile'],
    mutationFn: (data: TypeUpdateUserForm) => userService.update(data),
    onSuccess: () => {
      toast.success('Successfully!');
    },
    onError: (error: AxiosError<any>) => {
      toast.error(JSON.stringify(error.response?.data));
    },
  });

  return {
    profile,
    profileIsPending,
    profileIsSuccess,
    update,
    updateIsPending,
  };
}
