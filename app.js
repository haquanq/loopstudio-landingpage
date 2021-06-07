const cardImg = document.querySelectorAll(".card_img");
const cardText = document.querySelectorAll(".card_title");

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
            imgData.getImg(imgData.mobile)
        } else imgData.getImg(imgData.desktop)
    }
}

imgData.resizeImg()
window.addEventListener("resize", () => { imgData.resizeImg() })

const menu_btn = document.querySelector(".nav__container__menu")
let menuState = false
menu_btn.addEventListener("click", () => {
    if (menuState == false) {
        menu_btn.classList.add("open")
        return menuState = true
    }
    if (menuState == true) {
        menu_btn.classList.remove("open")
        return menuState = false
    } 
})












