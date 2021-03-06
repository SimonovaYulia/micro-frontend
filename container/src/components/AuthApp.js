import React, { useEffect, useRef } from "react";
import { mount } from "auth/AuthApp";
import { useHistory } from "react-router-dom";

function AuthApp({ onSignIn }) {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathName }) => {
        const pathName = history.location;
        pathName !== nextPathName && history.push(nextPathName);
      },
      onSignIn,
    });
    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref}></div>;
}

export default AuthApp;
