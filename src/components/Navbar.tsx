import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50">
        <div className='w-full h-20  flex flex-row justify-center items-center'>
            <div className='flex items-center justify-end h-full w-1/4'>
                <div className='h-full w-full flex justify-center items-center'>
                    <div className={`flex justify-start items-center h-full w-2/3 transition-transform duration-500 ease-out z-50 ${open ? 'translate-x-3/4 justify-center text-white' : ''}`}>
                        <p className='font-bold text-2xl transition-colors duration-500 ease-int'>
                            AtayCafe
                        </p>
                    </div>
                </div>
            </div>
            <div className='w-3/4 h-full  flex flex-row justify-center items-center'>
                <div className='h-full w-full flex justify-end items-center '>
                    {/* <div className='flex flex-row justify-start items-center h-full w-full'>
                        <div className='h-full w-full flex flex-row justify-between items-center '>
                            <p> home </p>
                            <p> reservation </p>
                            <p> about </p>
                            <p> contact </p>
                            <p> find </p>
                        </div>
                    </div> */}
                </div>
                <div className='w-1/2 h-full  flex justify-center items-center'>
                    <div className='h-full w-2/3 flex justify-end items-center '>
                        <div className='border-[2px] px-1 hover:cursor-pointer hover:bg-black hover:text-white transition-colors duration-300 ease-linear border-black'>
                            <p className='font-light text-l'>MENU</p>
                        </div>
                        <div className=' h-full w-2/3  flex flex-col justify-center items-end gap-1 z-10'>
                            <div className='w-1/4 h-1/3 group hover:cursor-pointer  flex flex-col justify-around items-start' onClick={() => setOpen(!open)}>
                                <div className='w-full h-[3px] bg-black rounded-full'/>
                                <div className='w-full h-[3px] bg-black rounded-full'/>
                                <div className='w-2/3 group-hover:w-full h-[3px] bg-black rounded-full transition-all duration-500 ease-in-out'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Overlay (click to close) */}
        <div
            className={`fixed top-0 left-0 flex flex-col items-center w-1/2 h-full bg-gray-400 ${open ? 'pointer-events-auto translate-x-0' : 'pointer-events-none translate-x-[200%]'} transition-transform duration-500 ease-out z-40`}
            onClick={() => setOpen(false)}
            aria-hidden={!open}
        >
            <div className={`h-[250px] w-[250px] border-2 border-yellow-50 rounded-full transition-transform delay-500 duration-500 ease-in-out ${open ? '-translate-y-1/2' : '-translate-y-full'}`}></div>
            <div className={`flex flex-row gap-40 text-white transition-all delay-500 duration-500 ease-in-out -translate-y-[200%] ${open ? "opacity-100" : "opacity-0"} `}>
                <div className=''>
                    <p>dark mode</p>
                </div>
                <div className=''>
                    <p>light mode</p>
                </div>
            </div>
        </div>

        {/* Sliding panel from right */}
        <div
            className={`fixed top-0 right-0 flex flex-col justify-end items-center h-screen w-1/2 bg-black z-50 transform ${open ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-out`}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
        >
            <nav className='h-1/2 w-full flex flex-col justify-center items-center text-white text-xl px-6'>
                <div className=' w-full flex flex-col justify-center items-center gap-6'>
                    <div className='flex flex-row justify-between items-center border-b-2 border-white w-full py-2'>
                        <div className=''>
                            <a href="#top" className='' onClick={() => setOpen(false)}>Home</a>
                        </div>
                        <div className='px-4'>
                            {'>'}
                        </div>
                    </div>
                    <div className='flex flex-row justify-between items-center border-b-2 border-white w-full py-2'>
                        <div className=''>
                            <a href="#reservation" className='' onClick={() => setOpen(false)}>Reservation</a>
                        </div>
                        <div className='px-4'>
                            {'>'}
                        </div>
                    </div>
                    <div className='flex flex-row justify-between items-center border-b-2 border-white w-full py-2'>
                        <div className=''>
                            <a href="#about" className='' onClick={() => setOpen(false)}>About</a>
                        </div>
                        <div className='px-4'>
                            {'>'}
                        </div>
                    </div>
                    <div className='flex flex-row justify-between items-center border-b-2 border-white w-full py-2'>
                        <div className=''>
                            <a href="#contact" className='' onClick={() => setOpen(false)}>Contact</a>
                        </div>
                        <div className='px-4'>
                            {'>'}
                        </div>
                    </div>
                    <div className='flex flex-row justify-between items-center border-b-2 border-white w-full py-2'>
                        <div className=''>
                            <a href="#find" className='' onClick={() => setOpen(false)}>Find</a>
                        </div>
                        <div className='px-4'>
                            {'>'}
                        </div>
                    </div>
                </div>
            </nav>
            <div className='w-full h-1/4 flex flex-col justify-center items-center'>
                <div className='flex gap-6'>
                    <a href="#instagram" aria-label="Instagram" className='inline-flex h-10 w-10 items-center justify-center rounded-full text-white'>
                        <span className='text-xs font-semibold'>IG</span>
                    </a>
                    <a href="#facebook" aria-label="Facebook" className='inline-flex h-10 w-10 items-center justify-center rounded-full text-white'>
                        <span className='text-xs font-semibold'>FB</span>
                    </a>
                    <a href="#tiktok" aria-label="TikTok" className='inline-flex h-10 w-10 items-center justify-center rounded-full text-white border border-white/10'>
                        <span className='text-xs font-semibold'>TK</span>
                    </a>
                    
                </div>
            </div>
        </div>
    </nav>
  )
}
