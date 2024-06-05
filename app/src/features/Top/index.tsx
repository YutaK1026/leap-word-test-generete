import ContentBox from "./presentation/content-box"

const array = ["list", "list", "list", "list", "list", "list", "list", "list",]

export default function TopPage() {
  return (
    <div className="m-10">
      <div className="text-xl m-5">
        Contents List
      </div>
      <div className="grid grid-cols-4 gap-4">
        {
          array.map((item: string) => {
            return (
              <ContentBox itemName={item} />
            )
          })
        }
      </div>
    </div>
  )
}