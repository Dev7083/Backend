const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT


const githubData = {
    "login": "Dev7083",
    "id": 113914000,
    "node_id": "U_kgDOBsowkA",
    "avatar_url": "https://avatars.githubusercontent.com/u/113914000?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Dev7083",
    "html_url": "https://github.com/Dev7083",
    "followers_url": "https://api.github.com/users/Dev7083/followers",
    "following_url": "https://api.github.com/users/Dev7083/following{/other_user}",
    "gists_url": "https://api.github.com/users/Dev7083/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Dev7083/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Dev7083/subscriptions",
    "organizations_url": "https://api.github.com/users/Dev7083/orgs",
    "repos_url": "https://api.github.com/users/Dev7083/repos",
    "events_url": "https://api.github.com/users/Dev7083/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Dev7083/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Devendra Singh",
    "company": null,
    "blog": "https://dev7083.github.io/Portfolio/",
    "location": "Prayagraj",
    "email": null,
    "hireable": null,
    "bio": "Hey, I am Dev, a passionate coder and learner. I enjoy creating web applications and Python based Projects.",
    "twitter_username": "GeekyDev_",
    "public_repos": 33,
    "public_gists": 0,
    "followers": 15,
    "following": 18,
    "created_at": "2022-09-19T13:32:47Z",
    "updated_at": "2024-09-08T17:54:13Z"
}

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('GeekyDev_')
})

app.get('/night', (req, res) => {
    res.send(' <h1> Hey Batman It\'s Night. Let\'s Save the Gotham.</h1>')
}
)

app.get('/day', (req, res) => {
    res.send(' <h1> Hey Batman It\'s Day. Let\'s sleep we\'ve to save the city during night.</h1>')
}
)

app.get('/github', (req, res) => {
    res.json(githubData)

})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})