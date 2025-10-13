import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { PaymentFormInputs, PaymentFormSchema, ShippingFormInputs } from './types'
import { zodResolver } from '@hookform/resolvers/zod'
import { ShoppingBag } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const PaymentForm = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<PaymentFormInputs>({
    resolver: zodResolver(PaymentFormSchema),
  });

  const router = useRouter();

  const handlePaymentForm: SubmitHandler<PaymentFormInputs> = (data) => {

  }

  return <form onSubmit={handleSubmit(handlePaymentForm)} className='flex flex-col gap-4'>
    {/**Card Holder */}
    <div className='flex flex-col gap-1'>
      <label className='text-xs text-gray-500 font-medium' htmlFor="cardHolder">Nam on Card</label>
      <input className='border-b border-gray-200 py-2 outline-none text-shadow-amber-900 px-2' type="text" id='name' placeholder='John Doe' {...register("cardHolder")} />
      {errors.cardHolder && <p className='text-sm text-red-500'>{errors.cardHolder.message}</p>
      }
    </div>

    {/**Card Number */}
    <div className='flex flex-col gap-1'>
      <label className='text-xs text-gray-500 font-medium' htmlFor="cardNumber">Card Number</label>
      <input className='border-b border-gray-200 py-2 outline-none text-shadow-amber-900 px-2' type="text" id='cardNumber' placeholder='123456789123' {...register("cardNumber")} />
      {errors.cardNumber && <p className='text-sm text-red-500'>{errors.cardNumber.message}</p>
      }
    </div>

    {/** Expiration Date*/}
    <div className='flex flex-col gap-1'>
      <label className='text-xs text-gray-500 font-medium' htmlFor="expirationDate">Expiration Date</label>
      <input className='border-b border-gray-200 py-2 outline-none text-shadow-amber-900 px-2' type="text" id='expirationDate' placeholder='01/32' {...register("expirationDate")} />
      {errors.expirationDate && <p className='text-sm text-red-500'>{errors.expirationDate.message}</p>
      }
    </div>

    {/**CVV */}
    <div className='flex flex-col gap-1'>
      <label className='text-xs text-gray-500 font-medium' htmlFor="cvv">CVV</label>
      <input className='border-b border-gray-200 py-2 outline-none text-shadow-amber-900 px-2' type="text" id='cvv' placeholder='123 Main st, Hamro-line' {...register("cvv")} />
      {errors.cvv && <p className='text-sm text-red-500'>{errors.cvv.message}</p>
      }
    </div>
    <div className='flex items-center gap-2 mt-4'>
      <Image src="/klarna.png" alt='klarna' width={50} height={50} className='rounded-md' />
      <Image src="/cards.png" alt='cards' width={50} height={50} className='rounded-md' />
      <Image src="/stripe.png" alt='stripe' width={50} height={50} className='rounded-md' />
    </div>

    <button type='submit' className='w-full bg-gray-800 hover:bg-gray-900 transition-all duration-300 text-white p-2 rounded-lg cursor-pointer flex items-center justify-center'>
      Checkout
      <ShoppingBag className='w-3 h-3' />
    </button>
  </form>
}


export default PaymentForm;
