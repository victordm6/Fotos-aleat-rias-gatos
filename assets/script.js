const BASE_URL = 'https://thatcopy.pw/catapi/';
const botao = document.getElementById('change-pokemon');


const getpokemon = async () => {
    const data = await fetch(BASE_URL)
        .then((res) => res.json())
        .catch((e) => console.log(e));
    
    return data.webpurl;
};

const loadImg = async () => {
    const Img = document.getElementsByTagName('pokemon');
    Img.src = await getpokemon();
};

botao.addEventListener('click', loadImg);

loadImg();
