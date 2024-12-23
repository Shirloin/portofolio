/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useRef, useState } from "react";
import useIsMounted from "../hooks/useIsMounted";

type MouseEvent = globalThis.MouseEvent;

export default function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const dotOutline = useRef<HTMLDivElement>(null);

  const isMounted = useIsMounted();
  const [mouseActive, setMouseActive] = useState(false);

  const delay = 8;
  const _x = useRef(0);
  const _y = useRef(0);
  const endX = useRef(0);
  const endY = useRef(0);

  const cursorVisible = useRef(true);
  const cursorEnlarged = useRef(false);

  const requestRef = useRef<number | null>(null);

  const toggleCursorVisibility = useCallback(() => {
    if (dot?.current && dotOutline?.current)
      if (cursorVisible.current) {
        dot.current.style.opacity = "1";
        dotOutline.current.style.opacity = "1";
      } else {
        dot.current.style.opacity = "0";
        dotOutline.current.style.opacity = "0";
      }
  }, []);

  const toggleCursorSize = useCallback(() => {
    if (dot?.current && dotOutline?.current)
      if (cursorEnlarged.current) {
        setMouseActive(true);
      } else {
        setMouseActive(false);
      }
  }, []);

  const mouseOverEvent = useCallback(
    (e: MouseEvent) => {
      if ((e.target as any)?.id === "cardHover") {
        cursorEnlarged.current = true;
        toggleCursorSize();
      }
    },
    [toggleCursorSize],
  );

  const mouseOutEvent = useCallback(
    (e: MouseEvent) => {
      if ((e.target as any)?.id === "cardHover") {
        cursorEnlarged.current = false;
        toggleCursorSize();
      }
    },
    [toggleCursorSize],
  );

  const mouseEnterEvent = useCallback(() => {
    cursorEnlarged.current = true;
    toggleCursorVisibility();
  }, [toggleCursorVisibility]);

  const mouseLeaveEvent = useCallback(() => {
    cursorEnlarged.current = false;
    toggleCursorVisibility();
  }, [toggleCursorVisibility]);

  const mouseMoveEvent = useCallback(
    (e: MouseEvent) => {
      endX.current = window.innerWidth / 2;
      endY.current = window.innerHeight / 2;
      cursorVisible.current = true;
      toggleCursorVisibility();

      endX.current = e.pageX;
      endY.current = e.pageY;
      if (dot?.current) {
        dot.current.style.top = endY.current + "px";
        dot.current.style.left = endX.current + "px";
      }
    },
    [toggleCursorVisibility],
  );

  const animateDotOutline = useCallback(() => {
    _x.current += (endX.current - _x.current) / delay;
    _y.current += (endY.current - _y.current) / delay;

    if (dotOutline?.current) {
      dotOutline.current.style.top = _y.current + "px";
      dotOutline.current.style.left = _x.current + "px";
    }

    requestRef.current = requestAnimationFrame(animateDotOutline);
  }, [endX, endY]);

  useEffect(() => {
    const requestRefs = requestRef?.current;

    if (isMounted()) {
      document.addEventListener("mousemove", mouseMoveEvent);
      document.addEventListener("mouseenter", mouseEnterEvent);
      document.addEventListener("mouseleave", mouseLeaveEvent);
      document.addEventListener("mouseover", mouseOverEvent);
      document.addEventListener("mouseout", mouseOutEvent);

      animateDotOutline();
    }
    return () => {
      document.removeEventListener("mousemove", mouseMoveEvent);
      document.removeEventListener("mouseenter", mouseEnterEvent);
      document.removeEventListener("mouseleave", mouseLeaveEvent);
      document.removeEventListener("mouseover", mouseOverEvent);
      document.removeEventListener("mouseout", mouseOutEvent);

      cancelAnimationFrame(requestRefs as number);
    };
  }, [
    isMounted,
    mouseMoveEvent,
    mouseEnterEvent,
    mouseLeaveEvent,
    mouseOverEvent,
    mouseOutEvent,
    animateDotOutline,
  ]);
  return (
    <>
      <div
        ref={dotOutline}
        className={`cursor-big-circle ${mouseActive ? "active-cursor-big-circle" : "inactive-cursor-big-circle"} `}
      ></div>
      <div
        ref={dot}
        className={`cursor-small-circle ${mouseActive ? "active-cursor-small-circle" : "inactive-cursor-small-circle"}`}
      ></div>
    </>
  );
}
