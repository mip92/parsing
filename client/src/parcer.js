import axios from "axios";
axios.get('https://www.jdoodle.com/online-java-compiler/').then(resp => {
    dispatch(setPizzas(resp.data.pizzas))
})

const title = document.querySelector('title');
console.log(title.innerHTML);


const body = document.querySelector('body');
for (let i = 1; i <= 4; i++) {
    let index = `h${i}`
    let k = body.querySelectorAll(index);
    for (let el of k) {
        console.log(el.innerHTML);
    }
    console.log(`На странице ${k.length} компонента/ов ${index}`);
}
let newWindow = open('https://advego.com/text/seo/', 'example', 'width=200,height=200, toolbar=yes')
/*newWindow.onload = function() {
    let html = `<div style="font-size:30px">Добро пожаловать!</div>`;
    newWindow.document.body.insertAdjacentHTML('afterbegin', html);
};*/
newWindow.onload = function() {
    newWindow.close();
    alert(newWindow.closed); // true
};

