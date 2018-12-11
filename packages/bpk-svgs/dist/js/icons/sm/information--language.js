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
  }} {...props}><path d="M20.7 7.5l-.3-1.7c-.2-1.1-1.1-2-2.2-2.3-1.5-.3-2.9-.5-4.4-.5h-3.6c-1.5 0-2.9.2-4.4.5-1.1.3-2 1.2-2.2 2.3l-.3 1.7c-.4 2-.4 4 0 5.9l.3 1.7c.2 1.1 1.1 2 2.2 2.3.7.2 1.4.3 2.2.4v2.6c0 .4.3.6.6.6h.1c1.6-.6 3-1.6 4-3h1.1c1.5 0 2.9-.2 4.4-.5 1.1-.3 2-1.2 2.2-2.3l.3-1.7c.4-2 .4-4 0-6zm-10.3 4.8l-.5-1.4H7.1l-.5 1.4H5l2.8-7h1.4l2.8 7h-1.6zm8 3c-1.1-.4-2-.9-2.8-1.7-.8.8-1.8 1.3-2.9 1.7-.1-.5-.3-.9-.6-1.3 1-.2 1.9-.7 2.7-1.3-.4-.5-.7-1-.9-1.5-.2-.5-.4-1-.6-1.6h-.1c-.3 0-.6 0-1 .1V8.4c.3 0 .7.1 1 .1h1.7V7.3h1.3v1.2H18c.3 0 .7 0 1-.1v1.3c-.3 0-.6-.1-1-.1h-.2c-.1.6-.3 1.1-.5 1.7-.2.5-.5 1-.8 1.4.8.6 1.7 1 2.6 1.2-.4.5-.6.9-.7 1.4zm-1.9-5.6c-.1.5-.2.9-.4 1.3-.2.3-.3.7-.6.9-.2-.3-.4-.6-.6-1-.2-.4-.4-.8-.5-1.3l2.1.1zm-8-2.6l.9 2.6H7.6l.9-2.6z" /></svg>;
});