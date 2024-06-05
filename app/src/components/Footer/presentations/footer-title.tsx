import classNames from "classnames"

export default function FooterTitle() {
  const footerDivClassName = classNames(
    "mx-auto",
    "p-4",
  )

  return (
    <div className={footerDivClassName}>
      <span
        className="block text-sm text-gray-500 text-center dark:text-gray-400">
        © 2024
        <a href="https://github.com/YutaK1026" className="hover:underline">
          Yuta Kawamura
        </a>
        . All Rights Reserved.
      </span>
    </div>
  )
}