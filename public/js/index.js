const urlForm = document.querySelector('form')
const urlInput = document.querySelector('input')
const loading = document.getElementById('loading')
const shortId = document.getElementById('shortUrl')

urlForm.addEventListener('submit' , (e) =>{
    e.preventDefault()
    const originalurl = urlInput.value
    loading.textContent = "Creating...."
    shortId.textContent = ' '

    fetch('/shortUrl' , {
        method:POST,
        headers:{
            'Accept':'application/json',
            'Content-type':'application/json'
        },
        body: JSON.stringify({
            originalurl
        })
    })
    .then(res => res.json())
    .then(data =>{
        if(data.error)
        {
            loading.textContent = ' '
            alert(error)
        }
        else {
            alert(data.message)
            loading.textContent = ' '
            shortId.textContent = `Here is the short-url <a href=${data.originalURL} target="_blank" >${data.shortURL}</a>`
        }
    })
    .catch((e)=>{
        console.log(e);
        loading.textContent = '';
        shortUrl.textContent = 'Network Error! Please try again'
    })
})