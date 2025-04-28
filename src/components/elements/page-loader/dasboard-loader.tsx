import SkeletonLoader from "."
import ShortHeader from "./short-header"


const TableSkeletonLoader = () => {
  return (
    <SkeletonLoader classname='h-full rounded-xl mt-6 '>
         <div>
           <CardSkeleton/>
         </div>
    </SkeletonLoader>
  )
}

export default TableSkeletonLoader

export const CardSkeleton = () => {
    return (
    <SkeletonLoader classname=' py-6 px-3 rounded-xl'>
      
        <div className="mt-3 hidden md:grid md:grid-cols-1 gap-4">
            {Array(3).fill(0).map((item,index) => (
                <div key={`${index}${item}`} className="flex flex-col md:flex-row w-full gap-3  items-center justify-between  ">
                    <ShortHeader/>
                    <ShortHeader/> 
                    <ShortHeader />
                
                </div>
            ))}
        </div>
        <div className="mt-3 md:hidden grid grid-cols-1 gap-y-8">
            {Array(10).fill(0).map((item,index) => (
                <div key={`${index}${item}`} className="flex w-full  wave-effect items-center justify-between border-l ">
                    <ShortHeader/>
                    <ShortHeader/>
                  

                   
                </div>
            ))}
        </div>
    </SkeletonLoader>
    )
}