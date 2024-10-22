import { userService } from '@/services/user.service'
import { useQuery } from '@tanstack/react-query'

export function useProfile() { 
	const response = useQuery({
		queryKey: ['get-profile'],
		queryFn: () => userService.getProfile(),
	})

	return response
}
