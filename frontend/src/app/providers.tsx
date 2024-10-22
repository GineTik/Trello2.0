'use client'

import { SidebarProvider } from '@/components/sidebar/Sidebar'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { PropsWithChildren, useState } from 'react'

const Providers = ({children}: PropsWithChildren) => {
    const [client] = useState(
        new QueryClient({
            defaultOptions: {
                queries: {
                    refetchOnWindowFocus: false
                }
            }
        })
    )

  return (
    <QueryClientProvider client={client}>
      <SidebarProvider>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
      </SidebarProvider>
    </QueryClientProvider>
  )
}

export default Providers
