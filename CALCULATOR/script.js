let display = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let buttonsArray = Array.from(buttons);

let string = '';

buttonsArray.forEach(btn => {
    btn.addEventListener('click', (e) => {
        //FOR DELETE BUTTON
        if (e.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            display.value = string;
        }


        //FOR AC BUTTON
        else if (e.target.innerHTML == 'AC') {
            string = '';
            display.value = string;
        }
        //FOR = 
        else if (e.target.innerHTML == '=') {
            string = eval(string);
            display.value = string;
        }
        //FOR CALCULATE SQUARE ROOT
        else if (e.target.innerHTML == '√') { 
            string = Math.sqrt(eval(string)); 
            display.value = string;
        }

        //FOR PERCENTAGE BUTTON
        else if(e.target.innerHTML == '%'){
            string= eval(string)/100;
            display.value=string;
        }

        //FOR ^ BUTTON
        else if(e.target.innerHTML == '^'){
            string += '**';
            display.value = string;
        }

        //FOR PIE
        else if(e.target.innerHTML == 'π'){ 
            string = eval(string) * 3.14; 
            display.value = string;
        }

        //FOR DOLLAR
        else if(e.target.innerHTML == '$'){
            string = eval(string) * 85;
            display.value = string;
        }

        //FOR EXPONENT
        else if(e.target.innerHTML == 'e'){ 
            string = eval(string) * 2.718; 
            display.value = string;
        }

        else {
            string += e.target.innerHTML;
            display.value = string;
        }
    });
});
