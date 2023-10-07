import Image from 'next/image';
import Header from '../../components/Header';
import {getProviders, signIn as signIntoProvider} from 'next-auth/react'


function signIn({providers}) {
    return (
        <>
          <Header/>
          <div className='flex flex-col items-center justify-center min-h-screen py-2 -mt-56 px-14 text-center'>
            <img src="" alt=""  />
            <h1 className='w-200'>
              <img src='https://i.ibb.co/ftg1mv5/Logo-Instagram.png' width={300} height={100} />
            </h1>
            <p className='font-xs italic'>This not a REAL app it build for education purposes only</p>

            <div className='mt-40 '>
              {Object.values(providers).map((provider) => (
                <div key={provider.name}>
                  <button className='bg-blue-500 p-3 rounded-lg text-white' onClick={() => signIntoProvider(provider.id,{callbackUrl:"/"})}>
                    Sign in with {provider.name}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </> 
    )
  
}

export async function getServerSideProps(){
    const providers = await getProviders();
     
    return {
      props:{
        providers,
      }
    }
}

export default signIn
