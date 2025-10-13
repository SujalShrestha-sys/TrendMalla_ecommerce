"use client"

import React from 'react'
import Link from 'next/link'
import { ShoppingCart } from 'lucide-react'
import useStore from '@/stores/cartStore'

const ShoppingCarticon = () => {

  const { cart, hasHydrated } = useStore();

  if (!hasHydrated) {
    return null
  }
  const totalCartQunatity = cart.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <Link href="/cart" className='relative'>
      <ShoppingCart className='w-4 h-4 text-gray-600' />
      <span className='absolute -top-3 -right-3 bg-amber-400 text-gray-600 rounded-full w-4 h-4 flex items-center justify-center font-medium'>{totalCartQunatity}</span>
    </Link>
  )
}

export default ShoppingCarticon
