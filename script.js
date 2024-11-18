// document.querySelector("#o1").addEventListener("click", () => {
//     const o1 = document.querySelector("#o1")

//     o1.classList.toggle("ramecek")
// })

// document.querySelector("#o2").addEventListener("click", () => {
//     const o2 = document.querySelector("#o2")

//     o2.classList.toggle("ramecek")
// })

// document.querySelector("#o3").addEventListener("click", () => {
//     const o3 = document.querySelector("#o3")

//     o3.classList.toggle("ramecek")
// })

// document.querySelector("#o4").addEventListener("click", () => {
//     const o4 = document.querySelector("#o4")

//     o4.classList.toggle("ramecek")
// })

// document.querySelector("#o5").addEventListener("click", () => {
//     const o5 = document.querySelector("#o5")

//     o5.classList.toggle("ramecek")
// })
/*
const vyberOdpoved = (e) => {
    e.target.classList.toggle("ramecek")
}

document.querySelector("#o1").addEventListener("click", vyberOdpoved)
document.querySelector("#o2").addEventListener("click", vyberOdpoved)
document.querySelector("#o3").addEventListener("click", vyberOdpoved)
document.querySelector("#o4").addEventListener("click", vyberOdpoved)
document.querySelector("#o5").addEventListener("click", vyberOdpoved)*/
document.querySelector("#reg_form").addEventListener("submit", (e) => {
    e.preventDefault()
    const jmeno = document.querySelector("#jmeno").value
    const vek = document.querySelector("#vek").value
    const heslo = document.querySelector("#heslo").value
    console.log(`${jmeno} ${vek} ${heslo}`)
    if(heslo.length > 12) {
        document.body.innerHTML = "Uspesne registrovan"
    } else {
        document.body.innerHTML = "Heslo je kratke"
    }
})
