import { useEffect, useState } from "react";

interface ScrollData {
  x: number;
  y: number;
}

function useScrollPosition(DOMelement: any | null) {
  const [scrollData, setScrollData] = useState<ScrollData>({ x: 0, y: 0 });

  useEffect(() => {
    function handleScroll() {
      setScrollData({ x: DOMelement.scrollLeft, y: DOMelement.scrollTop });
      console.log("USESCROLL", scrollData);
    }

    console.log(DOMelement);
    DOMelement?.addEventListener("scroll", handleScroll);

    return () => {
      DOMelement?.removeEventListener("scroll", handleScroll);
    };
  }, [DOMelement, scrollData]);

  return { scrollX: scrollData.x, scrollY: scrollData.y };
}

export default useScrollPosition;
