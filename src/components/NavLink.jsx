'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

const NavLink = ({link}) => {
    const pathName = usePathname()

    return (
        <Link className={`rounded px-2 py-1 ${pathName === link.url && "bg-purple-900 text-white"}`} href={link.url} key={link.title}>
            {link.title}
          </Link>
    )
}

export default NavLink
