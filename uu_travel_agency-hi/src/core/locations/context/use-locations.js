//@@viewOn:revision
// coded: Kyrychenko Dmytro, 21.07.2021
//@@viewOff:revision

//@@viewOn:imports
import { useContext } from "uu5g04-hooks";
import Context from "./locations-context.js";
//@@viewOff:imports

export function useLocations() {
  return useContext(Context);
}

export default useLocations;
