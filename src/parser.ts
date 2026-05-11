import { TreeNode } from "./types"

export const buildTree = (input: string): TreeNode => {
  console.log(`buildTree start`)
  const stack: TreeNode[] = []
  let text = ''
  let field = ''
  let depth = 0
  let rootNode: TreeNode = { field: 'root', depth, children: [] }

  if (input.startsWith('(')) {
    stack.push(rootNode)
  }
  for (let char of input) {
    if (char === '(') {
      field = text.trim()
      console.log(`'(': field: '${field}', depth: ${depth}`)
      if (depth === 0 && field) {
        rootNode = { field, depth, children: [] }
        stack.push(rootNode)
        text = ''
      }
      field = text.trim()
      if (field) {
        const node: TreeNode = { field, depth, children: [] }
        const parent = stack[stack.length - 1]
        if (parent) {
          parent.children.push(node)
        }
        stack.push(node)
      }
      depth += 1
      text = ''
    } else if (char === ')') {
      field = text.trim()
      console.log(`')': field: '${field}', depth: ${depth}`)
      if (field) {
        const node: TreeNode = { field, depth, children: [] }
        const parent = stack[stack.length - 1]
        parent.children.push(node)
      }
      stack.pop()
      depth -= 1
      text = ''
    } else if (char === ',') {
      field = text.trim()
      console.log(`',': field: '${field}', depth: ${depth}`)
      if (field) {
        const node: TreeNode = { field, depth, children: [] }
        const parent = stack[stack.length - 1]
        parent.children.push(node)
      }
      text = ''
    } else {
      text += char
    }
  }
  console.log(`buildTree returning: ${JSON.stringify(rootNode, null, 2)}`)
  return rootNode
}