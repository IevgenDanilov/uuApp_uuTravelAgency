//@@viewOn:revision
// doc: https://uuapp.plus4u.net/uu-bookkit-maing01/4e5bbd80192946c18f33a0887d851330/book/page?code=UuPlus4uMallOrderSummaryListContextResolver
// coded: Yaroslav Harmash (8517-626-1), 22.07.2021
//@@viewOff:revision

//@@viewOn:imports
import { createComponent, useMemo } from "uu5g04-hooks";
import Config from "../../config/config.js";
import ContextHelper from "../../../helpers/context-helper.js";
import TripsLoader from "../trips-loader.js";
import useTrips from "./use-trips.js";
//@@viewOff:imports

const STATICS = {
  //@@viewOn:statics
  displayName: Config.TAG + "TripsContextResolver",
  //@@viewOff:statics
};

export const TripsContextResolver = createComponent({
  ...STATICS,

  //@@viewOn:propTypes
  //@@viewOff:propTypes

  //@@viewOn:defaultProps
  //@@viewOff:defaultProps

  render(props) {
    //@@viewOn:hooks
    const tripsList = useTrips();
    const shouldLoadData = useMemo(() => ContextHelper.checkDataOnContext(tripsList), [tripsList]);
    //@@viewOff:hooks

    //@@viewOn:private
    //@@viewOff:private

    //@@viewOn:interface
    //@@viewOff:interface

    //@@viewOn:render
    let child = props.children;
    if (shouldLoadData) {
      child = <TripsLoader>{props.children}</TripsLoader>;
    }
    return child;
    //@@viewOff:render
  },
});
//viewOn:exports
export default TripsContextResolver;
//viewOff:exports
