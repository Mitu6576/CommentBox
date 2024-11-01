let div=document.getElementById('main')
div.style.backgroundColor="tomato"
div.style.width="500px"
div.style.height="500px"
div.style.margin="0 auto"
div.style.padding="10px"
div.style.borderRadius="20%"
div.style.border="2px solid black"
let h1=document.getElementById('h1')
h1.style.paddingTop="20px"
let ref=document.getElementById('ref')
ref.addEventListener('click',function(){
    location.reload()
})
let input=document.getElementById('input')
input.style.padding="20px 30px"
input.style.borderRadius='10px'
input.style.border="2px solid black"
let btn=document.getElementById('btn')
btn.addEventListener('click',function(){
    let input=document.getElementById('input')
    let inputValue=input.value
    if(inputValue){
    let commentlist=document.createElement('div')
    commentlist.classList.add("commentBox")
    commentlist.textContent=inputValue
    let comment=document.getElementById('comment')
    comment.appendChild(commentlist)
    input.value=""
}
else{
    alert("write your comment")
}

})
