'use client';

import { SidebarProvider } from '@/components/ui/sidebar/Sidebar';
import { store } from '@/redux/store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { PropsWithChildren, useState } from 'react';
import { Provider } from 'react-redux';

const Providers = ({ children }: PropsWithChildren) => {
  const [queryClient] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
        },
      },
    }),
  );

  // const {queryClient} = useTanstackClient()

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <SidebarProvider>
          {children}
          <ReactQueryDevtools initialIsOpen={false} />
        </SidebarProvider>
      </QueryClientProvider>
    </Provider>
  );
};

export default Providers;
