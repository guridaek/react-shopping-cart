import { DefaultValue, selector } from "recoil";
import { Product } from "types/domain";
import { productListState } from "recoil/atom";
import { MIN_QUANTITY } from "constants/";

export const cartListSelector = selector({
  key: "cartList",
  get: ({ get }) => {
    return get(productListState).filter(
      (item: Product) => item.quantity !== MIN_QUANTITY.toString()
    );
  },
  set: ({ get, set }, newList) => {
    if (newList instanceof DefaultValue) return set(productListState, newList);

    const updatedList = get(productListState).map((product) => {
      const findedItem = newList.find((item) => item.id === product.id);

      return { ...product, quantity: findedItem ? findedItem.quantity : product.quantity };
    });

    return set(productListState, updatedList);
  },
});
