let counter = 1;
showPortfolios(counter);

document.querySelector(".thprev").addEventListener("click", () => {
    computePortfolios(-1)
})

document.querySelector(".thnext").addEventListener("click", () => {
    computePortfolios(1)
})
//to make interval, function computePortfolios() {showPortfolios((counter += 1)) the add last line
function computePortfolios(t) {
    showPortfolios((counter += t))
}

function showPortfolios(n) {
  let i;
  let portfolios = document.getElementsByClassName("portfolio");

  if (n > portfolios.length) {
    counter = 1;
  }
  if (n < 1) {
    counter = portfolios.length;
  }

  for( i = 0; i < portfolios.length; i++){
      portfolios[i].style.display = "none"
  }

  portfolios[counter - 1].style.display = "flex"
}

//setInterval(computePortfolios, 6000);