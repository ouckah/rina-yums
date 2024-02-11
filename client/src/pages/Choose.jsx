import { useEffect, useState } from "react"
import Confetti from "react-confetti"
import RestaurantCard from "../components/RestaurantCard"

function Choose() {
  const [loading, setLoading] = useState(false)

  const [restaurants, setRestaurants] = useState([])

  const fetchRestaurants = async () => {
    setLoading(true)

    const location = "Columbus OH"
    const categories = "vegetarian"
    const apiUrl = `${
      process.env.REACT_APP_API_URL
    }/api/yelp?location=${encodeURIComponent(
      location
    )}&categories=${encodeURIComponent(categories)}`

    try {
      const response = await fetch(apiUrl)

      if (!response.ok) {
        throw new Error("Network error")
      }

      const data = await response.json()
      const restaurantData = data.businesses

      setRestaurants(restaurantData)
    } catch (error) {
      console.error(error)
    }

    setLoading(false)
  }

  useEffect(() => {
    fetchRestaurants()
  }, [])

  const removeFromFront = () => {
    setRestaurants((prevRestaurants) => {
      const newRestaurants = [...prevRestaurants]
      newRestaurants.shift()
      return newRestaurants
    })
  }

  const removeFromBack = () => {
    setRestaurants((prevRestaurants) => {
      const newRestaurants = [...prevRestaurants]
      newRestaurants.pop()
      return newRestaurants
    })
  }

  const redirect = (url) => {
    window.open(url, "_blank")
  }

  if (loading || restaurants.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center w-full h-full bg-red-200 gap-12">
        {" "}
      </div>
    )
  }

  return (
    <>
      <div className="flex flex-col justify-center items-center w-full h-full bg-red-200 gap-12">
        {restaurants.length > 1 ? (
          <div className="flex flex-row justify-center items-center w-full h-1/2 gap-24">
            <RestaurantCard
              restaurant={restaurants[0]}
              onClick={removeFromBack}
            />

            <h1 className="text-5xl font-black text-white">OR</h1>

            <RestaurantCard
              restaurant={restaurants[restaurants.length - 1]}
              onClick={removeFromFront}
            />
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center w-full h-full gap-12">
            <Confetti />

            <h1 className="text-8xl font-black text-white animate-bounce">
              Winner!
            </h1>
            <div className="flex flex-row justify-center items-center w-full h-1/2 gap-24">
              <RestaurantCard
                restaurant={restaurants[0]}
                onClick={() => {
                  redirect(restaurants[0].url)
                  console.log(restaurants[0].url)
                }}
              />
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default Choose
