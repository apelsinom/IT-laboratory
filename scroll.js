const navLinks = document.querySelectorAll('.nav__link')

const mainLink = document.querySelector('.main__link')

const newArray = [...navLinks, mainLink]

for (let link of newArray) {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const ID = e.target.getAttribute('href').substr(1)
        document.getElementById(ID).scrollIntoView({
            behavior: "smooth",
            block: 'center'
        })
    })
}