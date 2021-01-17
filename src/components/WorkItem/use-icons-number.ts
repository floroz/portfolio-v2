import { useLayoutEffect, useState } from "react";

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
