import { data } from "autoprefixer";
import { signOut, useSession } from "next-auth/react"

function MiniProfile() {
  const { data: session } = useSession();

  return (
    <div className='flex items-center justify-between mt-14 ml-10'>
      <img src={session?.user?.image} className='rounded-full border p-[2px] w-16 h-16' alt="" />

      <div className='flex-1 mx-14'>
        <h1 className='font-bold'>{session?.user?.username}</h1>
        <h3 className='text-sm text-gray-400'>Welcome to Instagram</h3>
      </div>
      <button className='text-blue-400 text-sm font-semibolde ' onClick={signOut}>Sign Out</button>
    </div>
  )
}

export default MiniProfile
