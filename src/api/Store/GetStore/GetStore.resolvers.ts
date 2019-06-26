import {
  GetStoreQueryArgs,
  GetStoreResponse,
  GetAllStoreResponse
} from "src/types/graph";
import jsonfile from "jsonfile";
import path from "path";

import { Resolvers } from "../../../types/resolvers";

const resolvers: Resolvers = {
  Query: {
    GetStore: async (
      _,
      args: GetStoreQueryArgs,
      { req }
    ): Promise<GetStoreResponse> => {
      const filePath = path.join(__dirname, "..", "..", "..", "..", "resource");
      const stores =
        jsonfile.readFileSync(`${filePath}/stores.json`, { throws: false }) ||
        {};
      const products =
        jsonfile.readFileSync(`${filePath}/products.json`, { throws: false }) ||
        {};

      const data = products.filter((val: any) => {
        return val.storeId === args.storeId;
      });

      const store = stores.find(s => s.id === args.storeId);
      store.products = data;

      return {
        ok: true,
        error: null,
        store
      };
    },
    GetAllStore: async (_, __, { req }): Promise<GetAllStoreResponse> => {
      const filePath = path.join(__dirname, "..", "..", "..", "..", "resource");
      const stores =
        jsonfile.readFileSync(`${filePath}/stores.json`, { throws: false }) ||
        {};

      const products =
        jsonfile.readFileSync(`${filePath}/products.json`, { throws: false }) ||
        {};

      stores.map(store => {
        const data = products.filter((val: any) => {
          return val.storeId === store.id;
        });
        store.products = data;
        return store;
      });
      return {
        ok: true,
        error: null,
        stores
      };
    }
  }
};

export default resolvers;
