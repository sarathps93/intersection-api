document.addEventListener("DOMContentLoaded", function () {
  const imageObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const lazyImage = entry.target
        console.log("lazy loading ", lazyImage)
        lazyImage.src = lazyImage.dataset.src
      }
    })
  });
  const arr = document.querySelectorAll('img.lazy_images')
  arr.forEach((v) => {
    imageObserver.observe(v);
  })
})