function solve()
{
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var c = document.getElementById('c').value;
    if (a != 0)
    {
        var delta = b*b-4*a*c;
        if (delta > 0)
        {
            var x1=parseFloat((-b + Math.sqrt(delta))/(2*a));
            var x2=parseFloat((-b - Math.sqrt(delta))/(2*a));
            document.getElementById('show').innerHTML='Phương trình có 2 nghiệm phân biệt<br> x1 = '+x1+'<br> x2 = '+x2;
        }
        else if (delta == 0)
        {
            x = parseFloat(-b/(2*a));
            document.getElementById('show').innerHTML='Phương trình có nghiệm kép<br> x1 = x2 = '+x;
        }
        else
        {
            document.getElementById('show').innerHTML='Phương trình vô nghiệm';
        }
    }
    else {
        if (b!= 0)
        {
            var x = -c/b;
            document.getElementById('show').innerHTML='Phương trình có 1 nghiệm<br> x = '+ parseFloat(x);
        }
        else document.getElementById('show').innerHTML='Phương trình vô nghiệm';
    }
}
function del()
{
    document.getElementById('a').value = null;
    document.getElementById('b').value = null;
    document.getElementById('c').value = null;
}