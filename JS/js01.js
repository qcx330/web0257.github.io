function calculateAge()
{
    var now = new Date();
    var bornYear = document.getElementById('bornYear').value;
    var currentYear = now.getFullYear();
    var name = document.getElementById('name').value;
    var age = currentYear - bornYear;
    if (name == "" || bornYear == "")
        alert('Vui lòng nhập đầy đủ thông tin');
    else if (age <= 0 || age > currentYear)
        alert('Nhập năm sinh không lệ');
    else
        document.getElementById('show').innerHTML = 'Chào bạn '+ name +'! \n Tuổi của bạn là '+age;
}