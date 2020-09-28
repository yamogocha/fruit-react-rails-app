# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

#
fruits = ["Mango", "Pineapple", "Passion fruit", "Dragonfruit"]
fruits.each{|fruit| Fruit.create(name: fruit, description: "I am a delicious #{fruit}.")}

products = [{
  name: "The Drop Women Caroline Raglan Long-Sleeve Fleece Sweatshirt",
  price: 44.90,
  shop_url: "https://www.amazon.com/Drop-Womens-Caroline-Long-Sleeve-Sweatshirt/dp/B07ZTDB8XY/ref=sr_1_4?tag=alwaysmelis-1-ltkna-20",
  image_url: "https://res.cloudinary.com/dre1b2zmh/image/upload/v1601050351/shopping-app/81M3rsxVgYL._AC_UX569_.jpg"
},
{
  name: "Hot Tools Signature Series Gold Curling Iron/Wand - 1 ½",
  price: 39.90,
  shop_url: "https://www.target.com/p/hot-tools-signature-series-gold-curling-iron-wand-1-189/-/A-75562689?clkid=12e48bbaNff4711eaaa2542010a246fdb&lnm=81938&afid=rewardStyle&ref=tgt_adv_xasd0002",
  image_url: "https://res.cloudinary.com/dre1b2zmh/image/upload/v1601050667/shopping-app/GUEST_e6083ecc-5600-4e65-bee9-d95d135b4327.webp"
},
{
  name: "Initial Pendant Necklace",
  price: 50.00,
  shop_url: "https://www.nordstrom.com/s/bracha-initial-pendant-necklace/5060536?siteid=QFGLnEolOWg-VpxgRSzNsBrWdCMlG3wGdA&utm_source=rakuten&utm_medium=affiliate&utm_campaign=QFGLnEolOWg&utm_content=1&utm_term=747642&utm_channel=low_nd_affiliates&sp_source=rakuten&sp_campaign=QFGLnEolOWg",
  image_url: "https://res.cloudinary.com/dre1b2zmh/image/upload/v1601050799/shopping-app/211dcc40-cc80-40af-9b5f-4417f48e6d53.jpg"
},
{
  name: "Cute Flowers + Hat Coffee Mug, Coffee Mug, Ceramic mug, Cute coffee mug, Gift for her",
  price: 19.00,
  shop_url: "https://www.etsy.com/listing/865976771/cute-flowers-hat-coffee-mug-coffee-mug?source=aw&utm_source=affiliate_window&utm_medium=affiliate&utm_campaign=us_location_buyer&utm_term=3657&utm_content=136348&awc=6220_1601050836_ef510260deb56f24073c8638794dffe1",
  image_url: "https://res.cloudinary.com/dre1b2zmh/image/upload/v1601050893/shopping-app/il_794xN.2544999244_canl.jpg"
}]
products.each{|product| Product.create(name: product[:name], price: product[:price], url: product[:shop_url], image: product[:image_url])}
