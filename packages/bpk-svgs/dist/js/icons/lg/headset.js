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
  }} {...props}><path d="M22 13.1c0-1-.4-1.9-1-2.6v-.1C20.7 5.7 16.8 2 12 2s-8.7 3.7-9 8.4v.1c-.7.7-1 1.6-1 2.6 0 2 1.7 3.6 3.6 3.8.2.1.4-.2.4-.4V9.7c0-.2-.2-.4-.4-.4-.1 0-.3 0-.4.1-.1 0-.4-.1-.4-.2.9-3.3 3.7-5.6 7.2-5.6 3.4 0 6.4 2.3 7.2 5.6 0 .1-.3.2-.4.2-.1 0-.3 0-.4-.1-.2 0-.4.2-.4.4v6.8c0 .2.2.4.4.4h.2c.2 0 .2.1.2.2-.1.5-.3 1-.8 1.5s-1.1.9-1.9 1c-.1 0-.2 0-.3-.1-.3-.3-.6-.4-1.1-.4-.8 0-1.4.5-1.4 1.1 0 .6.6 1.1 1.4 1.1.6 0 1.1-.3 1.3-.6 0 0 .1-.1.2-.1 1-.2 1.8-.6 2.4-1.3.8-.8 1-1.9 1.1-2.5 0-.1 0-.2.1-.2 1.4-.8 2.2-2.1 2.2-3.5z" /></svg>;
});