import Image from "next/image";

export default function BoxIcon(props: { itemName: string }) {
  return (
    <div className="items-center justify-center flex">
      <Image
        src={`/assets/icons/${props.itemName}.png`}
        width={50}
        height={50}
        alt={`icon:${props.itemName}`}
      />
    </div>
  )
}