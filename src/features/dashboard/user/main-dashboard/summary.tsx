import { useGetScore } from "../../../auth/api";

const DashboardSummary = ({isFetching}:{isFetching:boolean}) => {


     const { data:score } = useGetScore()

    

     if(isFetching){
        return <div className="flex flex-col md:flex-row gap-x-4 h-screen gap-2 ">
            <div className="h-1/2 p-2">
            <div className='w-full h-[50vh] rounded-lg bg-[#dad8d8] wave-effect'/>
            </div>
            <div className="h-1/2 p-2">
            <div className='w-full  h-[50vh] rounded-lg bg-[#dad8d8] wave-effect'/>
            </div>
        
        </div>
     }
  return (
    <aside className="flex flex-col md:flex-row md:gap-x-3 md:w-full gap-y-3  p-2">
        <div className="bg-white md:w-full px-2 py-3 h-[15rem] rounded-xl flex flex-col items-center justify-center">
            <div className="rounded-full border-8 size-[10rem] border-[#c4c1c1]  flex flex-col items-center justify-center ">
               <h3 className="font-bold text-2xl">Day 12 </h3>
            </div>
        </div>
        <div className="bg-white md:w-full px-2 py-3 h-[15rem] rounded-xl flex flex-col items-center justify-center">
            <div className="rounded-full border-8 size-[10rem] border-[#c4c1c1] text-sm flex flex-col items-center justify-center ">
               <h3 className="font-bold text-2xl">Score {score?.result}% </h3>
            </div>
        </div>
        
    </aside>
  )
}

export default DashboardSummary