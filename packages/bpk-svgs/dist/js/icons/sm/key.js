function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from "react";
export default ((_ref) => {
  let {
    styles = {}
  } = _ref,
      props = _objectWithoutProperties(_ref, ["styles"]);

  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{
    width: "1.125rem",
    height: "1.125rem"
  }} {...props}><path d="M17.4 6.5c-.4-2.2-2.1-4-4.2-4.4-3.6-.7-6.7 2-6.7 5.4 0 1.9 1 3.6 2.5 4.6v.9c0 .5.5 1 1 1h.5c.5 0 1 .5 1 1s-.5 1-1 1H10c-.5 0-1 .5-1 1s.5 1 1 1h.5c.5 0 1 .5 1 1s-.5 1-1 1H10c-.3 0-.6.2-.8.4-.1.2-.2.4-.2.6 0 .5.5 1 1 1h1.9c1.7 0 3.1-1.4 3.1-3.1v-6.8c1.8-1.1 2.8-3.3 2.4-5.6zM12 3.9c.8 0 1.4.6 1.4 1.4s-.6 1.4-1.4 1.4-1.4-.6-1.4-1.4.6-1.4 1.4-1.4z" /></svg>;
});