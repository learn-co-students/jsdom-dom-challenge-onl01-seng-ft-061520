document.addEventListener("DOMContentLoaded", () => {
  let counterNumber = parseInt(document.getElementById("counter").innerText);

  document.getElementById("minus").addEventListener("click", function(e) {
    counterNumber -= 1;
    document.getElementById("counter").innerText = counterNumber.toString();
  });

  document.getElementById("plus").addEventListener("click", function(e) {
    counterNumber += 1;
    document.getElementById("counter").innerText = counterNumber.toString();
  });

  document.getElementById("heart").addEventListener("click", function(e) {
    const newLike = document.createElement("li");
    newLike.innerText = "+1"
    document.querySelector('.likes').appendChild(newLike);
  });

  document.getElementById("comment-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const newLi = document.createElement("p");
    newLi.innerText = document.getElementById("comment-input").value
    document.getElementById("list").appendChild(newLi);
    e.target.reset();
  });

});
