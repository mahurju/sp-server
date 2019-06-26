export const typeDefs = ["type GetProductResponse {\n  ok: Boolean!\n  error: String\n  product: Product\n}\n\ntype GetAllProductResponse {\n  ok: Boolean!\n  error: String\n  products: [Product]\n}\n\ntype Query {\n  GetProduct(productId: String!): GetProductResponse!\n  GetAllProduct: GetAllProductResponse!\n  GetStore(storeId: String!): GetStoreResponse!\n  GetAllStore: GetAllStoreResponse!\n}\n\ntype Product {\n  id: String!\n  name: String!\n  link: String!\n  img: String!\n  price: String!\n  retailPrice: String!\n  storeId: String!\n  color: String!\n  textColor: String!\n  store: Store!\n}\n\ntype GetStoreResponse {\n  ok: Boolean!\n  error: String\n  store: Store\n}\n\ntype GetAllStoreResponse {\n  ok: Boolean!\n  error: String\n  stores: [Store]\n}\n\ntype Store {\n  id: String!\n  name: String!\n  icon: String!\n  color: String!\n  textColor: String!\n  products: [Product]\n}\n"];
/* tslint:disable */

export interface Query {
  GetProduct: GetProductResponse;
  GetAllProduct: GetAllProductResponse;
  GetStore: GetStoreResponse;
  GetAllStore: GetAllStoreResponse;
}

export interface GetProductQueryArgs {
  productId: string;
}

export interface GetStoreQueryArgs {
  storeId: string;
}

export interface GetProductResponse {
  ok: boolean;
  error: string | null;
  product: Product | null;
}

export interface Product {
  id: string;
  name: string;
  link: string;
  img: string;
  price: string;
  retailPrice: string;
  storeId: string;
  color: string;
  textColor: string;
  store: Store;
}

export interface Store {
  id: string;
  name: string;
  icon: string;
  color: string;
  textColor: string;
  products: Array<Product> | null;
}

export interface GetAllProductResponse {
  ok: boolean;
  error: string | null;
  products: Array<Product> | null;
}

export interface GetStoreResponse {
  ok: boolean;
  error: string | null;
  store: Store | null;
}

export interface GetAllStoreResponse {
  ok: boolean;
  error: string | null;
  stores: Array<Store> | null;
}
