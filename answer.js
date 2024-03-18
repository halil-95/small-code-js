var n, answer, text, percent80, percent20, pastWin, pastLoss, cleanSum;
function notDied(sum = 100, k1, k2) {
    percent80 = (sum / 100 * 80);
    percent20 = (sum / 100 * 20);
    if (k1 >= 1.5 && k2 >= 4.0) {
        pastWin = percent80 * k1;
        pastLoss = ((pastWin - percent80)) * k2 + percent20;
        cleanSum = pastLoss - pastWin
        text = `\nобщий вставляемый сумма:              ${Math.round(percent80 + (pastWin - percent80))}pуб\n 
вставте сумму на  первый команду :      ${Math.round(percent80)}руб\n    
вставте сумму  на  второй  команду :    ${Math.round(pastWin - percent80)}руб \n
выигрыш :                               ${Math.round(pastWin)}руб \n
проигрыш :                              ${Math.round(pastLoss)}руб\n 
чистая выручка составляет               ${Math.round(cleanSum)}руб\n
`;
    }
    else {
        text = `\n этими соотношениями ты проиграешь! \n`;
    }

    return text;

}


// console.log(152-20%)
console.log(notDied(1000, 1.55, 4.22))