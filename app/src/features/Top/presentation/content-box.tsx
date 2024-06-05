"use client"
import classNames from "classnames"

import BoxIcon from "../parts/box-icon"
import { useTop } from "../hooks"

export default function ContentBox(props: { itemName: string }) {
  const { onBoxItemClick } = useTop()
  const contentBoxClassName = classNames(
    "items-center",
    "justify-center",
    "m-10",
    "w-20",
    "h-20",
    "bg-main",
    "hover:bg-link-hover",
    "rounded-md"
  )

  return (
    <div className="flex justify-center">
      <button
        className={contentBoxClassName}
        onClick={() => { onBoxItemClick(props.itemName) }}>
        <BoxIcon itemName={props.itemName} />
        <div>
          {props.itemName}
        </div>
      </button>
    </div>
  )
}
