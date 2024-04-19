


  const scriptURL = 'https://script.google.com/macros/s/AKfycbyNJDcxbHpkoLYtklzQwX1ZAC60Q3SOFKKPgGTYt29kDS9AJbqtHRGsH_ITYb111NEz/exec'
  const form = document.forms['submit-to-google-sheet']
  const tostyMessage= document.getElementById("demo")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log(response,
        tostyMessage.innerHTML="User data save successfully",
        setTimeout(()=>{
            tostyMessage.innerHTML=""
        },2000)
    ))
      .catch(error => console.error('Error!', error.message))
  })



