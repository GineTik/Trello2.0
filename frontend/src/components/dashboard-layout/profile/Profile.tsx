import { Button } from '@/components/ui/button/Button';
import { Skeleton } from '@/components/ui/skeleton/Skeleton';
import { ROUTES } from '@/config/routes.config';
import { useAuth } from '@/hooks/use-auth';
import { useProfile } from '@/hooks/use-profile';
import { useQueryClient } from '@tanstack/react-query';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { IoLogOutOutline } from 'react-icons/io5';
import { LuUserCircle } from 'react-icons/lu';

const Profile = () => {
  const { push } = useRouter();
  const queryClient = useQueryClient();
  const { isAuth, logout, logoutIsPending } = useAuth();
  const { profileIsPending } = useProfile();

  if (profileIsPending) return <Skeleton className='h-[2.2rem] w-[5rem]' />;

  if (isAuth)
    return (
      <>
        <Button size='sm'>
          <LuUserCircle />
          Profile
        </Button>
        <Button
          size='cube'
          onClick={() => logout()}
          isLoading={logoutIsPending}
        >
          <IoLogOutOutline />
        </Button>
      </>
    );

  return (
    <Button size='sm' asChild>
      <Link href={ROUTES.AUTH}>Auth</Link>
    </Button>
  );
};

export default Profile;
