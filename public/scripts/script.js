fetch('/resources/posts.json')
    .then(response => response.json())
    .then(data => {
        for(let i = 0; i < data.length; i++) {
            const el = document.createElement('div')
            const elp = document.getElementById('posts')
            el.innerHTML = `
            <div class="container">
                <h1>${data[i].title}</h1><br>
                <p>${data[i].desc}</p>
                <i>${data[i].date}</i>
                <br><br>
                <a href="${i}">Read More</a>
                <!--either open new url or **new modal**-->
            </div>
            <hr>
            `
            elp.appendChild(el)
        }
    })
    .catch(err => console.log(err));