import { DEFAULT_STRING } from './constants'
import { buildTree } from "./parser";

function main(): void {
  const tree = buildTree(DEFAULT_STRING)
}

main()