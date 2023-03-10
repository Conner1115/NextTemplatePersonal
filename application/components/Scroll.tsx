import { ReactElement, RefObject, useRef, useState, useEffect } from "react";
import { View } from "application/ui";
import useScroll from "application/hooks/useScroll";
import { constrain } from "lib";

export const Scroll = ({
  children,
  end = 0,
  scrollRef,
  inline,
  ...props
}: {
  children: (percentage: number) => ReactElement;
  end?: number;
  scrollRef: RefObject<HTMLDivElement>;
  inline?: boolean;
}) => {
  const { scrollTop } = useScroll(scrollRef);
  const elementRef = useRef<HTMLDivElement>(null);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const box = elementRef.current?.getBoundingClientRect();
    const totalHeight = window.innerHeight - end;
    const scrollValue = (totalHeight - (Number(box?.top) - end)) / totalHeight;

    setPercentage(constrain(scrollValue, 0, 1));
  }, [scrollTop, end]);

  return (
    <View
      {...props}
      innerRef={elementRef}
      css={inline ? { display: "inline" } : undefined}
    >
      {children(percentage)}
    </View>
  );
};
