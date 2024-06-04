import classNames from "classnames"

export default function HeaderTitle() {
  const headerTitleClassName = classNames(
    "ml-5",
    "font-semibold",
    "leading-6",
    "text-gray-900"
  )

  return (
    <div className={headerTitleClassName}>
      EnglishWordTestGenerator
    </div>
  )
}