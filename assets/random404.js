document.addEventListener("DOMContentLoaded", function () {
    const images = ["404_01.jpeg", "404_02.jpeg"];
    const selected = images[Math.floor(Math.random() * images.length)];
    console.log("Selected image:", selected);
    const img = document.createElement("img");
    img.src = `/assets/${selected}`;
    img.alt = "404 image";
    img.style = "margin-top: 2rem; max-width: 300px;";
    document.getElementById("random-img").appendChild(img);
  });
  