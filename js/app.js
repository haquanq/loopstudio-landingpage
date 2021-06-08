const cardImg = document.querySelectorAll(".card_img");
const cardText = document.querySelectorAll(".card_title");
const card_cont = document.querySelectorAll(".card_container")
const overlayText = document.querySelectorAll(".card_container div h1")
const overlayBtn = document.querySelectorAll(".card_btn")

const imgData = {
    name: ["curiosity", "deep earth", "fisheye", "from above", "grid", "night arcade", "pocket borealis", "soccer team"],
    type: "jpg",
    desktop: "./images/desktop/",
    mobile: "./images/mobile/",
    targetURL: [],
    data: [],
    sorting: () => {
        cardText.forEach( e => {
            let a = new Array()
            let b = new String();
            for (let i = 0; i < imgData.name.length; i++) {
                a = imgData.name[i].split(/\s/ig)
                for (x of a) {
                    if (e.textContent.includes(x)) { b = a.join(" ") }
                }
            }
            imgData.data.push(b)
        })
    },
    getImg: (method) => {
        imgData.targetURL = [];
        imgData.sorting()
        for (let i = 0; i < imgData.name.length; i++) {
            imgData.targetURL.push(`${method}image-${imgData.data[i].replace(/\s/g, "-")}.${imgData.type}`);
            cardImg[i].src = imgData.targetURL[i]
        }        
    },
    resizeImg: () => {
        if (window.innerWidth <= 680) {
            imgData.getImg(imgData.mobile);
        } 
        if (window.innerWidth > 680) {
            imgData.getImg(imgData.desktop)
        }
    } 
}

imgData.resizeImg()
window.addEventListener("resize", () => { imgData.resizeImg() })

const menu_btn = document.querySelector(".nav__container__menu")
const menuCon = document.querySelector(".nav__menu")
const menuText = document.querySelector(".nav__menu div")

let menuState = false
menu_btn.addEventListener("click", () => {
    if (menuState == false) {
        menu_btn.classList.add("open")

        menuCon.style.display = "flex"
        setTimeout(() => {menuCon.style.height = "100%"}, 30)
        setTimeout(() => {menuText.style.display = "flex"}, 250)
        setTimeout(() => {menuText.style.opacity = 1}, 500)
        return menuState = true
    }
    if (menuState == true) {
        menu_btn.classList.remove("open")

        menuText.style.opacity = 0
        setTimeout(() => {menuText.style.display = null}, 300)
        setTimeout(() => {menuCon.style.height = null}, 300)
        setTimeout(() => {menuCon.style.display = null}, 700)
        return menuState = false
    } 
})

window.addEventListener("resize", () => { imgData.resizeImg() })

for (let i = 0; i < card_cont.length; i++) {
    card_cont[i].addEventListener("mouseenter", () => {
        if (window.innerWidth > 550) {
            cardImg[i].style.transform = "rotate(2deg) scale(1.2)"
            overlayText[i].style.marginBottom = "50px"
            setTimeout(() => {overlayBtn[i].style.display = "initial"}, 30)
            setTimeout(() => {overlayBtn[i].style.opacity = 1}, 50)
        }
    })
    card_cont[i].addEventListener("mouseleave", () => {
        if (window.innerWidth > 550) {
            cardImg[i].style.transform = null
            overlayBtn[i].style.opacity = null
            setTimeout(() => {overlayBtn[i].style.display = null}, 50)
            setTimeout(() => {overlayText[i].style.marginBottom = null}, 50)
        }
    })

    card_cont[i].addEventListener("mouseenter", () => {
        if (window.innerWidth <= 550) {
            cardImg[i].style.transform = "rotate(10deg) scale(1.5)"
            overlayText[i].style.marginBottom = "40px"
            setTimeout(() => {overlayBtn[i].style.display = "initial"}, 30)
            setTimeout(() => {overlayBtn[i].style.opacity = 1}, 50)
        }
    })
    card_cont[i].addEventListener("mouseleave", () => {
        if (window.innerWidth <= 550) {
            cardImg[i].style.transform = null
            overlayBtn[i].style.opacity = null
            setTimeout(() => {overlayBtn[i].style.display = null}, 50)
            setTimeout(() => {overlayText[i].style.marginBottom = null}, 50)
        }
    })
}
