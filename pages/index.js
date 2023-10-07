import Feed from "@/components/Feed"
import Header from "../components/Header"
import Head from "next/head"
import Modal from "../components/Modal"

export default function Home() {
  return (
   <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide "> 
      <Head>
        <title>Instagram 2.0 Youtube</title>
      </Head>
      <Header/>
      <Feed/>
      <Modal/>
   </div>
  )
}
