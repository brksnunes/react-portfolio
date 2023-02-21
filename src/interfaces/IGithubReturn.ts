export interface Node {
  name: string;
  description: string;
  homepageUrl: string;
  url: string;
}

interface Edge {
  node: Node;
}

interface PinnedItems {
  edges: Edge[];
}

interface User {
  pinnedItems: PinnedItems;
}

interface Data {
  user: User;
}

export interface IGithubReturn {
  data: Data;
}
