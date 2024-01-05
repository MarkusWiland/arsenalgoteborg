import { getServerSession } from 'next-auth'
import Image from 'next/image'
import { authOptions } from './utils/auth'
import prisma from './utils/db'
import Form from './components/Form'

export default async function Home() {
  const session = await getServerSession(authOptions)
  return (
  <>
    <section className="relative  z-10 full-width h-screen bg-red-300">
     
    <div className="relative h-full full-width -z-10">
          <Image
            src="/emirates.jpg"
            className="full-width"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute full-width inset-0 bg-black opacity-60"></div>
        </div>
        <div className="absolute w-full h-full flex items-center flex-col
        justify-center">
          <h1 className="uppercase text-4xl font-bold text-white">
            Arsenal Göteborg
          </h1>
          <p className="text-white">
            Välkommen till Arsenal Göteborg officiella hemsida
          </p>
          
        </div>
        <div className="absolute breakout -bottom-[11rem] flex gap-4">
  <div className="flex flex-col items-center bg-white p-6 border-2 border-gray-200  shadow-sm">
    <div className="flex items-center justify-around  w-full pb-6">
      <h1 className="text-4xl font-semithin">1</h1>
      <span className="text-4xl text-gray-400">:</span>
      <h1 className="text-4xl font-semithin">1</h1>
    </div>
    <div className="flex items-center justify-center gap-6 w-full">
      <div className="flex items-center flex-col">
        <Image src="/arsenallogo.jpeg" width={50} height={50} alt="Markus Wiland" />
        <h2 className="uppercase font-bold text-sm mt-2">Arsenal FC</h2>
      </div>
      <span className="text-sm text-gray-400">( 2 - 0 )</span>
      <div className="flex items-center flex-col">
        <Image src="/barcelona.png" width={50} height={50} alt="Markus Wiland"  />
        <h2 className="uppercase font-bold text-sm mt-2">Barcelona FC</h2>
      </div>
    </div>
    <div className="flex items-center pt-6">
      <h1 className="text-sm italic font-bold">Emirates Stadium</h1>
    </div>
    <div className="flex items-center gap-2 pt-6">
      <Image src="/emirates.jpg" width={50} height={50} alt="Markus Wiland" className="rounded-md border-2 border-gray-600" />
      <div className="flex flex-col">
        <h2 className="font-semibold text-sm">Champions League, Matchdag 6</h2>
        <p className="text-gray-500 text-sm">Onsdag 8 December 2021, 21:00</p>
      </div>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">Läs</button>
    </div>
  </div>

  <div className="bg-white p-6 border-2 border-gray-200  shadow-sm">
  <div className="grid grid-cols-1 gap-6">
    <div className="flex gap-4 items-center">
      <div className="flex gap-2 items-center">
      <h2 className="text-sm font-semibold">AFC</h2>
        <Image src="/arsenallogo.jpeg" width={20} height={20} alt="Markus Wiland" />
      
      </div>
      <div className="flex gap-2 text-green-700 text-sm">
        <span>4</span>
        <span>:</span>
        <span>0</span>
      </div>
      <div className="flex gap-2 items-center">
      <Image src="/barcelona.png" width={20} height={20} alt="Markus Wiland" />
        <h2 className="text-sm font-semibold">AFC</h2>
      </div>
    </div>
    <div className="flex gap-4 items-center">
      <div className="flex gap-2 items-center">
      <h2 className="text-sm font-semibold">AFC</h2>
      <Image src="/arsenallogo.jpeg" width={20} height={20} alt="Markus Wiland" />
      
      </div>
      <div className="flex gap-2 text-red-700 text-sm">
        <span>4</span>
        <span>:</span>
        <span>0</span>
      </div>
      <div className="flex gap-2 items-center">
      <Image src="/barcelona.png" width={20} height={20} alt="Markus Wiland" />
        <h2 className="text-sm font-semibold">AFC</h2>
      </div>
    </div>
    <div className="flex gap-4 items-center">
      <div className="flex gap-2 items-center">
      <h2 className="text-sm font-semibold">AFC</h2>
      <Image src="/barcelona.png" width={20} height={20} alt="Markus Wiland" />
      
      </div>
      <div className="flex gap-2 text-red-700 text-sm">
        <span>4</span>
        <span>:</span>
        <span>0</span>
      </div>
      <div className="flex gap-2 items-center">
        <Image src="/arsenallogo.jpeg" width={20} height={20} alt="Markus Wiland" />
        <h2 className="text-sm font-semibold">AFC</h2>
      </div>
    </div>
    <div className="flex gap-4 items-center">
      <div className="flex gap-2 items-center">
      <h2 className="text-sm font-semibold">AFC</h2>
      <Image src="/barcelona.png" width={20} height={20} alt="Markus Wiland" />
      
      </div>
      <div className="flex gap-2 text-red-700 text-sm">
        <span>4</span>
        <span>:</span>
        <span>0</span>
      </div>
      <div className="flex gap-2 items-center">
      <Image src="/arsenallogo.jpeg" width={20} height={20} alt="Markus Wiland" />
        <h2 className="text-sm font-semibold">AFC</h2>
      </div>
    </div>
    <div className="flex gap-4 items-center">
      <div className="flex gap-2 items-center">
      <h2 className="text-sm font-semibold">AFC</h2>
      <Image src="/arsenallogo.jpeg" width={20} height={20} alt="Markus Wiland" />
      
      </div>
      <div className="flex gap-2 text-red-700 text-sm">
        <span>4</span>
        <span>:</span>
        <span>0</span>
      </div>
      <div className="flex gap-2 items-center">
      <Image src="/barcelona.png" width={20} height={20} alt="Markus Wiland" />
        <h2 className="text-sm font-semibold">AFC</h2>
      </div>
    </div>
    <div className="flex justify-between">
      <h2 className="font-bold">Senaste matcher</h2>
      <button>mer</button>
    </div>
  </div>
</div>
</div>

    </section>
    <section className="min-h-[30vh]  breakout flex items-start mt-10 justify-around z-70">
    <div className="flex items-center flex-col">

   <div className="">
   <h1 className="text-1xl font-bold text-gray-400 uppercase mb-4">Partners</h1>
      <div className="flex gap-2">
        <Image src="/cheers.png" width={100} height={100} alt="Markus Wiland" className="rounded-md"/>
       
      </div>
   </div>
    </div>
    </section>
    <section className="relative py-10 full-width bg-[rgba(247,247,247)] border-[rgba(247,247,247)] ">
        <h1 className="absolute -top-5 text-4xl font-bold">Nyheter</h1>
       <div className="flex justify-end items-center pb-10 mr-5 gap-4">
       <button>Mer nyheter</button> <div className="w-8 h-8 border border-gray-500"/>
       </div>
        <div className="grid grid-cols-3 gap-4">

          <div className="transition ease-in-out delay-50 bg-white p-6 max-w-[300px] w-full flex flex-col gap-4 hover:border-t-4 hover:border-red-600 hover:scale-105">
          <div className="flex w-full gap-4">
        <Image src="/emirates.jpg" width={50} height={50} alt="Markus Wiland" className="rounded-md"/>
        <div className="flex flex-col text-sm text-gray-400">
          <time>2021-10-10</time>
          <span>Markus Wiland</span>
        </div>
      </div>
      <div className="flex flex-col gap-4">

      <h1 className="font-bold text-2xl">Arsenal vann över Liverpool med 3-0</h1>
      <p className="text-sm text-gray-400 line-clamp-3	">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptas, natus, voluptatem, quos quae voluptatum quibusdam
        necessitatibus fugiat quas doloribus quis. Quisquam voluptas, natus,
        voluptatem, quos quae voluptatum quibusdam necessitatibus fugiat quas
        doloribus quis.
      </p>
      <div className="flex justify-between items-center text-sm">
      <button className="transition ease-in-out delay-50 border bg-red-400 text-white py-2 rounded-md px-2 hover:bg-red-600 hover:transition-colors">Läs mer</button>
      <button className="border bg-red-400 text-white py-2 rounded-md px-2 hover:bg-red-600" disabled={false}>Lyssna på podcast</button>
      </div>
      </div>
     
          </div>

          <div className="transition ease-in-out delay-50 bg-white p-6 max-w-[300px] w-full flex flex-col gap-4 hover:border-t-4 hover:border-red-600 hover:scale-105">
          <div className="flex w-full gap-4">
        <Image src="/emirates.jpg" width={50} height={50} alt="Markus Wiland" className="rounded-md"/>
        <div className="flex flex-col text-sm text-gray-400">
          <time>2021-10-10</time>
          <span>Markus Wiland</span>
        </div>
      </div>
      <div className="flex flex-col gap-4">

      <h1 className="font-bold text-2xl">Arsenal vann över Liverpool med 3-0</h1>
      <p className="text-sm text-gray-400 line-clamp-3	">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptas, natus, voluptatem, quos quae voluptatum quibusdam
        necessitatibus fugiat quas doloribus quis. Quisquam voluptas, natus,
        voluptatem, quos quae voluptatum quibusdam necessitatibus fugiat quas
        doloribus quis.
      </p>
      <div className="flex justify-between items-center text-sm">
      <button className="transition ease-in-out delay-50 border bg-red-400 text-white py-2 rounded-md px-2 hover:bg-red-600 hover:transition-colors">Läs mer</button>
      <button className="border bg-red-400 text-white py-2 rounded-md px-2 hover:bg-red-600" disabled={false}>Lyssna på podcast</button>
      </div>
      </div>
     
          </div>

          <div className="transition ease-in-out delay-50 bg-white p-6 max-w-[300px] w-full flex flex-col gap-4 hover:border-t-4 hover:border-red-600 hover:scale-105">
          <div className="flex w-full gap-4">
        <Image src="/emirates.jpg" width={50} height={50} alt="Markus Wiland" className="rounded-md"/>
        <div className="flex flex-col text-sm text-gray-400">
          <time>2021-10-10</time>
          <span>Markus Wiland</span>
        </div>
      </div>
      <div className="flex flex-col gap-4">

      <h1 className="font-bold text-2xl">Arsenal vann över Liverpool med 3-0</h1>
      <p className="text-sm text-gray-400 line-clamp-3	">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        voluptas, natus, voluptatem, quos quae voluptatum quibusdam
        necessitatibus fugiat quas doloribus quis. Quisquam voluptas, natus,
        voluptatem, quos quae voluptatum quibusdam necessitatibus fugiat quas
        doloribus quis.
      </p>
      <div className="flex justify-between items-center text-sm">
      <button className="transition ease-in-out delay-50 border bg-red-400 text-white py-2 rounded-md px-2 hover:bg-red-600 hover:transition-colors">Läs mer</button>
      <button className="border bg-red-400 text-white py-2 rounded-md px-2 hover:bg-red-600" disabled={false}>Lyssna på podcast</button>
      </div>
      </div>
     
          </div>

        </div>
      </section>
      <section className="my-10 relative py-6 full-width bg-[rgba(247,247,247)] border-[rgba(247,247,247)]">
        <h1 className="absolute -top-5 text-4xl font-bold">Nästa Match</h1>
        <div className='flex gap-2 items-center text-red-700'>
          <span>3 DAGAR</span>
          <span>|</span>
          <span>12 TIMMAR</span>
          <span>|</span>
          <span>32 MINUTER</span>
        </div>
        <div className='flex justify-between items-center pt-8'>
          <span>-</span>
          <div className='flex flex-col items-center gap-4'>
            <Image src="/arsenallogo.jpeg" width={100} height={100} alt="Markus Wiland" className="rounded-md"/>
            <span className="text-1xl font-bold">Arsenal FC</span>
          </div>
          <div className='flex flex-col items-center gap-8'>
          <Image src="/emirates.jpg" width={50} height={50} alt="Markus Wiland" className="rounded-md"/>
          <div className='flex justify-around w-full'>
            <span>-</span>
         <span>:</span>
            <span>-</span>
          </div>
          <div className='flex flex-col items-center'>
            <h3 className='text-sm font-bold'>Emirates Stadium, Omgång 13</h3>
            <p className='text-sm text-gray-400'>
              Lördag 20 November 2021, 16:00
            </p>
          </div>
          </div>
          <div className='flex flex-col items-center gap-4'>
            <Image src="/barcelona.png" width={100} height={100} alt="Markus Wiland" />
            <span className="text-xl font-bold">Barcelona FC</span>
          </div>
          <span>-</span>
        </div>
      </section>
      <section className="my-10 relative py-10 full-width bg-[rgba(247,247,247)] border-[rgba(247,247,247)]">
        <h1 className="absolute -top-5 text-4xl font-bold">Hounours</h1>
        <div class="grid grid-cols-5 gap-8 breakout">
        <div class="col-span-2 row-span-2 border-2 p-8 flex flex-col border-gray-200 ">

     <div class="flex items-center justify-center pb-10 ">
        <Image src="/pl.jpeg" width={100} height={100} alt="Markus Wiland" className="rounded-md" />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl text-red-600 font-bold">27</h1>
        <h2 className="text-2xl font-bold text-black">Premier league</h2>
        <p className="text-1xl text-gray-300">- Senast 2003 / 2004</p>
      </div>
   
  </div>
  <div class="col-span-1  border-2 p-4 flex flex-col border-gray-200">


<div class="flex items-center justify-center pb-4">
<Image src="/pl.jpeg" width={50} height={50} alt="Markus Wiland" className="rounded-md"/>
 </div>
 <div className="flex flex-col">
   <h1 className="text-1xl text-red-600 font-bold">27</h1>
   <h2 className="text-1xl font-bold text-black whitespace-nowrap	">Premier league</h2>
 </div>

</div>

<div class="col-span-1  border-2 p-4 flex flex-col border-gray-200">

<div class="flex items-center justify-center pb-4">
   <Image src="/fa.webp" width={100} height={100} alt="Markus Wiland" className="rounded-md" />
 </div>
 <div className="flex flex-col">
   <h1 className="text-1xl text-red-600 font-bold">27</h1>
   <h2 className="text-1xl font-bold text-black whitespace-nowrap	">Premier league</h2>
 </div>


</div>
          
<div class="col-span-1  border-2 p-4 flex flex-col border-gray-200">

<div class="flex items-center justify-center pb-4">
   <Image src="/community.png" width={100} height={100} alt="Markus Wiland" className="rounded-md" />
 </div>
 <div className="flex flex-col ">
   <h1 className="text-1xl text-red-600 font-bold">27</h1>
   <h2 className="text-1xl font-bold text-black whitespace-nowrap	">Premier league</h2>
 </div>



</div>
        
<div class="col-span-1  border-2 p-4 flex flex-col border-gray-200">

<div class="flex items-center justify-center pb-4">
   <Image src="/cl.webp" width={100} height={100} alt="Markus Wiland" className="rounded-md" />
 </div>
 <div className="flex flex-col">
   <h1 className="text-1xl text-red-600 font-bold">27</h1>
   <h2 className="text-1xl font-bold text-black whitespace-nowrap	">Premier league</h2>
 </div>

</div>

        </div>
        </section>
  </>

  )
}
