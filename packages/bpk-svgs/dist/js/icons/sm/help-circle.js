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
  }} {...props}><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1.2 15.3c0 .3-.2.5-.5.5h-1.3c-.3 0-.5-.2-.5-.5V16c0-.3.2-.5.5-.5h1.3c.3 0 .5.2.5.5v1.3zm2.2-6.1c-.2.3-.6.6-1.1 1.1l-.6.4c-.3.2-.5.5-.6.8-.1.2-.1.5-.1.9h-1.6c-.3 0-.5-.2-.5-.5 0-.6.1-1 .2-1.3.1-.3.5-.7 1-1.2l.6-.4c.2-.1.3-.3.5-.5.2-.3.3-.6.3-.9 0-.4-.1-.8-.3-1.1-.2-.3-.7-.5-1.3-.5-.6 0-1 .2-1.3.6-.2.3-.3.6-.3.9 0 .2-.2.4-.5.4H8.6c-.3 0-.6-.2-.5-.5.2-1.2.7-2.1 1.5-2.6.6-.4 1.4-.6 2.3-.6 1.1 0 2.1.3 2.9.8.8.6 1.2 1.4 1.2 2.5-.1.7-.2 1.3-.6 1.7z" /></svg>;
});