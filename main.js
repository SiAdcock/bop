const init = () => {
  //   const regionEls = document.getElementsByClassName("board__region");
  const boardEl = document.getElementById("board");
  const regionNameEl = document.getElementById("region-name");

  boardEl.addEventListener("mouseover", (e) => {
    regionNameEl.value = e.target.getAttribute("data-region-id");
  });
};

init();
