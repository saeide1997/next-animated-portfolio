'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

const NavLink = ({link}) => {
    const pathName = usePathname()

    return (
        <Link className={` px-4 text-white py-2 rounded-md ${pathName === link.url ? "font-bold bg-gradient-to-r from-[#ffafa1] to-[#634a49] bg-clip-text text-transparent" : "  hover:font-bold hover:bg-gradient-to-r hover:from-[#ffafa1] hover:to-[#634a49] hover:bg-clip-text hover:text-transparent "}`} href={link.url} key={link.title}>
            {link.title}
          </Link>
    )
}

export default NavLink
