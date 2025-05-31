const imgContent = document.querySelectorAll(".img-content-hover");

function showImgContent(e) {
  for (var i = 0; i < imgContent.length; i++) {
    x = e.pageX;
    y = e.pageY;
    imgContent[i].style.transform = `translate3d(${x}px, ${y}px, 0)`;
  }
}

document.addEventListener("mousemove", showImgContent);

const [red, green, blue] = [69, 111, 225]
const section1 = document.querySelector('.section1')

window.addEventListener('scroll', () => {
  const y = 1 + (window.scrollY || window.pageYOffset) / 150
  const [r, g, b] = [red/y, green/y, blue/y].map(Math.round)
  section1.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
})