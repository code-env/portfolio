"use client";

import anime from "animejs";

const Dots = () => {
  return (
    <section className="flex-1 -z-10 absolute right-0">
      <Wrapper />
    </section>
  );
};

const GRID_WIDTH = 30;
const GRID_HEIGHT = 30;

const Wrapper = () => {
  const dots = [];
  let index = 0;

  const handleClick = (e: any) => {
    anime({
      targets: ".dot-point",
      scale: [
        { value: 1.35, easing: "easeOutSine", duration: 250 },
        { value: 1, easing: "easeInOutQuad", duration: 500 },
      ],
      translateY: [
        { value: -15, easing: "easeOutSine", duration: 250 },
        { value: 0, easing: "easeInOutQuad", duration: 500 },
      ],
      opacity: [
        { value: 1, easing: "easeOutSine", duration: 250 },
        { value: 0.5, easing: "easeInOutQuad", duration: 500 },
      ],
      delay: anime.stagger(40, {
        grid: [GRID_WIDTH, GRID_HEIGHT],
        from: e.target.dataset.index,
      }),
    });
  };

  for (let i = 0; i < GRID_WIDTH; i++) {
    for (let j = 0; j < GRID_HEIGHT; j++) {
      dots.push(
        <div
          className="group cursor-crosshair rounded-full p-2 transition-colors hover:bg-zinc-700"
          data-index={index}
          onClick={handleClick}
          key={`${i}-${j}`}
        >
          <div
            className="dot-point h-2 w-2 rounded-full bg-zinc-500 opacity-50"
            data-index={index}
          ></div>
        </div>
      );

      index++;
    }
  }
  return (
    <section
      style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)` }}
      className="grid w-full"
    >
      {dots}
    </section>
  );
};

export default Dots;
