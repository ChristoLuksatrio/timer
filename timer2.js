const stdin = process.stdin;
const stdout = process.stdout;
const numArr = ['0','1','2','3','4','5','6','7','8','9'];

stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    console.log("Thanks for using me, ciao!")
    process.exit();
  }
  if (key === 'b') {
    stdout.write('\x07');
  }

  for (const i of numArr) {
    if (key === i) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, Number(i) * 1000)
    }
  }
  
});
