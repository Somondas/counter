//set incial value
let count = 0;

// select value of buttons
const value = document.querySelector("#value")
const btns = document.querySelectorAll(".w3-button")
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const style = e.currentTarget.classList
    if (style.contains("w3-red")) {
      value.style.color = "red"
      count--
    }
    value.textContent = count
    if (style.contains("w3-green")) {
      value.style.color = "green"
      count++
    }
    value.textContent = count
    if (style.contains("w3-yellow")) {
      value.style.color = "black"
      count = 0
    }
    value.textContent =count
  })
})
