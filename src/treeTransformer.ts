import { TreeNode } from "./types";

export const cloneAndSort = (root: TreeNode): TreeNode => {
  // yargh. i dont want to clone then sort, id need to clone and sort for perf
  const clonedNode: TreeNode = { field: root.field, depth: root.depth, children: [] }
  
  const clonedChildren = root.children.map(child => cloneAndSort(child))

  clonedChildren.sort((a,b) => a.field.localeCompare(b.field))
  clonedNode.children = clonedChildren

  return clonedNode
}

export const sortInPlace = (root: TreeNode): TreeNode => {
  let stack: TreeNode[] = [root]

  while (stack.length > 0) {
    const node = stack.pop()
    const children = node?.children
    if (children?.length) {
      children.sort((a,b) => a.field.localeCompare(b.field))
      for (let i = children.length - 1; i >= 0; i--) {
        const child = children[i]
        if (child.children.length) {
          stack.push(child)
        }
      }
    }
  }
  console.log(`sort: sorted tree: ${JSON.stringify(root, null, 2)}`)
  return root
}