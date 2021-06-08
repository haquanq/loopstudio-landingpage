const cardImg = document.querySelectorAll(".card_img");
const cardText = document.querySelectorAll(".card_title");
const card_btn = document.querySelectorAll(".card_btn");
const button = document.querySelectorAll(".card_btn button");
const card_cont = document.querySelectorAll(".card_container")

let mobile = new Boolean();

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
            mobile = true;
            console.log(mobile);
        } 
        if (window.innerWidth > 680) {
            imgData.getImg(imgData.desktop)
            mobile = false;
            console.log(mobile);
        }
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

window.addEventListener("resize", () => { imgData.resizeImg() })

animStart = () => {
    
}

for (let i = 0; i < card_cont.length; i++) {
    card_cont[i].addEventListener("mouseenter", () => {
        if (mobile == false) {
            card_btn[i].style.display = "block";
            setTimeout(() => {card_btn[i].style.height = "50px"}, 50)
            setTimeout(() => {button[i].style.display = "initial"},50)
            setTimeout(() => {button[i].style.opacity = 1}, 70)
        }
    })
    card_cont[i].addEventListener("mouseleave", () => {
        if (mobile == false) {
            button[i].style.opacity = null
            setTimeout(() => {button[i].style.display = null}, 100)
            setTimeout(() => {card_btn[i].style.height = null}, 150)
            setTimeout(() => {card_btn[i].style.display = null}, 300)    
        }
    })

    card_cont[i].addEventListener("touchstart", () => {
        if (mobile == false) {
            card_btn[i].style.display = "block";
            setTimeout(() => {card_btn[i].style.height = "50px"}, 50)
            setTimeout(() => {button[i].style.display = "initial"},50)
            setTimeout(() => {button[i].style.opacity = 1}, 70)
        }
    })
    card_cont[i].addEventListener("touchend", () => {
        if (mobile == false) {
            button[i].style.opacity = null
            setTimeout(() => {button[i].style.display = null}, 100)
            setTimeout(() => {card_btn[i].style.height = null}, 150)
            setTimeout(() => {card_btn[i].style.display = null}, 300)    
        }
    })


}
