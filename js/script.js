/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   

const list = document.querySelector('ul.student-list');
let listStudents=list.children;
let nbr_items_show=10;
let numberOfStudents=list.children.length;
let numberOfPages=Math.ceil(numberOfStudents/nbr_items_show);
console.log(numberOfStudents);
console.log(numberOfPages);

function showPage(listStudents,page){
 
for(let i = 0; i < numberOfStudents; i += 1) {
   let startIndex = (page*nbr_items_show)-nbr_items_show;
   let endIndex =page*nbr_items_show;
   // show only 10 list items per page
    if (i >= startIndex && i <= endIndex ) {
       list.children[i].style.display = 'block';
    } else {
       list.children[i].style.display = 'none';
    }
}

}

function appendPageLinks(){

   let divpage=document.querySelector('.page');
   let div=document.createElement('DIV');
   div.className="pagination";
   let ul=document.createElement('UL');
   divpage.append(div);
   div.append(ul);

for(let i=0;i<numberOfPages;i++)
{
let li=document.createElement('LI');
let a=document.createElement('A');

a.setAttribute('href', '#');
a.textContent=i+1;
ul.append(li);
li.append(a);
}
let aa=document.querySelectorAll('.pagination >ul>li>a');
aa[0].className="active";
let active=document.querySelector('.active');

function setAction(event){
   for(let i=0;i<numberOfPages;i++)
   {
   aa[i].classList.remove('active');
   }
     let e=event.target;
     const currentPage = parseInt(e.textContent);
     console.log(currentPage);
     showPage(list,currentPage);
     e.classList.add('active');
   }
for(let i=0;i<numberOfPages;i++)
{
   aa[i].addEventListener('click',(e)=>
   {
  
      setAction(event);
      
   }
)
}
}


//calling the functions 
showPage(list,1);
appendPageLinks();

// the searching bar without affecting the index.html page
const divSearch=document.createElement('div');
divSearch.className="student-search";
const input=document.createElement('input');
input.placeholder="Search for students...";
const button=document.createElement('button');
button.textContent="Search";
divSearch.append(input);
divSearch.append(button);
let header=document.querySelector('.page-header');
header.append(divSearch);
let pagination=document.querySelector('.pagination');
// adding a click event listener on the submit button

 button.addEventListener('click',()=>{

  let  listNames=document.querySelectorAll('ul.student-list>li>div>h3');
   for(let i = 0; i < list.children.length; i ++)
   {
 let name=listNames[i].textContent;
   if(name.includes(input.value))
  {
   list.children[i].style.display = 'block';
  
    }
    else
     {
      
     list.children[i].style.display = 'none';
    }
   
   }
    
  
});
 

 
         

// adding an event listener on key up 
// so the searcher won't wait until he presses submit to retreive the search result
input.addEventListener('keyup',()=>
{listNames=document.querySelectorAll('ul.student-list>li>div>h3');
for(let i = 0; i < list.children.length; i ++){
let name=listNames[i].textContent;
if(name.includes(input.value)){
list.children[i].style.display = 'block';
}
   else{
      list.children[i].style.display = 'none';
   }
   }
}) 