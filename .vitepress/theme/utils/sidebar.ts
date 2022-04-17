import type { DefaultTheme } from "vitepress";

export const removeExt = (path: string): string => {
  return path.replace(/(index)?(\.(md|html))?$/, "") || "/";
};

export const isSideBarGroup = (
  item: DefaultTheme.SideBarItem,
): item is DefaultTheme.SideBarGroup => {
  return (item as DefaultTheme.SideBarGroup).children !== undefined;
};

export const getFlatSideBarLinks = (sidebar: DefaultTheme.SideBarItem[]) => {
  const links: DefaultTheme.SideBarLink[] = [];

  sidebar.forEach((item) => {
    if (item.link) {
      links.push({
        link: item.link,
        text: item.text,
      });
    }

    if (isSideBarGroup(item)) {
      links.push(...getFlatSideBarLinks(item.children));
    }
  });

  return links;
};
