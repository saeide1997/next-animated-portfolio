export const galleryProject = {
    id: 'project1',
    title: 'گالری تصویر ساده',
    description: 'کامپوننتی برای نمایش گالری تصویر با حالت grid.',
    preview: '/images/gallery-preview.png',
    codes: {
      html: `<!DOCTYPE html>
<html lang="fa" dir="rtl">
  <head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="style.css" />
    <title>گالری تصاویر</title>
  </head>
  <body>
    <h2>گالری تصاویر</h2>

    <div class="gallery-container">
      <button class="arrow left" onclick="clickHandler('go')">❮</button>
      <button class="arrow right" onclick="clickHandler('forward')">❯</button>
      <div class="gallery-slides gallery-image-div" id="slides">
        <img
          class="main-image"
          src="https://static.vecteezy.com/ti/photos-gratuite/t1/29360891-une-petit-vert-lezard-seance-sur-haut-de-une-arbre-bifurquer-generatif-ai-gratuit-photo.jpg"
          alt="عکس 1"
        />
        <img
          src="https://static-cse.canva.com/blob/1626008/ComposeStunningImages16.jpg"
          alt="عکس 2"
        />
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/036/324/708/small/ai-generated-picture-of-a-tiger-walking-in-the-forest-photo.jpg"
          alt="عکس 3"
        />
      </div>
    </div>
    <div class="thumbnails">
      <img
      src="https://static.vecteezy.com/ti/photos-gratuite/t1/29360891-une-petit-vert-lezard-seance-sur-haut-de-une-arbre-bifurquer-generatif-ai-gratuit-photo.jpg"
      alt="عکس ۱"
        onclick="changeImage(0)"
      />
      <img
      src="https://static-cse.canva.com/blob/1626008/ComposeStunningImages16.jpg"
      alt="عکس ۲"
        onclick="changeImage(1)"
      />
      <img
      src="https://static.vecteezy.com/system/resources/thumbnails/036/324/708/small/ai-generated-picture-of-a-tiger-walking-in-the-forest-photo.jpg"
      alt="عکس ۳"
        onclick="changeImage(2)"
      />
    </div>
    <script src="script.js"></script>
  </body>
</html>`, // کد کامل html که دادی
      css: `
      
      @font-face {
    font-family: 'Samim';
    src: url('/fonts/Samim.eot'); 
    src: url('/fonts/Samim.eot') format('embedded-opentype'),
    url('/fonts/Samim.woff') format('woff'),
    url('/fonts/Samim.ttf') format('truetype');
  }
    body {
  font-family: Samim;
  direction: rtl;
  text-align: right;
  background: #f9f9f9;
  margin: 0;
  padding: 2rem;
}

.gallery-container {
  position: relative;
  max-width: 600px;
  margin: auto;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.gallery-slides {
  display: flex;
  transition: transform 0.4s ease-in-out;
}

.gallery-slides img {
  width: 100%;
  flex-shrink: 0;
  border-radius: 12px;
}
.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 2rem;
  background-color: rgba(255, 255, 255, 0.7);
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 50%;
  z-index: 1;
}

.arrow.right {
  left: 10px;
}

.arrow.left {
  right: 10px;
}
.thumbnails {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
  flex-wrap: wrap;
}
.thumbnails img {
  width: 100px;
  height: 60px;
  object-fit: cover;
  cursor: pointer;
  border-radius: 8px;
  opacity: 0.7;
  transition: 0.3s;
  border: 2px solid transparent;
}

.thumbnails img:hover,
.thumbnails img.active {
  opacity: 1;
  border-color: #333;
}`,  // کد کامل css که دادی
      js: `
function clickHandler(dir) {
    const selected = document.querySelector('.selectedImage')
    const album = document.querySelector('.gallery-image-div')
    if (dir == 'forward') {
        if (selected == null) {
            changeImage(album.firstElementChild)
            return
        } else {
            const next = selected.nextElementSibling
            if (next == null) {
                changeImage(album.firstElementChild)
                return
            } else {
                changeImage(next)
            }
        }
    } else {
        if (selected == null) {
            changeImage(album.lastElementChild)
            return
        } else {
            const prev = selected.previousElementSibling
            if (prev == null) {
                changeImage(album.lastElementChild)
            } else {
                changeImage(prev)
            }
        }
    }
    selected.classList.remove('selectedImage')
}

function changeImage(elem) {

    const mainImage = document.querySelector('.main-image')
    const src = elem.getAttribute('src')
    const srcMain = mainImage.getAttribute('src')

    mainImage.setAttribute('src', src)
    elem.setAttribute('src', srcMain)

    document.querySelectorAll('.selectedImage').forEach(sale => {
        sale.classList.remove('selectedImage')
    })
    elem.classList.add('selectedImage')
}`,   // کد کامل js که دادی
    },
  };
  