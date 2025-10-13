"use client"
import React, { useState } from 'react'
import { ProductType } from './types'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Minus, Plus, ShoppingCart } from 'lucide-react';
import useStore from '@/stores/cartStore';
import { toast } from 'react-toastify';


const ProductInteraction = ({ product, selectedSize, selectedColor }: { product: ProductType; selectedSize: string; selectedColor: string }) => {

  const { addToCart } = useStore();
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [quantity, setQuantity] = useState(1);


  const handleTypeChange = (type: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(type, value);
    router.push(`${pathname}?${params.toString()}`, { scroll: false })
  }

  const handleQuantityChange = (type: "increment" | "decrement") => {

    if (type === "increment") {
      setQuantity(prev => prev + 1)
    } else {
      if (quantity > 1) {
        setQuantity((prev) => prev - 1)
      }
    }

  }

  const handleAddToCart = () => {
    addToCart({
      ...product, quantity, selectedColor, selectedSize
    })
    toast.success("Product added to cart")
  }

  return (
    <div className='flex flex-col gap-2 mt-4'>
      {/**Size */}
      <div className='flex flex-col gap-2 text-xs'>
        <span className='text-gray-500'>Size</span>

        <div className='flex items-center gap-2'>
          {product.sizes.map((size) => (
            <div onClick={() => handleTypeChange("size", size.toUpperCase())} className={`cursor-pointer border-1 p-[2px] rounded-full ${selectedSize === size ? "border-gray-400" : "border-gray-700"}`} key={size}>
              <div className={`flex rounded-full justify-center items-center tex-center  w-6 h-6 ${selectedSize === size ? "bg-slate-600 text-white" : "bg-white text-red-600"}`}>
                {size.toUpperCase()}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/** Color*/}
      <div className='flex flex-col gap-2 text-sm'>
        <span className='text-gray-500'>Color</span>

        <div className='flex items-center gap-2'>
          {product.colors.map((color) => (
            <div onClick={() => handleTypeChange("color", color)} className={`cursor-pointer border-1 rounded-full p-[2px] ${selectedColor === color ? "border-gray-300" : "border-white"}`} key={color}>
              <div className={`w-6 h-6 rounded-full`} style={{ backgroundColor: color }}>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/**Quantity */}
      <div className='flex flex-col gap-2 text-sm'>
        <span className='text-gray-500'>Quantity</span>
        <div className='flex items-center gap-2'>
          <button onClick={() => handleQuantityChange("decrement")} className='cursor-pointer border-1 border-gray-300 p-1'><Minus className='w-4 h-4' /></button>
          <span>{quantity}</span>

          <button onClick={() => handleQuantityChange("increment")} className='cursor-pointer border-1 border-gray-300 p-1'><Plus className='w-4 h-4' /></button>
        </div>
      </div>

      {/**Buttons */}
      <button onClick={() => handleAddToCart()} className='bg-gray-800 text-white px-4 py-2 rounded-md flex items-center justify-center gap-2 cursor-pointer font-medium text-sm'><Plus className='w-4 h-4' />Add to Cart</button>
      <button className='ring-1 ring-gray-400 shadow-lg text-gray-800 px-4 py-2 font-medium gap-2 rounded-md cursor-pointer flex  text-sm items-center justify-center'><ShoppingCart className='w-4 h-4' />Buy this Item</button>

    </div>
  )
}

export default ProductInteraction
