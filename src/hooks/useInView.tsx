import React, { Ref, useEffect, useState } from "react";

function useInView(ref: any) {
  const [isinview, setIsinview] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsinview(entry.isIntersecting);
    });
    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);
  return isinview;
}

export default useInView;
