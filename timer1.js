let alarmTimes = process.argv.slice(2);


const alarm = alarmTimes => {
  if (alarmTimes !== undefined) {
    for (const i of alarmTimes) {
      if (i > 0) {
        setTimeout(() => {
          console.log('it worked')
          process.stdout.write('\x07');
        }, i * 1000)
      }
    }
  } 
}

alarm(alarmTimes);


