
import { emptyState } from "@/assets"
import { Link } from "react-router-dom"
interface EmptyStateTypes{
    desc:string
    linkText?:string
    linkUrl?:string
    customImg?:string
}
const EmptyState:React.FC<EmptyStateTypes> = ({customImg,desc,linkUrl,linkText}) => {
  return (
    <div className="flex flex-col justify-center h-[200px] items-center">
        <img src={customImg ? customImg : emptyState } alt="" width={100} className="object-cover"/>
        <h1 className="text-primary text-xl font-bold mt-3">{desc}</h1>
        {
            linkUrl && <Link to={linkUrl}><p className="mt-3 bg-secondary px-8 py-3 text-white rounded-md text-sm">{linkText}</p></Link>
        }
    </div>
  )
}

export default EmptyState