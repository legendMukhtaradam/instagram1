import Image from "next/image"
function Story({img,username}) {
  return (
    <div>
        {/* <img src={img} alt="" />  */}
        <img className="h-14 w-14 rounded-full p[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 transition tranform duration-200 ease-in-out" loader={() =>img} src={img} alt=""  width={100} height={100}/>
      <p className="text-xs w-14 truncate text-center ">{username}</p>
    </div>
  )
}

export default Story
