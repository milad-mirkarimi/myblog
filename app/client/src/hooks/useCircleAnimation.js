import { useEffect } from 'react';

export default function useCircleAnimation() {
  useEffect(() => {
    const circleEl = document.querySelector('.circle');
    if (!circleEl) return;

    const currentPoint = { x: 0, y: 0 };
    const targetPoint = { x: 0, y: 0 };

    function lerp() {
      currentPoint.x = currentPoint.x + (targetPoint.x - currentPoint.x) * 0.1;
      currentPoint.y = currentPoint.y + (targetPoint.y - currentPoint.y) * 0.1;

      circleEl.style.setProperty('--x', currentPoint.x);
      circleEl.style.setProperty('--y', currentPoint.y);

      requestAnimationFrame(lerp);
    }

    requestAnimationFrame(lerp);

    const handlePointerMove = (event) => {
      targetPoint.x = event.clientX;
      targetPoint.y = event.clientY;
    };

    document.body.addEventListener('pointermove', handlePointerMove);

    return () => {
      document.body.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);
};