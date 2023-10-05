let myleads=[]
let oldLeads=[]









const inputBtn=document.getElementById("input-btn")
const inputEl=document.getElementById("input-el")
const ulEl=document.getElementById("ul-el")
const deleteBtn=document.getElementById("delete-btn")
const saveBtn=document.getElementById("save-btn")
const topic=document.getElementById("topic")
const catt=document.getElementById("cate")
const  dir=document.getElementById("input-l")

const inputBtn1=document.getElementById("input-btn2")








let leadsFromLocalStorage=JSON.parse(localStorage.getItem("myleads"))
console.log(leadsFromLocalStorage)

if(leadsFromLocalStorage){
    myleads=leadsFromLocalStorage
    render(myleads)
}




saveBtn.addEventListener("click",function(){
    //console.log(tabs[0].url)
    // chrome.tabs.query({currentWindow: true, active: true}, function(tabs)

    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
        myleads.push(tabs[0].url)
        localStorage.setItem("myleads",JSON.stringify(myleads))
        render(myleads)

        
    })
    
})





inputBtn.addEventListener("click",function(){
    console.log("Button Clicked")
    myleads.push(inputEl.value)
    
    
    inputEl.value=""

    

    
    localStorage.setItem("myleads",JSON.stringify(myleads))
     console.log(myleads)
     render(myleads)


     console.log(localStorage.getItem("myleads"))

})


function render(leads){
    let listItems=""
    for(let i=0;i<leads.length;i++){
        listItems +="<li><a target='_blank' href='"+leads[i]+"'>"+leads[i]+"</a></li>"
    }

ulEl.innerHTML=listItems
}


deleteBtn.addEventListener("dblclick",function(){
    console.log("Double Click")
    localStorage.clear()
    myleads=[]
    render(myleads)
})


inputBtn1.onclick = () => {
    const head = document.getElementById("tab");
    // const a = dir.value; // Assign the value of dir to a
    // console.log(a);
    // head.value = a; // Assign the value of a to the head element's value
    // console.log(head.value);
    d=document.querySelectorAll(".DOM")


    d.forEach(v=>{
        console.log(v.value)
    })
}














