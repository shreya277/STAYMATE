import { Link } from "react-router-dom"
import { CaretUpIcon, Globe, RupeeIcon } from "../../../public/SvgComponents"

export default function Footer(){

  const links = [
    "privacy",
    "terms",
    "sitemap",
    "company details",
    "destinations"
  ]

  return (
    <footer className="md:gap-6 px-20 border-t border-t-gray-200 py-4 flex justify-between w-full text-sm  bg-white items-center "  >
      <ul className="flex gap-3 font-normal cursor-pointer items-center">
        <li>&copy; {new Date().getFullYear()} STAYMATE</li>
        {
          links.map(link => (            
                <li key = {link}>
                  <Link href = "#" className="capitalize">
                    {/* {link.charAt(0).toUpperCase() + link.slice(1).toLowerCase()} */}
                    {link}
                  </Link>
                </li>            
          ))
        }
      </ul>
      <ul className="flex gap-4 font-medium ">
        <li className="flex items-center gap-2 cursor-pointer">
            <Globe/> English (IN)
        </li>
        <li className="cursor-pointer flex gap-1 items-center"><RupeeIcon/> INR</li>
        <li className="cursor-pointer flex gap-1 items-center">Support & Resources <CaretUpIcon/></li>
      </ul>
    </footer>
  )
}