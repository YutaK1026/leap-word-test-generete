export const useTop = () => {
  const onBoxItemClick = (itemName: string) => {
    console.log(itemName)
  }

  return {
    onBoxItemClick
  }
}