import { ReactNode } from "react"

interface SkeletonLoaderProps{
    children:ReactNode
    classname:string
}
const SkeletonLoader:React.FC<SkeletonLoaderProps> = ({classname,children}) => {
    return(
        <section className={`${classname} `}>
            {children}
        </section>
    )
}

export default SkeletonLoader