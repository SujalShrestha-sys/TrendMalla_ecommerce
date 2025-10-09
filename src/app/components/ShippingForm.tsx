import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ShippingFormInputs, shippingFormSchema } from './types'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight } from 'lucide-react'
import { useRouter } from 'next/navigation'


const ShippingForm = ({ setShippingForm }: { setShippingForm: (data: ShippingFormInputs) => void }) => {

  const { register, handleSubmit, formState: { errors } } = useForm<ShippingFormInputs>({
    resolver: zodResolver(shippingFormSchema),
  });

  const router = useRouter();

  const handleShippingForm: SubmitHandler<ShippingFormInputs> = (data) => {
    setShippingForm(data)
    router.push("/cart?step=3", { scroll: false })
  }



  return <form onSubmit={handleSubmit(handleShippingForm)} className='flex flex-col gap-4'>
    {/**Name */}
    <div className='flex flex-col gap-1'>
      <label className='text-xs text-gray-500 font-medium' htmlFor="name">Name</label>
      <input className='border-b border-gray-200 py-2 outline-none text-shadow-amber-900 px-2' type="text" id='name' placeholder='John Doe' {...register("name")} />
      {errors.name && <p className='text-sm text-red-500'>{errors.name.message}</p>
      }
    </div>

    {/**Email */}
    <div className='flex flex-col gap-1'>
      <label className='text-xs text-gray-500 font-medium' htmlFor="email">Email</label>
      <input className='border-b border-gray-200 py-2 outline-none text-shadow-amber-900 px-2' type="email" id='email' placeholder='John Doe@gmail.com' {...register("email")} />
      {errors.email && <p className='text-sm text-red-500'>{errors.email.message}</p>
      }
    </div>

    {/** Phone No*/}
    <div className='flex flex-col gap-1'>
      <label className='text-xs text-gray-500 font-medium' htmlFor="phone">Phone</label>
      <input className='border-b border-gray-200 py-2 outline-none text-shadow-amber-900 px-2' type="text" id='phone' placeholder='+977-9800925222' {...register("phone")} />
      {errors.phone && <p className='text-sm text-red-500'>{errors.phone.message}</p>
      }
    </div>

    {/**Address */}
    <div className='flex flex-col gap-1'>
      <label className='text-xs text-gray-500 font-medium' htmlFor="address">Address</label>
      <input className='border-b border-gray-200 py-2 outline-none text-shadow-amber-900 px-2' type="text" id='address' placeholder='123 Main st, Hamro-line' {...register("address")} />
      {errors.address && <p className='text-sm text-red-500'>{errors.address.message}</p>
      }
    </div>

    {/**City */}
    <div className='flex flex-col gap-1'>
      <label className='text-xs text-gray-500 font-medium' htmlFor="city">City</label>
      <input className='border-b border-gray-200 py-2 outline-none text-shadow-amber-900 px-2' type="text" id='address' placeholder='Dharan, Sunsari' {...register("city")} />
      {errors.city && <p className='text-sm text-red-500'>{errors.city.message}</p>
      }
    </div>

    <button type='submit' className='w-full bg-gray-800 hover:bg-gray-900 transition-all duration-300 text-white p-2 rounded-lg cursor-pointer flex items-center justify-center'>
      continue
      <ArrowRight className='w-3 h-3' />
    </button>


  </form>
}


export default ShippingForm;
