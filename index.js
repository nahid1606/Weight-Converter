const inputEl=document.getElementById("input")
const errorEl=document.getElementById("error")


function updateResults()
{
    if(inputEl<=0 || isNaN(inputEl.value))
    {
        errorEl.innerText="Please enter a correct and valid number";
    }

}

inputEl.addEventListener("input",updateResults)
