require('dotenv').config();
const express = require('express')
const optimizeImages = require('../src/index.js')

const app = express()

//generate from https://tinypng.com/developers
const tinypngApiKey = process.env.YOUR_API_SECRET_KEY
const root = "public"
const options = {
  dirName: "optimized-images" 
}
const port = 3000

app.use(optimizeImages(root, tinypngApiKey, options))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
