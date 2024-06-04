import classNames from "classnames"

import { LinkType } from "../hooks/index"
import Link from "next/link"

export default function LinkItem(props: { pathName: LinkType, link: LinkType }) {
  const isInPage: boolean = props.pathName === props.link
  const linkTextClassName = classNames(
    "text-sm",
    "font-semibold",
    "leading-6",
    "text-gray-900",
    "border-main",
    {
      ["border-b-2"]: isInPage,
    }
  )

  return (
    <Link href={props.link} className={linkTextClassName}>{props.link}</Link>
  )
}