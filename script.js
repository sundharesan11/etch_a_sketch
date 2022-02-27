let color="black";
let click=true;
function generateBoard(size)
{
    const container=document.querySelector(".container");
    let grid =container.querySelectorAll('div');
    grid.forEach((div) => div.remove());
    container.style.gridTemplateColumns=`repeat(${size},1fr)`;
    container.style.gridTemplateRows=`repeat(${size},1fr)`;
    let s=size*size;
    for(let i=0;i<s;i++)
    {
        let grid=document.createElement('div');
        grid.addEventListener('mouseover', colorchoice);
        grid.style.backgroundColor='white';
        container.insertAdjacentElement("beforeend",grid);
    }
}
generateBoard(16);

function changeSize(input)
{
    if(input>=2 && input<=100)
    {
        document.querySelector(".error").style.display='none';
        generateBoard(input);
    }
    else{
        document.querySelector(".error").style.display='flex';

    }
}
function colorchoice()
{
    if(click)
    {
        if(color=="random")
        {
        let r=Math.floor(Math.random()*255);
        let g=Math.floor(Math.random()*255);
        let b=Math.floor(Math.random()*255);
        this.style.backgroundColor=`rgb(${r},${g},${b})`;
         }
    else
        this.style.backgroundColor=color;
    }
}
function changecolor(choice)
{
   color=choice;
}
function resetboard()
{
    const container=document.querySelector(".container");
    let grid =container.querySelectorAll('div');
    grid.forEach((div) => div.style.backgroundColor="white");
}

document.querySelector("body").addEventListener("click",(e)=>
{
   if(e.target.tagName != "BUTTON")
   {
    click=!click;
    if(click)
      document.querySelector(".mode").textContent="Mode:Coloring";
    else
      document.querySelector(".mode").textContent="Mode:Not Coloring";
   }
})