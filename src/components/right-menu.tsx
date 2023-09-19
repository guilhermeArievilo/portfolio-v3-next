import Link from "next/link";
import Instagram from "@/assets/svg/icons/instagram.svg"
import Linkedin from "@/assets/svg/icons/linkedin.svg"
import Git from "@/assets/svg/icons/github.svg"

export default function RightMenu () {
  return (
    <ul className="hidden fixed top-2/4 right-11 z-20 -translate-y-1/2 md:flex flex-col items-center">
      <li className="py-8">
        <Link href='#'>
          <Instagram />
        </Link>
      </li>
      <li className="py-8">
        <Link href='#'>
          <Linkedin />
        </Link>
      </li>
      <li className="py-8">
        <Link href='#'>
          <Git />
        </Link>
      </li>
    </ul>
  )
}