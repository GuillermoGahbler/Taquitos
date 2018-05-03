$('.consumeTaco').on("click",function(event){
event.preventDefault()
const id = $(this).parent().find(".id").text().replace(".","")
 $.put(`/${id}`,true)
 .then(data => console.log(data))
})

$('#new_taco').on("click",(event)=>{
    event.preventDefault()
    console.log(data)
})