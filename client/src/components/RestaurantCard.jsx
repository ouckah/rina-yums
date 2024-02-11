const RestaurantCard = ({ restaurant, onClick }) => {
  return (
    <div
      className="flex flex-col justify-start items-start w-96 h-full bg-white rounded-2xl gap-5 cursor-pointer transition-all duration-300 hover:scale-110 hover:rotate-12"
      onClick={onClick}
    >
      <img
        src={restaurant.image_url}
        className="w-full h-1/2 object-cover rounded-t-2xl"
        alt={`${restaurant.name}_logo`}
      />
      <div className="flex flex-col justify-items-start w-full h-1/2 p-10">
        <div className="flex justify-between items-center w-full">
          <h1 className="text-2xl font-bold text-red-200">
            {restaurant.name} 🎀
          </h1>
          <h1 className="text-xl font-bold text-red-400">{restaurant.price}</h1>
        </div>
        <h1 className="text-lg font-medium text-red-400">
          ⭐ {restaurant.rating}
        </h1>
        <div className="flex flex-row w-full gap-2">
          {restaurant.categories.map((category, i) => (
            <>
              <h1 className="text-md font-medium text-red-300">
                {category.title}
              </h1>
              {i !== restaurant.categories.length - 1 ? <h1>🎀</h1> : <></>}
            </>
          ))}
        </div>
        <div className="h-1/4" />
        <h1 className="text-right font-thin text-red-400">
          {restaurant.location.address1}
        </h1>
      </div>
    </div>
  )
}

export default RestaurantCard
