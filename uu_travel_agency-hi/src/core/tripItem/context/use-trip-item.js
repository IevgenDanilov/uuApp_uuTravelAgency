//@@viewOn:revision
// coded: Kyrychenko Dmytro, 21.07.2021
//@@viewOff:revision

//@@viewOn:imports
import { useContext } from "uu5g04-hooks";
import Context from "./trip-item-context.js";
//@@viewOff:imports

export function useTripItem() {
  return useContext(Context);
}

export default useTripItem;
