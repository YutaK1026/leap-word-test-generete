import classNames from "classnames"

export default function LoginButton() {
  const linkTextClassName = classNames(
    "text-sm",
    "font-semibold",
    "leading-6",
    "text-gray-900"
  )
  const loginButtonClassName = classNames(
    "hidden",
    "lg:flex",
    "lg:flex-1",
    "lg:justify-end"
  )

  return (
    <>
      <div className={loginButtonClassName}>
        <a href="#" className={linkTextClassName}>
          Log in <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </>
  )
}