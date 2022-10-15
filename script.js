const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");

const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
    modal.classList.toggle("hide");
    fade.classList.toggle("hide");
};


[openModalButton, closeModalButton, fade].forEach((el) => {
    el.addEventListener("click", () => toggleModal());
})


//barney

const openModalButtonBarney = document.querySelector("#open-modalBarney");
const closeModalButtonBarney = document.querySelector("#close-modalBarney");

const modalBarney = document.querySelector("#modalBarney");
const fadeBarney = document.querySelector("#fade");

const toggleModalBarney = () => {
    modalBarney.classList.toggle("hide");
    fade.classList.toggle("hide");
};


[openModalButtonBarney, closeModalButtonBarney, fade].forEach((el) => {
    el.addEventListener("click", () => toggleModalBarney());
})

//lily

const openModalButtonLily = document.querySelector("#open-modalLily");
const closeModalButtonLily = document.querySelector("#close-modalLily");

const modalLily = document.querySelector("#modalLily");
const fadeLily = document.querySelector("#fade");

const toggleModalLily = () => {
    modalLily.classList.toggle("hide");
    fade.classList.toggle("hide");
};


[openModalButtonLily, closeModalButtonLily, fade].forEach((el) => {
    el.addEventListener("click", () => toggleModalLily());
})

//marshall

const openModalButtonMarshall = document.querySelector("#open-modalMarshall");
const closeModalButtonMarshall = document.querySelector("#close-modalMarshall");

const modalMarshall = document.querySelector("#modalMarshall");
const fadeMarshall = document.querySelector("#fade");

const toggleModalMarshall = () => {
    modalMarshall.classList.toggle("hide");
    fade.classList.toggle("hide");
};


[openModalButtonMarshall, closeModalButtonMarshall, fade].forEach((el) => {
    el.addEventListener("click", () => toggleModalMarshall());
})


//robin

const openModalButtonRobin = document.querySelector("#open-modalRobin");
const closeModalButtonRobin = document.querySelector("#close-modalRobin");

const modalRobin = document.querySelector("#modalRobin");
const fadeRobin = document.querySelector("#fade");

const toggleModalRobin = () => {
    modalRobin.classList.toggle("hide");
    fade.classList.toggle("hide");
};


[openModalButtonRobin, closeModalButtonRobin, fade].forEach((el) => {
    el.addEventListener("click", () => toggleModalRobin());
})

//tracy
const openModalButtonTracy = document.querySelector("#open-modalTracy");
const closeModalButtonTracy = document.querySelector("#close-modalTracy");

const modalTracy = document.querySelector("#modalTracy");
const fadeTracy= document.querySelector("#fade");

const toggleModalTracy= () => {
    modalTracy.classList.toggle("hide");
    fade.classList.toggle("hide");
};


[openModalButtonTracy, closeModalButtonTracy, fade].forEach((el) => {
    el.addEventListener("click", () => toggleModalTracy());
})