import { useEffect, useRef, TouchEvent } from 'react';

interface SwipeInput {
  onSwipedLeft?: () => void;
  onSwipedRight?: () => void;
  onSwipedUp?: () => void;
  onSwipedDown?: () => void;
  minSwipeDistance?: number;
}

interface SwipeOutput {
  onTouchStart: (e: TouchEvent) => void;
  onTouchMove: (e: TouchEvent) => void;
  onTouchEnd: () => void;
}

/**
 * Custom hook for handling swipe gestures on mobile
 * @param onSwipedLeft - Callback when user swipes left
 * @param onSwipedRight - Callback when user swipes right
 * @param onSwipedUp - Callback when user swipes up
 * @param onSwipedDown - Callback when user swipes down
 * @param minSwipeDistance - Minimum distance in pixels to trigger swipe (default: 50)
 */
export const useSwipe = ({
  onSwipedLeft,
  onSwipedRight,
  onSwipedUp,
  onSwipedDown,
  minSwipeDistance = 50,
}: SwipeInput): SwipeOutput => {
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const touchEnd = useRef<{ x: number; y: number } | null>(null);

  const onTouchStart = (e: TouchEvent) => {
    touchEnd.current = null;
    touchStart.current = {
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY,
    };
  };

  const onTouchMove = (e: TouchEvent) => {
    touchEnd.current = {
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY,
    };
  };

  const onTouchEnd = () => {
    if (!touchStart.current || !touchEnd.current) return;

    const distanceX = touchStart.current.x - touchEnd.current.x;
    const distanceY = touchStart.current.y - touchEnd.current.y;
    const isHorizontalSwipe = Math.abs(distanceX) > Math.abs(distanceY);

    if (isHorizontalSwipe) {
      // Horizontal swipe
      if (distanceX > minSwipeDistance) {
        // Swiped left
        onSwipedLeft?.();
      } else if (distanceX < -minSwipeDistance) {
        // Swiped right
        onSwipedRight?.();
      }
    } else {
      // Vertical swipe
      if (distanceY > minSwipeDistance) {
        // Swiped up
        onSwipedUp?.();
      } else if (distanceY < -minSwipeDistance) {
        // Swiped down
        onSwipedDown?.();
      }
    }
  };

  return {
    onTouchStart,
    onTouchMove,
    onTouchEnd,
  };
};
