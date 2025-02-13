'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

const NavLink = ({link}) => {
    const pathName = usePathname()

    return (
        <Link className={` px-4 py-2 rounded-md ${pathName === link.url ? "bg-teal-700 border border-white text-white shadow-md" : "bg-white border-teal-700 border text-teal-700 portBoxShadow hover:shadow-md "}`} href={link.url} key={link.title}>
            {link.title}
          </Link>
    )
}

export default NavLink
