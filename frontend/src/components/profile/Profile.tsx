import { ROUTES } from '@/config/routes.config';
import { useProfile } from '@/hooks/use-profile';
import { removeAccessTokenFromStorage } from '@/services/auth-token.service';
import { authService } from '@/services/auth.service';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { IoLogOutOutline } from 'react-icons/io5';
import { LuUserCircle } from 'react-icons/lu';
import { toast } from 'sonner';
import { Button } from '../button/Button';
import { Skeleton } from '../skeleton/Skeleton';

const Profile = () => {
    const { push } = useRouter();
  const queryClient = useQueryClient()
  
  const {mutate: logoutMutate, isPending: logoutIsPending} = useMutation({
      mutationKey: ['logout'],
      mutationFn: () => authService.logout(),
      onSuccess: () => {
        removeAccessTokenFromStorage()
        queryClient.invalidateQueries({ queryKey: ['get-profile']})
        toast.success('Successfully!')
        push(ROUTES.HOME)
      }
  })

  const {isLoading: profileIsLoading, isSuccess: profileIsSuccess} = useProfile()
  
  if (profileIsLoading)
    return (<Skeleton className='h-[2.2rem] w-[5rem]' />)

  if (profileIsSuccess)
    return (<>
        <Button size="sm">
          <LuUserCircle />
          Profile
        </Button>
        <Button size="cube" onClick={() => logoutMutate()} isLoading={logoutIsPending}>
          <IoLogOutOutline />
        </Button>
      </>)

  return (
    <Button size="sm" asChild>
        <Link href={ROUTES.AUTH}>Auth</Link>
    </Button>
  )
}

export default Profile
