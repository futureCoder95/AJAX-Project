let fetchBtn = document.getElementById("fetchBtn");
fetchBtn.addEventListener('click', () => {
    console.log("fetchBtn Clicked");

    //Initialize the xhr object
    let xhr = new XMLHttpRequest;

    //OPEN THE OBJECT -------->
    // xhr.open("GET", 'https://jsonplaceholder.typicode.com/', true);
    xhr.open("GET", 'readme.txt', true);

    xhr.onprogress = function () {
        console.log("In Progress");
    }

    //What to do when the Response is ready;
    xhr.onload = function () {
        document.getElementById('heading').innerHTML = this.responseText
        document.getElementById('heading').style.color = "red"

        //agar readme.txt mile to this.responseText krdo
        if (this.status === 200) {
            console.log(this.responseText);
        }
        //verna error dikha do 
        else {
            console.log('Error occured');
        }
    }

    //send the request
    xhr.send()
})





//  POPULATE BUTTON JS
let popBtn = document.getElementById('popBtn');
popBtn.addEventListener('click', popBtnHandlerFunction())

function popBtnHandlerFunction() {
    console.log("popBtn Clicked");

    //Initialize the xhr object
    let xhr = new XMLHttpRequest;

    //OPEN THE OBJECT -------->
    xhr.open("GET", 'https://jsonplaceholder.typicode.com/users', true);
    // xhr.open("GET", 'readme.txt', true);

    xhr.onprogress = function () {
        console.log("In Progress");
    }

    // What to do when the Response is ready;
    xhr.onload = function () {
        //agar readme.txt mile to this.responseText krdo
        if (this.status === 200) {
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            str = ""
           let list = document.getElementById("listItems");
            for (key in obj) {
                str += `<li> ${obj[key].name}</li> `;
            }
            list.innerHTML = str
        }
        //verna error dikha do 
        else {
            console.log('Error occured');
        }
    }

    //send the request
    xhr.send()
    console.log("Done");
}