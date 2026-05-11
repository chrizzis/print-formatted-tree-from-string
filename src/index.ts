import { DEFAULT_STRING } from './constants'
import { buildTree } from "./parser";
import { sort, sort as treeSort } from "./treeTransformer"
import { formatTreeToString } from './formatter';

function main(): void {
  const tree = buildTree(DEFAULT_STRING)
  const sortedTree = treeSort(tree)
  const formattedTree = formatTreeToString(tree)
  const formattedSortedTree = formatTreeToString(sortedTree)
}

main()