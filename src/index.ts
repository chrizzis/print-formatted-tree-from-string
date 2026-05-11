import { DEFAULT_STRING } from './constants'
import { buildTree } from "./parser";
import { sortInPlace as treeSort, cloneAndSort } from "./treeTransformer"
import { formatTreeToString } from './formatter';

function main(): void {
  const tree = buildTree(DEFAULT_STRING)
  const sortedTree = cloneAndSort(tree)
  const formattedTree = formatTreeToString(tree)
  const formattedSortedTree = formatTreeToString(sortedTree)

  console.log(`printed: \n`)
  console.log(formattedTree)
  console.log("\n")
  console.log(formattedSortedTree)
}

main()