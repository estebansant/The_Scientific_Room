let questions = document.querySelectorAll(".question");

questions.forEach( question => {
    question.addEventListener("click", () =>{
        question.classList.toggle("active");
    })
})