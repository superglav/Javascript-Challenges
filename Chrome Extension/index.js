let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById('dlt-all')
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
const tabBtn = document.getElementById('savetab-btn')

//saves tab from chrome tab
tabBtn.addEventListener('click',function (){

    chrome.tabs.query({active:true , currentWindow: true}, function chromeTab(tabs){
    


    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
    })
})

// Delete button to clear the local storage
deleteBtn.addEventListener('dblclick', function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
})


if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    console.log(myLeads)
    render(myLeads)
}
// input save button to hold an input in the local storage and push it to myLeads array
inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    render(myLeads)
})

// function that gives to an argument place in html 
function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems  
}


