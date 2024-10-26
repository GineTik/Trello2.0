import { ROUTES } from '@/config/routes.config';
import { authService } from '@/services/auth.service';
import { QueryCache, QueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export function useTanstackClient() {
  const router = useRouter();

  const [refreshingToken, setRefreshingToken] = useState(false);

  const refreshAuthToken = async () => {
    if (!refreshingToken) {
      try {
        setRefreshingToken(true);
        await authService.refresh();
      } catch {
        // If refreshing token fails, redirect back to the home page
        router.push(ROUTES.AUTH);
      } finally {
        setRefreshingToken(false);
      }
    }
  };

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 10000, // milliseconds
            retry: (failureCount, error) => {
              console.log('test');
              // Don't retry for certain error responses

              if (
                error?.response?.status === 400 ||
                error?.response?.status === 401
              ) {
                return false;
              }

              // Retry others just once
              return failureCount <= 1;
            },
          },
        },
        queryCache: new QueryCache({
          onError: error => {
            console.log('test2');
            if (
              error?.response?.status === 400 ||
              error?.response?.status === 401
            ) {
              refreshAuthToken();
            }
          },
        }),
      }),
  );

  return { queryClient };
}
