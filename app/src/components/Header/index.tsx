"use client"
import classNames from "classnames"
import { usePathname } from "next/navigation";

import LoginButton from "./parts/login-button"
import LinkItem from "./parts/link-item";
import HeaderIconTitle from "./presentation/header-icon-title";
import { useHeader } from "./hooks"
import { LinkType } from "./hooks"

export default function Header() {
  const currentPathName = usePathname() as LinkType

  const { links } = useHeader()

  const navClassName = classNames(
    "mx-auto",
    "flex",
    "max-w-7xl",
    "items-center",
    "justify-between",
    "p-6",
    "lg:px-8"
  )

  return (
    <div>
      <header className="bg-white">
        <nav className={navClassName} aria-label="Global">
          <HeaderIconTitle />
          <div className="hidden lg:flex lg:gap-x-12">
            {links.map((link, key) => {
              return (
                <div key={key}>
                  <LinkItem pathName={currentPathName} link={link} />
                </div>
              )
            })}
          </div>
          <LoginButton />
        </nav>
      </header>
    </div >
  )
}