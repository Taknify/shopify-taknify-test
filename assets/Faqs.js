document.addEventListener('DOMContentLoaded', function(){
  const faqs = document.querySelectorAll(".faq");
  console.log("connected to gaq")
  faqs.forEach((faq) =>{
  faq.addEventListener("click",() =>{
    faq.classList.toggle("active");
  })  
}
})
