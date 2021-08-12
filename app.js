(function(){
  const area = document.getElementById("source-area");
  const output = document.getElementById("target-area");

  function pad(str) {
    return "0".repeat(8 - str.length) + str;
  }

  function transform(txt) {
    return [...txt].map((x) => pad(x.charCodeAt().toString(2))).join(" ")
  }

  area.addEventListener("keyup", (e) => {
    output.innerText = transform(area.value);
  });
})()
