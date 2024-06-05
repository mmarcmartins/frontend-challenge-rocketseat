'use client'
import dynamic from 'next/dynamic';


import { CartProvider } from './CartProvider'
import { PropsWithChildren } from 'react'

const DynamicSnack = dynamic(() => import('@/components/Snackbar'), {
  ssr: false
})

export default function Providers({ children }: PropsWithChildren) {
  return (    
  <CartProvider>
    <DynamicSnack>
      {children}
    </DynamicSnack>
  </CartProvider>    
  )
}