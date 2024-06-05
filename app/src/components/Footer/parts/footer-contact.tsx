import Image from "next/image";

export default function FooterContact(props: { name: string, url: string, filePath: string }) {

  return (
    <a href={props.url} className="text-gray-400 hover:shadow">
      <Image
        src={props.filePath}
        width={30}
        height={30}
        alt={`icon:${props.name}`}
      />
      <span className="sr-only">{props.name}</span>
    </a>
  )
}