const navDropdown = document.querySelector('.nav__dropdown')

const dropdown = document.querySelector('.dropdown')

const navInput = document.querySelector('.nav__input')

navDropdown.addEventListener('click', ()=> {
    dropdown.classList.toggle('block')
})

const cards = [
    {   id:'01',
        name: 'Cold Brew',
        img: 'imgmen/Cold-Brew.jpg',
        price: '1000',
        data: 'МУЖСКИЕ СНОУБОРДЫ',
    },
    {
        id:'02',
        name: 'Box Knife',
        img: 'imgmen/Box-Knife.jpg',
        price: '1050',
        data: 'МУЖСКИЕ СНОУБОРДЫ',
    },
    {
        id:'03',
        name: 'Ejack Knife',
        img: 'imgmen/EJack.jpg',
        price: '1100',
        data: 'МУЖСКИЕ СНОУБОРДЫ',
    },
    {   
        id:'04',
        name: 'Dynamo',
        img: 'imgmen/dynamo.jpg',
        price: '1150',
        data: 'МУЖСКИЕ СНОУБОРДЫ',
    },
    {
        id:'05',
        name: 'Skate Banana',
        img: 'imgmen/Skate-Banana.jpg',
        price: '1200',
        data: 'МУЖСКИЕ СНОУБОРДЫ',
    },
    {
        id:'06',
        name: 'Terrain Wrecker',
        img: 'imgmen/Terrain-Wrecker.jpg',
        price: '1250',
        data: 'МУЖСКИЕ СНОУБОРДЫ',
    },
    {
        id:'07',
        name: 'BRD',
        img: 'imgmen/BRD.jpg',
        price: '1300',
        data: 'МУЖСКИЕ СНОУБОРДЫ',
    },
    {
        id:'08',
        name: 'Rocket',
        img: 'imgmen/rocket.jpg',
        price: '1350',
        data: 'МУЖСКИЕ СНОУБОРДЫ',
    },
    {
        id: '09',
        name: 'Rasman',
        img: 'imgmen/Rasman.jpg',
        price: '1400',
        data: 'МУЖСКИЕ СНОУБОРДЫ',
    },
    {
        id:'10',
        name: 'Double Dip',
        img: 'imgmen/Double-Dip.jpg',
        price: '1450',
        data: 'МУЖСКИЕ СНОУБОРДЫ',
    },
    {
        id:'11',
        name: 'MC Wayfinder II',
        img: 'imgmen/MC-Wayfinder-II.jpg',
        price: '1500',
        data: 'МУЖСКИЕ СНОУБОРДЫ',
    },
    {
        id:'12',
        name: 'Jamie Lynn Short Wide',
        img: 'imgmen/jamie-lynn-short-wide.jpg',
        price: '1550',
        data: 'МУЖСКИЕ СНОУБОРДЫ',
    },
    {
        id:'13',
        name: 'TRS',
        img: 'imgmen/TRS.jpg',
        price: '1600',
        data: 'МУЖСКИЕ СНОУБОРДЫ',
    },
    {
        id:'14',
        name: 'T.Rice Pro',
        img: 'imgmen/T-Rice-Pro.jpg',
        price: '1650',
        data: 'МУЖСКИЕ СНОУБОРДЫ',
    },
    {
        id:'15',
        name: 'Box Scratcher',
        img: 'imgmen/Burtner-Box.jpg',
        price: '1700',
        data: 'МУЖСКИЕ СНОУБОРДЫ',
    },
    {
        id:'16',
        name: 'T.Rice Orca',
        img: 'imgwomen/T-Rice-Orca.jpg',
        price: '1000',
        data: 'ЖЕНСКИЕ СНОУБОРДЫ',
    },
    {
        id:'17',
        name: 'Rocket',
        img: 'imgwomen/rocket.jpg',
        price: '1050',
        data: 'ЖЕНСКИЕ СНОУБОРДЫ',
    },
    {
        id:'18',
        name: 'Cortado',
        img: 'imgwomen/Cortado.jpg',
        price: '1100',
        data: 'ЖЕНСКИЕ СНОУБОРДЫ',
    },
    {
        id:'19',
        name: 'Glider',
        img: 'imgwomen/Glider.jpg',
        price: '1150',
        data: 'ЖЕНСКИЕ СНОУБОРДЫ',
    },
    {
        id:'20',
        name: 'Dynamiss',
        img: 'imgwomen/Dynamiss.jpg',
        price: '1200',
        data: 'ЖЕНСКИЕ СНОУБОРДЫ',
    },
    {
        id:'21',
        name: 'Ryme',
        img: 'imgwomen/Ryme.jpg',
        price: '1250',
        data: 'ЖЕНСКИЕ СНОУБОРДЫ',
    },
    {
        id:'22',
        name: 'No. 43',
        img: 'imgwomen/No-43.jpg',
        price: '1300',
        data: 'ЖЕНСКИЕ СНОУБОРДЫ',
    },
    {
        id:'23',
        name: 'Split BRD',
        img: 'imgwomen/Split-BRD.jpg',
        price: '1350',
        data: 'ЖЕНСКИЕ СНОУБОРДЫ',
    },
    {
        id:'24',
        name: 'T.Rice Orca',
        img: 'imgyouth/T-Rice-Orca.jpg',
        price: '1000',
        data: 'ДЕТСКИЕ СНОУБОРДЫ',
    },
    {
        id:'25',
        name: 'Banana Blaster',
        img: 'imgyouth/Banana-Blaste.jpg',
        price: '1050',
        data: 'ДЕТСКИЕ СНОУБОРДЫ',
    },
    {
        id:'26',
        name: 'T.Ripper',
        img: 'imgyouth/T-Ripper.jpg',
        price: '1100',
        data: 'ДЕТСКИЕ СНОУБОРДЫ',
    },
    {
        id:'27',
        name: 'DynaSword',
        img: 'imgyouth/DynaSword.jpg',
        price: '1150',
        data: 'ДЕТСКИЕ СНОУБОРДЫ',
    }
]

localStorage.setItem('cards', JSON.stringify(cards))

const dropdownLink = document.querySelectorAll('.dropdown__link')

const flexContainer = document.querySelector('.flex')


const getCardsPaint = (arr) => {
    flexContainer.innerHTML = ''
    arr.forEach(item => {
        const cardsItem = document.createElement('div')
        cardsItem.classList.add('flex__item')
        cardsItem.innerHTML = `       
            <div style='background-image: url(${item.img});' class="flex__img flex__img_bg1"> 
                <div class="flex__over">
                    <a class="flex__link" data-id='${item.id}' href="#">КУПИТЬ</a>
                </div>
            </div>
            <h3>${item.name}</h3>
            <p>${item.price}</p>
        `
        flexContainer.append(cardsItem)
        console.log(item);
    })
}


navInput.addEventListener('input', (event)=> {
    const inputValue = navInput.value
    const arr = cards.filter(item => 
        item.name.toLowerCase().includes
        (inputValue.toLowerCase()));
   
    getCardsPaint(arr)
})

// const navCards = document.querySelector('.nav__cards')

// navCards.addEventListener('click', (event)=> {
//     const navInput = document.querySelector('.nav__input')

//     const inputValue = navInput.value
//     const arr = cards.filter(item => 
//         item.name.toLowerCase().includes
//         (inputValue.toLowerCase()));
   
//     getCardsPaint(arr)
// })

dropdownLink.forEach(link => {
    link.addEventListener('click',(event) => {
        event.preventDefault()
        let linkValue = link.innerHTML
       
        const arr = cards.filter(item => linkValue === item.data) 
        
        getCardsPaint(arr)
     })
})


