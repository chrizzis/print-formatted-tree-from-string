import { DEFAULT_STRING } from "./constants.js"
import { buildTree } from "./parser.js"
import { cloneAndSort as treeSort } from "./treeTransformer.js"
import { formatTreeToString } from "./formatter.js"

function main(): void {
  const tree = buildTree(DEFAULT_STRING)
  const sortedTree = treeSort(tree)
  const formattedTree = formatTreeToString(tree)
  const formattedSortedTree = formatTreeToString(sortedTree)

  console.log(formattedTree)
  console.log("\n")
  console.log(formattedSortedTree)
}

main()