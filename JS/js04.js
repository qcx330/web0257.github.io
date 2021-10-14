function solve() {
    var num1 = parseInt(document.forms.form['num1'].value);
    var num2 = parseInt(document.forms.form['num2'].value);
    var calc = document.forms.form['calc'].value;
    var kq;
    switch(calc) {
        case '+': kq = num1 + num2; break;
        case '-': kq = num1 - num2; break;
        case '*': kq = num1 * num2; break;
        case '/':
            if (num2 != 0)
            {
                var x = num1 / num2;
                kq = x.toFixed(2);
            }
            else kq ='Không thể chia cho 0\n';
        break;
    }
    document.forms.form['show'].value =kq;
    return false;
}