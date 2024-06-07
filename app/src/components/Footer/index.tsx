import classNames from "classnames"

import FooterTitle from "./presentations/footer-title"
import FooterContactList from "./presentations/footer-contact-list"

export default function Footer() {
  const footerClassName = classNames(
    "m-4",
  )
  const footerIconListClassName = classNames(
    "items-center",
    "justify-between",
    "mx-auto"
  )

  return (
    <footer className={footerClassName}>
      <FooterTitle />
      <div className={footerIconListClassName}>
        <FooterContactList />
      </div>
    </footer>
  )
}