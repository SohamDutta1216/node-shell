module.exports = process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();
  if (cmd === "pwd") {
    const pwd = process.cwd().toString();
    process.stdout.write(pwd);
  }

  process.stdout.write("You typed:" + cmd);
  process.stdout.write("\nprompt >");
});

require("./bash");
