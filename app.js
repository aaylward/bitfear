(function(){
  const area = document.getElementById("source-area");
  const output = document.getElementById("target-area");

  function transform(txt) {
    return [...txt].map((x) => x.charCodeAt().toString(2)).join(" ")
  }

  area.addEventListener("keyup", (e) => {
    output.innerText = transform(area.value);
  });
})()
