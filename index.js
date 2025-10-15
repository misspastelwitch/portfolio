const imgContent = document.querySelectorAll(".img-content-hover");

function showImgContent(e) {
  for (let i = 0; i < imgContent.length; i++) {
    const x = e.pageX;
    const y = e.pageY;
    imgContent[i].style.transform = `translate3d(${x}px, ${y}px, 0)`;
  }
}

document.addEventListener("mousemove", showImgContent);

const cornflowerBlue = { r: 195, g: 214, b: 248 };

window.addEventListener('scroll', () => {
  const scrollPercentage = Math.min(window.scrollY / (document.body.scrollHeight - window.innerHeight), 1);


  const startColor = { r: 254, g: 247, b: 247 };

  const r = Math.round(startColor.r + (cornflowerBlue.r - startColor.r) * scrollPercentage);
  const g = Math.round(startColor.g + (cornflowerBlue.g - startColor.g) * scrollPercentage);
  const b = Math.round(startColor.b + (cornflowerBlue.b - startColor.b) * scrollPercentage);

  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

document.querySelector('.scroll-up')?.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

document.querySelector('.go-down')?.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  });
});