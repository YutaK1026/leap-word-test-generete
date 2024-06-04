export type LinkType = "/home" | "/"

export const useHeader = () => {
  const links: LinkType[] = ["/", "/home"] //COMMENT: ページを増やした場合はここにページリンク名を入れればよい

  return {
    links
  }
}