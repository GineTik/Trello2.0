'use client'
import { useIsFetching, useIsMutating } from '@tanstack/react-query'
import { LuLoader } from 'react-icons/lu'

const GlobalLoader = () => {
    const isMutating = useIsMutating()
    const isFetching = useIsFetching()

  return isMutating || isFetching ? <div className='flex gap-1 items-center text-white/50'>
    <LuLoader className='animate-spin' />
    <span className='text-[.8rem]'>Loading...</span>
  </div> : <></>
}

export default GlobalLoader
