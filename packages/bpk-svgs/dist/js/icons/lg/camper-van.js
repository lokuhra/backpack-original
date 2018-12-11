function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from "react";
export default ((_ref) => {
  let {
    styles = {}
  } = _ref,
      props = _objectWithoutProperties(_ref, ["styles"]);

  return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" style={{
    width: "1.5rem",
    height: "1.5rem"
  }} {...props}><path d="M21.8 12.8l-1.6-2.3c-.2-.3-.5-.4-.8-.4H16c-.5 0-1 .4-1 1v6h.2c.4-1.2 1.5-2 2.8-2s2.4.8 2.8 2h.3c.5 0 .9-.4.9-.9v-2.8c0-.3-.1-.5-.2-.6zm-3.1.2h-1.8c-.5 0-.8-.4-.8-.8v-.4c0-.5.4-.8.8-.8h1.7c.3 0 .6.2.7.5l.2.4c.2.5-.2 1.1-.8 1.1zm-.7 3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm3-7.8V8c0-.6-.1-3-3-3h-4.4c-.5 0-.9.1-1.3.4C12 5.8 11 8 10.6 8H3c-.5 0-1 .5-1 1v7c0 .5.4 1 1 1h2.2c.4-1.2 1.5-2 2.8-2s2.4.8 2.8 2H14V9.8c0-.4.4-.8.8-.8h5.4c.4 0 .8-.4.8-.8zM6 11.1c0 .5-.4.9-.9.9H3.9c-.5 0-.9-.4-.9-.9V11c0-.6.4-1 .9-1H5c.6 0 1 .4 1 .9v.2zm7-.1c0 .5-.4 1-1 1H9c-.5 0-1-.4-1-1 0-.5.4-1 1-1h3c.6 0 1 .4 1 1zm-5 5c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2z" /></svg>;
});