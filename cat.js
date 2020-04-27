module.exports = process.stdin.on("data", (data) => {
  // input 'cat bash.js'
  const initialArr = data.toString().trim();
  //initialArr = 'cat bash.js'
  const inputArray = initialArr.split(" ");
  // inputArray = ['cat','bash.js']
  const cmd = inputArray[0];
  const fileName = inputArray[1];

  if (cmd === "cat") {
   const cat = fs.readFile((err,fileName) => {
     if (err) throw err;
     console.log(fileName);
   };
   process.stdout.write(cat);
  });

  process.stdout.write("You typed:" + cmd + fileName);
  process.stdout.write("\nprompt >");
});
