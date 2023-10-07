import {
    SearchIcon,PlusCircleIcon,UserGroupIcon,HeartIcon,PaperAirplaneIcon,MenuIcon,
} from "@heroicons/react/outline";

import {HomeIcon} from "@heroicons/react/solid";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { modalState } from "../atom/modalAtom";



function Header() {
    const {data:session} = useSession();
    const router = useRouter();
    const [open, setOpen] = useRecoilState(modalState);

    
     
  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
        <div className='flex justify-between max-w-6xl mx-5 lg:mx-auto '>
            {/* left */}
            <div onClick={() => router.push('/')} className='relative hidden lg:inline-grid  w-24'>
                <img src="https://i.ibb.co/ftg1mv5/Logo-Instagram.png" alt  layout='fill'/>
                {/* <h className='object-contain text-center mt-p-4  cursor-pointer'>Instagram</h> */}
            </div>

            <div onClick={() => router.push('/')} className='relative w-10  lg:hidden flex-shrink-0'>
                <img src='https://i.ibb.co/6XfK4FN/instagram-removebg-preview.png' layout='fill' objectFit='cover'/>
            </div>

            {/* middle  -search input feild*/}
            <div className="max-w-xs">
                <div className='relative mt-1 p-3 rounded-md '>
                    <div className='absolute inset-y-0 pl-3 flex items-center pointer-event-none'>
                        <SearchIcon className="h-5 w-5 text-gray-500"/>
                    </div>
                    <input 
                        className='bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300  focus:ring-black focus:border-black rounded-md' 
                        type='text' placeholder='search'
                    /> 
                </div>
            </div>

            {/* right */}
            <div className="flex items-center justify-end space-x-4">
                <HomeIcon onClick={() => router.push('/')} className="navBtn"/>
                <MenuIcon className="h-6 md:hidden cursor-pointer"/>

                {session ?  (
                    <>
                        <div className="relative navBtn">
                        <PaperAirplaneIcon className="navBtn rotate-45"/>
                        <div className="absolute  -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse  text-white" >3</div>
                        </div>
                        <PlusCircleIcon onClick={() =>setOpen(true)} className="navBtn"/>
                        <UserGroupIcon className="navBtn"/>
                        <HeartIcon className="navBtn"/>
    
                        <img onClick={signOut}src={session.user.image} alt="Profile pic" className="h-10  w-10 rounded-full cursor-pointer" />
                    </>    
                ):(
                    <button onClick={signIn}>SignIn</button>
                )}
               
            </div>
        </div>      
    </div>
  )
}

export default Header
