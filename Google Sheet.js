const scriptURL = 'https://script.google.com/macros/s/AKfycbzTxJ3VxlmwO4H63kWC-dfRlMqkNuOPaJR1kajYsnvolvzf49jmpss9WKy1_sqsEwka1Q/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
    e.preventDefault()

    fetch(scriptURL, {
        method: 'POST',
        body: new FormData(form)
    })
        .then(response => {
            alert('Form submitted successfully!')
            window.location.reload()
        })
        .catch(error => console.error('Error!', error.message))
})
