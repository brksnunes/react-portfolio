import { IGithubReturn } from "../interfaces/IGithubReturn";
export const dataFormatter = (obj: IGithubReturn) => {
  const { data: { user: { pinnedItems: { edges } } }} = obj;
  const nodes = edges.map(edge => edge.node);
  return nodes;
 }