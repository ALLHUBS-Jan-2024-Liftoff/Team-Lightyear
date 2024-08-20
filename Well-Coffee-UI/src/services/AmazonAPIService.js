import axios from "axios";

export const getAmazonProductInfo = async (amazonProductId) => {
const options = {
  method: 'GET',
  url: 'https://real-time-amazon-data.p.rapidapi.com/product-details',
  params: {
    asin: amazonProductId,
    country: 'US'
  },
  headers: {
    'x-rapidapi-key': process.env.REACT_APP_AMAZON_API_KEY,
    'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
    return response.data;
} catch (error) {
	console.error("There was an error fetching item info from Amazon.", error);
    throw error;
}
}

// {
//     "status":"OK",
//     "request_id":"4c7041a1-a09e-4b98-a0bc-3e0db80fb6a0",
//     "parameters":{
//         "asin":"B0CSL5JBPN",
//         "country":"US"},
//     "data":{
//         "asin":"B0CSL5JBPN",
//         "product_title":"Cinnamon Rolls With Maple Icing (6 pack)",
//         "product_price":"19.00",
//         "product_original_price":null,
//         "unit_price":"$0.68",
//         "unit_count":28,
//         "currency":"USD",
//         "country":"US",
//         "product_byline":"Brand: Jimmy The Baker",
//         "product_star_rating":"5",
//         "product_num_ratings":2,
//         "product_url":"https://www.amazon.com/dp/B0CSL5JBPN",
//         "product_photo":"https://m.media-amazon.com/images/I/412lfMSuHjL.jpg",
//         "product_num_offers":1,
//         "product_availability":"In stock                 Usually ships within 2 to 3 days.",
//         "is_best_seller":false,
//         "is_amazon_choice":false,
//         "is_prime":false,
//         "climate_pledge_friendly":false,
//         "sales_volume":null,
//         "about_product":[
//             "Delicious Award winning breakfast favorite",
//             "Made with high-quality ingredients",
//             "Includes 6 Gourmet Cinnamon Rolls, 4.5 oz each cinnamon roll",
//             "Storage: Keep the buns wrapped in the freezer for 12 months, or 28 days in fridge.",
//             "Place in the microwave for only 15-20 seconds"],
//         "product_description":"",
//         "product_information":{
//             "Product Dimensions":"10 x 7 x 2.25 inches; 4.5 ounces",
//             "Manufacturer":"Jimmy The Baker",
//             "ASIN":"B0CSL5JBPN",
//             "Best Sellers Rank":"#54,204 in Grocery & Gourmet Food (See Top 100 in Grocery & Gourmet Food)    #11 in Pastries",
//             "Customer Reviews":"5.0    5.0 out of 5 stars     \n\n                       2 ratings"},
//         "product_photos":[
//             "https://m.media-amazon.com/images/I/412lfMSuHjL.jpg"],
//         "product_details":{
//             "Brand":"Jimmy The Baker",
//             "Number of Items":"6",
//             "Item Weight":"4.5 Ounces",
//             "Unit Count":"28.0 Ounce",
//             "Manufacturer":"Jimmy The Baker"},
//         "delivery":"FREE delivery August 22 - 26. Details",
//         "primary_delivery_time":"August 22 - 26",
//         "category_path":[
//             {
//                 "id":"16310101",
//                 "name":"Grocery & Gourmet Food",
//                 "link":"https://www.amazon.com/grocery-breakfast-foods-snacks-organic/b/ref=dp_bc_aui_C_1?ie=UTF8&node=16310101"},
//             {
//                 "id":"16318751",
//                 "name":"Breads & Bakery",
//                 "link":"https://www.amazon.com/Bread-Bakery-Flour-Gluten-Free/b/ref=dp_bc_aui_C_2?ie=UTF8&node=16318751"},
//             {
//                 "id":"6548770011",
//                 "name":"Pastries & Bakery",
//                 "link":"https://www.amazon.com/Breakfast-Bakery/b/ref=dp_bc_aui_C_3?ie=UTF8&node=6548770011"},
//             {
//                 "id":"18770272011",
//                 "name":"Pastries",
//                 "link":"https://www.amazon.com/b/ref=dp_bc_aui_C_4?ie=UTF8&node=18770272011"
//             }],
//         "product_variations":[]}}