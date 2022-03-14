const container = document.createElement('div');
container.className = 'container';
container.style = '    display: flex;\n' +
    '    flex-direction: column;\n' +
    '    flex-wrap: wrap;\n' +
    '    align-content: center;\n' +
    '    align-items: center;'
const form = document.createElement('form');
form.className = 'form';
form.style = '    display: flex;\n' +
    '    flex-direction: column;\n' +
    '    flex-wrap: wrap;' +
    '    width: 300px;'
const title = document.createElement('h1');
title.className = 'title';
title.style = 'font-family: \'Roboto\';\n' +
    'font-style: normal;\n' +
    'font-weight: 600;\n' +
    'font-size: 48px;\n' +
    'line-height: 56px;\n' +
    '\n' +
    'color: rgba(0, 0, 0, 0.7);'
const input = document.createElement('input');
input.className = 'input';
input.placeholder = 'Your Name'
input.style = 'border: none;\n' +
    '    border-top: 3px solid black;' +
    '       margin: 30px 0px;' +
    'font-family: \'Roboto\';\n' +
    'font-style: normal;\n' +
    'font-weight: 600;\n' +
    'font-size: 14px;\n' +
    'line-height: 16px;\n' +
    'padding: 10px 0;\n' +
    'color: rgba(0, 0, 0, 0.7);'
const input2 = document.createElement('input');
input2.style = 'border: none;\n' +
    '    border-top: 3px solid black;' +
    '        margin: 30px 0px;' +
    'font-family: \'Roboto\';\n' +
    'font-style: normal;\n' +
    'font-weight: 600;\n' +
    'font-size: 14px;\n' +
    'line-height: 16px;\n' +
    'padding: 10px 0;\n' +
    'color: rgba(0, 0, 0, 0.7);'
input2.className = 'input';
input2.placeholder = 'Your Email'
const btnContainer = document.createElement('div');
btnContainer.className = 'btnContainer';
btnContainer.style = 'display: flex;\n' +
    '    justify-content: center;'
const btn = document.createElement('button');
btn.innerHTML = 'SEND MESSAGE';
btn.style = 'width: 230px;\n' +
    'height: 57px;\n' +
    'background: #CA0000;\n' +
    'border: 1px solid #FF0000;\n' +
    'border-radius: 5px;' +
    'font-family: \'Roboto\';\n' +
    'font-style: normal;\n' +
    'font-weight: 600;\n' +
    'font-size: 18px;\n' +
    'line-height: 21px;\n' +
    'color: #FFFFFF;'
btn.className = 'btn';
const span = document.createElement('span');
span.innerHTML = 'Name';
title.innerHTML = 'Let’s task ';
container.append(title);
form.append(input);
form.append(input2);
btnContainer.append(btn);
form.append(btnContainer);
container.append(form);
document.querySelector('body').append(container);