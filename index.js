// import express
const { response } = require('express')
const express = require('express')
const data = require('./characters.json')
const app = express()
const port = 4000

app.listen(port, () => console.log(`Listening on: ${port}`))

const render = (message) => {
    const document = `<html>
    <head>
      <title>Home</title>
    </head>
    
    <body>
      <h1>${message}</h1>
    </body>
    </html>`
    return document
}

app.get(
'/test', // route
(request, response) => { // Handler callback
response.send('Did I pass');
}
)

app.get(
    '/html', // route
    (request, response) => { // Handler callback
    response.send(page)
    }
    )

    app.get(
        '/user/:name', // route, paramter 'name'
        (request, response) => { // Handler callback
        const message = `Welcome ${request.params.name}`;
        const page = render(message)
        response.send(page)
        }
        )


        app.get(
            '/chars/:bloodtype', // route
            (request, response) => { // Handler callback
                const filterChars = 
                    data.filter((char) => 
                    request.params.bloodtype.toLowerCase() === char.blood.toLowerCase()
                    )
                    response.send(filterChars)
                }
        )