import classNames from "classnames";

import FooterContact from "../parts/footer-contact";
import { contactList } from "../hooks";

export default function FooterContactList() {
  const footerContactListClassName = classNames(
    "flex",
    "mt-4",
    "sm:justify-center",
    "md:mt-0",
    "space-x-5",
    "rtl:space-x-reverse"
  )

  return (
    <div className={footerContactListClassName}>
      {contactList.map((item) => {
        return (
          <FooterContact name={item.name} url={item.url} filePath={item.filePath} />
        )
      })}
    </div>
  )
}