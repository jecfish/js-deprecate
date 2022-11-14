let i = 0;
const maxi = 2;

while (i < maxi) {
  doSomething(5000);
  i++;
}

function doSomething(breakDuration) {
  console.profile(`hello_${i}`);

  console.log("hello %i", i);
  console.timeStamp();

  const started = performance.now();
  let canBreak = false;

  while (!canBreak) {
    canBreak = performance.now() - started >= breakDuration;
  }

  console.profileEnd(`hello_${i}`);
}
