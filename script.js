function setHoverBackground(card) {
    const img = card.querySelector('#bsImg img');
    if (!img) return;
  
    const canvas = document.createElement('canvas');
    canvas.width = img.naturalWidth || img.width;
    canvas.height = img.naturalHeight || img.height;
    const ctx = canvas.getContext('2d');

    // filter idea by @rocchokcoco from medium
    ctx.filter = 'blur(50px)';
    ctx.drawImage(img, 0, 0);
  
    const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    let r = 0, g = 0, b = 0;
    const totalPixels = data.length / 4;
    for (let i = 0; i < data.length; i += 4) {
      r += data[i];
      g += data[i + 1];
      b += data[i + 2];
    }
    r = Math.round(r / totalPixels);
    g = Math.round(g / totalPixels);
    b = Math.round(b / totalPixels);
  
    card.style.backgroundColor = `rgb(${r} ${g} ${b} / 50%)`;
  }
  
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', () => setHoverBackground(card));
    card.addEventListener('mouseleave', () => {
      card.style.backgroundColor = '';
    });
  });
  