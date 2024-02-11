require("dotenv").config()
const express = require("express")
const cors = require("cors")
const axios = require("axios").default

const app = express()
const port = process.env.PORT || 4000

app.use(cors())

app.get("/api/yelp", async (req, res) => {
  const { location, categories } = req.query

  const YELP_API_URL = `https://api.yelp.com/v3/businesses/search?location=${location}&categories=${categories}&sort_by=best_match&limit=20`

  try {
    const response = await axios.get(YELP_API_URL, {
      headers: {
        Authorization: `Bearer ${process.env.YELP_KEY}`,
        "Content-Type": "application/json",
      },
    })

    const data = response.data
    res.json(data)
  } catch (error) {
    console.error("Error fetching data:", error)
    res.status(500).json({ error: "Internal Server Error" })
  }
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
