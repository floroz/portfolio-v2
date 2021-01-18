import { useState } from "react";
import useLayoutEffect from "hooks/use-isomorphic-layout-effect";

const useIconNumbers = (parentDivRef) => {
  const [numbersOfIconsToRender, setnumbersOfIconsToRender] = useState(10);

  useLayoutEffect(() => {
    if (!parentDivRef.current) {
      return;
    }

    setnumbersOfIconsToRender(
      // custom formula just happens to work
      Math.round(parentDivRef.current.clientHeight / 10 + 5)
    );
  }, [parentDivRef]);

  return {
    numbersOfIconsToRender,
  };
};

export default useIconNumbers;
