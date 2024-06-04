import classNames from "classnames";

import HeaderIconImage from "../parts/header-icon-image"
import HeaderTitle from "../parts/header-title";

export default function HeaderIconTitle() {
  const headerIconTitleClassName = classNames(
    "flex",
    "lg:flex-1",
    "items-center",
    "text-center"
  )

  return (
    <div className={headerIconTitleClassName}>
      <HeaderIconImage />
      <HeaderTitle />
    </div>
  )
}
