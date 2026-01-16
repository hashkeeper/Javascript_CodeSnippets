function infiniteScroll(eleArr, speed, direction, childPadding = 0, parentPadding = 0) {
  const childArr = [...eleArr.children];
  const childObj = {};
  const axis = (direction === 'top' || direction === 'bottom')? ['height', 'width'] : ['width', 'height'];

  // Initialization
  let arrLen = 0;
  let largestElLen = 0;
  let largestElOpLen = 0;
  childArr.forEach(cur => {
    const curLen = parseFloat(window.getComputedStyle(cur)[axis[0]]) + childPadding;
    const curOpLen = parseFloat(window.getComputedStyle(cur)[axis[1]]) + childPadding;
    cur.style[direction] = `${arrLen}px`;
    arrLen += curLen;
    if(curLen > largestElLen){ largestElLen = curLen }
    if(curOpLen > largestElOpLen){ largestElOpLen = curOpLen }
  });

  if(window.getComputedStyle(eleArr)[axis[0]] || window.getComputedStyle(eleArr)[axis[1]]) {
    eleArr.style[axis[0]] = `${arrLen - largestElLen}px`;
    eleArr.style[axis[1]] = `${largestElOpLen}px`;
  }

  // Run
  function run() {
    childArr.forEach(cur => {
      const curPos = parseFloat(window.getComputedStyle(cur)[direction]) || 0;
      const curLen = parseFloat(window.getComputedStyle(cur)[axis[0]]) + childPadding;
      const newPos = (curPos < (curLen * -1))? arrLen - curLen : curPos - speed;
      cur.style[direction] = `${newPos}px`;
    });
  };

  let animationId;
  function animate() {
    run();
    animationId = requestAnimationFrame(animate);
  }

  eleArr.addEventListener('mouseenter', () => {
    cancelAnimationFrame(animationId);
    animationId = null;
  })

  eleArr.addEventListener('mouseleave', () => {
  animationId = requestAnimationFrame(animate);
  })

  animationId = requestAnimationFrame(animate);
}

const parent0 = document.querySelector('#parent0');
const parent1 = document.querySelector('#parent1');
infiniteScroll(parent0, 2, 'left', 25);
infiniteScroll(parent1, 2, 'bottom', 25, 100);