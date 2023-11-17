import dynamic from 'next/dynamic'
import Image from 'next/image'
const ContactForm = dynamic(() => import('@/app/_components/ContactForm'))
export default function Home() {
  
  return (
    <main className='container mx-auto w-screen'>
        <div className='grid grid-cols-2 divide-y'>
            <div className=' text-center col-span-2'>
              <h1 className='text-[24px] font-bold'>Contact Us</h1>
              <span className='text-sm font-tint'>Please Fill form below</span>
            </div>
            <ContactForm />
        </div>
    </main>
  )
}
