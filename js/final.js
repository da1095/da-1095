window.onload=function()
{
    var Form = document.getElementById("form_ref");
    Form.onsubmit = function()
    {
        if (/[A-Za-z]\d[A-Za-z] ?\d[A-Za-z]\d/.test(Form.Pcode.value))
        {
            return (true)
        }
        alert("You have entered an invalid Postal Code!")
        return (false)
    }       
}

function onhiring() 
{
    var container = document.getElementById("hire_tittle");
    container.innerHTML = "";
    container.innerHTML="Hourly Rate"

    var container2 = document.getElementById("hire_rate");
    container2.innerHTML = "";
    var input=document.createElement("input");
    input.setAttribute("type","number");
    input.setAttribute("name","hrate");
    input.setAttribute("id","hrate");
    input.setAttribute("step",".01");
    input.setAttribute("required","");
    container2.appendChild(input);
}
    
function nohiring()
{
    var container = document.getElementById("hire_tittle");
    container.innerHTML = "";

    var container2 = document.getElementById("hire_rate");
    container2.innerHTML = "";
}

    