// Mobile Navbar
const toggleBtn = document.getElementsByClassName("toggle-btn")[0]
const navLinks = document.getElementsByClassName("nav-links")[0]

toggleBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active")
    toggleBtn.classList.toggle("active")
})

// Drop Down Description
const des = document.getElementsByClassName("description")
const indicator = document.getElementsByClassName("indicator")
const split = document.getElementsByClassName("split")

document.querySelectorAll(".btn").forEach((item, i) => {
    item.addEventListener("click", () => {
        var split_index = parseInt(i / 4)
        var btn_index = split_index * 4
        if (btn_index === i) {
            if (
                des[btn_index + 1].classList.contains("active") === false &&
                des[btn_index + 2].classList.contains("active") === false &&
                des[btn_index + 3].classList.contains("active") === false
            ) {
                split[split_index].classList.toggle("active")
            }
        }
        if (btn_index + 1 === i) {
            if (
                des[btn_index].classList.contains("active") === false &&
                des[btn_index + 2].classList.contains("active") === false &&
                des[btn_index + 3].classList.contains("active") === false
            ) {
                split[split_index].classList.toggle("active")
            }
        }
        if (btn_index + 2 === i) {
            if (
                des[btn_index].classList.contains("active") === false &&
                des[btn_index + 1].classList.contains("active") === false &&
                des[btn_index + 3].classList.contains("active") === false
            ) {
                split[split_index].classList.toggle("active")
            }
        }
        if (btn_index + 3 === i) {
            if (
                des[btn_index].classList.contains("active") === false &&
                des[btn_index + 2].classList.contains("active") === false &&
                des[btn_index + 1].classList.contains("active") === false
            ) {
                split[split_index].classList.toggle("active")
            }
        }
        des[i].classList.toggle("active")
        indicator[i].classList.toggle("active")
    })
})

// Scroll Highlighting
const A = document.getElementById("A")
const span_a = document.getElementById("a")
const B = document.getElementById("B")
const span_b = document.getElementById("b")
const C = document.getElementById("C")
const span_c = document.getElementById("c")
const footer = document.getElementsByTagName("footer")[0]
const scrollbar = document.getElementsByClassName("scroll-bar-links")

function getPosition(element) {
    let x = 0
    let y = 0
    while (element) {
        x += element.offsetLeft - element.scrollLeft + element.clientLeft
        y += element.offsetTop - element.scrollLeft + element.clientTop
        element = element.offsetParent
    }

    return { x: x, y: y - 5 }
}

window.addEventListener("scroll", () => {
    const scrolled = window.scrollY
    const positionA = getPosition(A)
    const position_a = getPosition(span_a)
    const positionB = getPosition(B)
    const position_b = getPosition(span_b)
    const positionC = getPosition(C)
    const position_c = getPosition(span_c)
    const position_footer = getPosition(footer)

    document.querySelectorAll(".scroll-bar-links").forEach((item) => {
        item.classList.remove("active")
    })

    if (scrolled > positionA.y && scrolled < position_a.y) {
        scrollbar[0].classList.add("active")
        return
    }
    if (scrolled > position_a.y && scrolled < positionB.y) {
        scrollbar[1].classList.add("active")
        return
    }
    if (scrolled > positionB.y && scrolled < position_b.y) {
        scrollbar[2].classList.add("active")
        return
    }
    if (scrolled > position_b.y && scrolled < positionC.y) {
        scrollbar[3].classList.add("active")
        return
    }
    if (scrolled > positionC.y && scrolled < position_c.y) {
        scrollbar[4].classList.add("active")
        return
    }
    if (scrolled > position_c.y && scrolled < position_footer.y) {
        scrollbar[5].classList.add("active")
        return
    }
})

// Change Scroll Behavior
function scrollTo(elementId) {
    document.getElementById(elementId).scrollIntoView({ behavior: "smooth" })
}
