console.log("loading system");

const allCollapseable = document.getElementsByClassName("icon-collapse");

for (let i = 0; i < allCollapseable.length; i++) {
  allCollapseable[i].addEventListener("click", function onClick() {
    const panel = this.nextSibling.nextSibling;
    const elem = allCollapseable[i];
    const img = elem.getElementsByClassName("imgs");
    if (panel.style.display === "none" || !panel.style.display) {
      panel.style.display = "block";
      img[0].src = "./assets/images/icon-minus.svg";
    } else {
      panel.style.display = "none";
      img[0].src = "./assets/images/icon-plus.svg";
    }
  });
}
