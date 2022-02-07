/*
* Excercise 1
*
*/



/*
* Then write a function that changes the text and the color inside the div
*
*/
const cb=document.querySelector('#color-block');
const cn=document.querySelector('#color-name');

function changeColor(){
    //Write a condition determine what color it should be changed to
    
    if(cn.textContent=='#F08080'){
        cb.style.background='#FFFFFF';
        //change the background color using JS
        cn.textContent='#FFFFFF';
        //Change the text of the color using the span id color-name

    }
    else{
        //change the background color using JS
        cb.style.background='#F08080';
        cn.textContent='#F08080';
        //Change the text of the color using the span id color-name


    }
}

cb.addEventListener('click',changeColor);


/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/


const submit=document.querySelector('#convertbtn');
submit.addEventListener('click',convertTemp);
/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/

function convertTemp(){
    //Calculate the temperature here
    const input=document.querySelector('#f-input').value;
    const result=Math.round((input-32)/9*5);
    document.querySelector('#c-output').textContent=result;
    

    //Send the calculated temperature to HTML

}


