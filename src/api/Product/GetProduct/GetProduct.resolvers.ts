import jsonfile from "jsonfile";
import path from "path";

import { Resolvers } from "../../../types/resolvers";
import {
  GetProductQueryArgs,
  GetProductResponse,
  GetAllProductResponse
} from "src/types/graph";

const resolvers: Resolvers = {
  Query: {
    GetProduct: async (
      _,
      args: GetProductQueryArgs,
      { req }
    ): Promise<GetProductResponse> => {
      const filePath = path.join(__dirname, "..", "..", "..", "..", "resource");
      const stores =
        jsonfile.readFileSync(`${filePath}/stores.json`, { throws: false }) ||
        {};
      const products =
        jsonfile.readFileSync(`${filePath}/products.json`, { throws: false }) ||
        {};
      const product = products.find(s => s.id === args.productId);

      const store = stores.find(store => store.id === product.storeId);

      product.store = store;

      return {
        ok: true,
        error: null,
        product
      };
    },
    GetAllProduct: async (_, __, { req }): Promise<GetAllProductResponse> => {
      const filePath = path.join(__dirname, "..", "..", "..", "..", "resource");
      const stores =
        jsonfile.readFileSync(`${filePath}/stores.json`, { throws: false }) ||
        {};

      const products =
        jsonfile.readFileSync(`${filePath}/products.json`, { throws: false }) ||
        {};

      products.map(product => {
        const store = stores.find(store => store.id === product.storeId);
        product.store = store;
        return product;
      });
      return {
        ok: true,
        error: null,
        products
      };
    }
  }
};

export default resolvers;
