const urlForm = document.querySelector('form')
const urlInput = document.querySelector('input')
const loading = document.getElementById('loading')
const shortId = document.getElementById('shortUrl')

urlForm.addEventListener('submit' , (e) =>{
    e.preventDefault()
    const originalurl = urlInput.value
    loading.textContent = "Creating...."
    shortId.textContent = ''
    console.log('k');
    fetch('/shortUrl' , {
        method:'POST',
        // mode:'cors',
        // credentials: 'same-origin',
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
            console.log('k');
            loading.textContent = ''
            alert(data.error)
        }
        else {
            // console.log('error');
            alert(data.message)
            loading.textContent = ''
            shortId.innerHTML = `Your shortUrl is: <a target="_blank" href=${data.link} rel="noopener noreferer">${data.shorturl} </a>`
        }
    })
    .catch((e)=>{
        // console.log(e);
        loading.textContent = '';
        shortUrl.textContent = 'Network Error! Please try again'
    })
})