import { TreeNode } from "./types";

export const formatTreeToString = (root: TreeNode, excludeRoot: boolean = true): string => {
  const formatted: string[] = []
  let stack: TreeNode[] = []

  const formattedFieldIndented = (field: string, depth: number): string => {
    const indentDepth = excludeRoot ? depth -1 : depth
    const formattedString =  `${' '.repeat(indentDepth)}- ${field}`
    return formattedString
  }
  
  if (excludeRoot) {
    const rootChildren = root.children
    for (let i = rootChildren.length - 1; i >= 0; i--) {
      stack.push(rootChildren[i])
    }
  } else {
    stack.push(root)
  }

  while (stack.length > 0) {
    const node = stack.pop()
    if (node) {
      const { field, depth, children } = node
      formatted.push(formattedFieldIndented(field, depth))
      if (children.length) {
        for (let i = children.length - 1; i >= 0; i--) {
          stack.push(children[i])
        }
      }
    }
  }
  return formatted.join('\n')
}