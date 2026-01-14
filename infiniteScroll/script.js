function infiniteScroll(eleArr, speed, direction) {
  const childArr = [...eleArr.children];
  const axis = (direction === 'top' || direction === 'bottom')? 'height' : 'width';
  const parElSize = parseFloat(window.getComputedStyle(eleArr)[axis]);

  // Initialization
  let curLen = 0;
  childArr.forEach(cur => {
    cur.style[direction] = `${curLen}px`;
    curLen += parseFloat(window.getComputedStyle(cur)[axis]);
  });

  // Run
  function run() {
    childArr.forEach(cur => {
      const curPos = parseFloat(window.getComputedStyle(cur)[direction]) || 0;
      const curSize = parseFloat(window.getComputedStyle(cur)[axis]);
      let newPos = (curPos < (curSize * -1))? curLen - curSize : curPos - speed;
      cur.style[direction] = `${newPos}px`;
    });
  };

  let animationId;
  function animate() {
    run();
    animationId = requestAnimationFrame(animate);
  }
  animationId = requestAnimationFrame(animate);
}

const parent0 = document.querySelector('#parent0');
const parent1 = document.querySelector('#parent1');
infiniteScroll(parent0, 2, 'left');
infiniteScroll(parent1, 2, 'bottom');