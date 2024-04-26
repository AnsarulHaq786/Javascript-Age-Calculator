let userInput = document.querySelector("#date");
userInput.max = new Date().toISOString().split("T")[0];

var button = document.querySelector("#btn");
button.addEventListener("click",calculateAge);

function calculateAge()
{
    let output = document.querySelector("#output");

    let dateOfBirth = new Date(userInput.value);
    let d1 = dateOfBirth.getDate();
    let m1 = dateOfBirth.getMonth();
    let y1 = dateOfBirth.getFullYear();
    
    let todayDate = new Date();
    let d2 = todayDate.getDate();
    let m2 = todayDate.getMonth();
    let y2 = todayDate.getFullYear();

    let d,m,y;
    y=y2-y1;
    if(m2>=m1)
        m=m2-m1;
    else{
        y--;
        m=12+m2-m1;
    }
    if(d2>=d1)
    d=d2-d1
    else{
        m--;
        d = getDaysInMonths(y,m+1)+d2-d1;
    }
    if(m<0)
    {
        y--;
        m=11;
    }
    output.innerHTML=`You are ${y} year ${m} month ${d} days old.`;
    output.style.color = "black";
    output.style.fontSize = "2vw";
    output.style.margin ="4.2vh 0px 0px 3.2vw";
    output.style.fontFamily ="Courier New";
    
function getDaysInMonths(year, month)
{
    return new Date(year, month, 0).getDate();
}
}
