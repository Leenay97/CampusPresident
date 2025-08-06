document.addEventListener('DOMContentLoaded', () => {

    const startBut = document.querySelector('.taketest')

    const interval = setInterval(() => {
        startBut.classList.toggle('big')
    }, 600)

    const questions = document.querySelectorAll('.question')
    console.log(questions)

    const results = [
        { name: 'Каваии Akito', desc: 'Ты любишь поспать, но всегда готов проснуться рано ради друзей, завтрака и зарядки.', url: 'akito' },
        { name: 'Безумная Jess', desc: 'АААА! Ты всегда можешь поднять настроение в трудную минуту.', url: 'jess' },
        { name: 'Медитирующий Tyler', desc: 'Ты готов выкладываться на полную, чтобы другие были счастливы.', url: 'tyler' },
        { name: 'Мама Bonnie', desc: '', url: 'bonnie' },
        { name: 'Поварёнок Colin', desc: 'Ты любишь вкусно покушать, но никогда не переедаешь.', url: 'colin' },
        { name: 'Ответственная Violet', desc: 'Ты умеешь держать ситуацию под контролем.', url: 'violet' },
        { name: 'Фея чистоты Liana', desc: 'Ты ответственный и чистоплотный. Тебе всегда можно довериться.', url: 'liana' },
        { name: 'Мастер Walt', desc: 'На тебя можно положиться в любой трудно ситуации.', url: 'walt' },
        { name: 'Спасатель Natasha', desc: 'Ты всегда помогаешь близким и никогда не оставишь друга в беде.', url: 'natasha' },
        { name: 'Мастерица Joan', desc: 'Ты самостоятельный и самодостаточный. Всё, что тебе нужно ты можешь сделать сам.', url: 'joan' },
        { name: 'Заводная Tessa', desc: 'Когда ты говоришь "хэй", все говорят "хо"', url: 'tessa' },
        { name: 'Крутая Alina', desc: 'Через любые трудности ты готов пройти с улыбкой.', url: 'alina' },
        { name: 'Гитарист Aiden', desc: 'Ты - сердце и душа компании. Все тебя любят!', url: 'aiden' },
        { name: 'Тихий Den', desc: 'Ты спокойный, но всегда готов прийти на помощь и не боишься сложных задач.', url: 'den' },
        { name: 'Волейболистка Aimin', desc: 'Ты никогда не сдаешься, ведь только так побеждают!', url: 'aimin' },
        { name: 'Рукодельница Naya', desc: 'Твои руки из золота. Цени это и используй!', url: 'naya' },
        { name: 'Блестящая Luna', desc: 'Твоё сияние озаряет весь кампус!', url: 'luna' },
        { name: 'Космический Austin', desc: 'Даже одна песчинка может повлиять на вселенную. Действуй!', url: 'austin' },
        { name: 'Рокстар Sammy', desc: 'ЕЕЕЕ РООООК! Без тебя любая вечеринка полный отстой.', url: 'sammy' },
        { name: 'Зажигательная Charlie', desc: 'Твои танцы сведут с ума любого. ', url: 'charlie' },
        { name: 'Gwen всемогущая', desc: 'Ты можешь всё! Нужно просто захотеть.', url: 'gwen' },
        { name: 'Forestина всевидящая', desc: 'Ты четко видишь своё будущее и идешь к назначенной цели', url: 'forest' },
        { name: 'Юморная Max', desc: 'Твои шутки заставляют лежать маршрутки.', url: 'max' },
        { name: 'Поймавшая дзен Mackenzie', desc: 'Твоя душа спокойна, ты расслаблен(а) и полностью контролируешь свои эмоции.', url: 'mackenzie' },
        { name: 'Андрей Федоров', desc: 'Ты - это загадка, разгадать которую может не каждый.', url: 'fedorov' },
    ]

    const opt1 = document.querySelectorAll('.option1')
    const opt2 = document.querySelectorAll('.option2')
    const opt3 = document.querySelectorAll('.option3')
    const opt4 = document.querySelectorAll('.option4')
    const opt5 = document.querySelectorAll('.option5')

    startBut.addEventListener('click', () => {
        document.querySelector('.main').classList.add('hidden')
        questions[0].classList.remove('hidden')
        clearInterval(interval)
    })

    opt1.forEach(item => {
        item.addEventListener('click', () => {
            questions[0].classList.add('hidden')
            questions[1].classList.remove('hidden')
            console.log('dsadsa')
        })
    })
    opt2.forEach(item => {
        item.addEventListener('click', () => {
            questions[1].classList.add('hidden')
            questions[2].classList.remove('hidden')
            console.log('dsadsa')
        })
    })
    opt3.forEach(item => {
        item.addEventListener('click', () => {
            questions[2].classList.add('hidden')
            questions[3].classList.remove('hidden')
            console.log('dsadsa')
        })
    })
    opt4.forEach(item => {
        item.addEventListener('click', () => {
            questions[3].classList.add('hidden')
            questions[4].classList.remove('hidden')
            console.log('dsadsa')
        })
    })

    opt5.forEach(item => {
        item.addEventListener('click', () => {
            questions[4].classList.add('hidden')
            const load = () => {
                let rand = Math.floor(Math.random() * results.length)
                console.log(rand)
                console.log(results[rand].url)
                document.querySelector('.photo').src = `./img/${results[rand].url}.jpg`
                document.querySelector('.title').innerHTML = results[rand].name
                document.querySelector('.desc').innerHTML = results[rand].desc
            }
            load()
            document.querySelector('.result').classList.remove('hidden')
            console.log('dsadsa')
        })
    })


})