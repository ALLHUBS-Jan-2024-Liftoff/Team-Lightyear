import { useState } from "react";
import { Container } from "react-bootstrap";
import AmazonSearchForm from "./AmazonSearchForm";
import AmazonSearchResults from "./AmazonSearchResults";

const AmazonSearchHome = ({}) => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    searchTerm: "",
    page: 1,
  });
  //Example of a response from teh search API
  // const [searchResults, setSearchResults] = useState({
  //   status: "OK",
  //   request_id: "51ad0aaa-27e7-48c4-972a-1e94be7ba47a",
  //   data: {
  //     total_products: 10347,
  //     country: "US",
  //     domain: "www.amazon.com",
  //     products: [
  //       {
  //         asin: "B0BQ118F2T",
  //         product_title:
  //           "Moto G Play 2023 3-Day Battery Unlocked Made for US 3/32GB 16MP Camera Navy Blue",
  //         product_price: "$99.99",
  //         product_original_price: "$169.99",
  //         currency: "USD",
  //         product_star_rating: "4.1",
  //         product_num_ratings: 2754,
  //         product_url: "https://www.amazon.com/dp/B0BQ118F2T",
  //         product_photo:
  //           "https://m.media-amazon.com/images/I/61K1Fz5LxvL._AC_UY654_FMwebp_QL65_.jpg",
  //         product_num_offers: 20,
  //         product_minimum_offer_price: "$77.95",
  //         is_best_seller: false,
  //         is_amazon_choice: false,
  //         is_prime: true,
  //         climate_pledge_friendly: false,
  //         sales_volume: "4K+ bought in past month",
  //         delivery: "FREE delivery Wed, Jul 10",
  //         has_variations: true,
  //       },
  //       {
  //         asin: "B0CN1QSH8Q",
  //         product_title:
  //           "SAMSUNG Galaxy A15 5G A Series Cell Phone, 128GB Unlocked Android Smartphone, AMOLED Display, Expandable Storage, Knox Security, Super Fast Charging, Hi-Res Camera, US Version, 2024, Blue Black",
  //         product_price: "$199.99",
  //         product_original_price: null,
  //         currency: "USD",
  //         product_star_rating: "4.1",
  //         product_num_ratings: 327,
  //         product_url: "https://www.amazon.com/dp/B0CN1QSH8Q",
  //         product_photo:
  //           "https://m.media-amazon.com/images/I/61s0ZzwzSCL._AC_UY654_FMwebp_QL65_.jpg",
  //         product_num_offers: 25,
  //         product_minimum_offer_price: "$135.87",
  //         is_best_seller: false,
  //         is_amazon_choice: false,
  //         is_prime: true,
  //         climate_pledge_friendly: true,
  //         sales_volume: "2K+ bought in past month",
  //         delivery: "FREE delivery Wed, Jul 10",
  //         has_variations: true,
  //       },
  //       {
  //         asin: "B0CHH6X6H2",
  //         product_title:
  //           "Total by Verizon Samsung Galaxy A03s, 32GB, Black - Prepaid Smartphone (Locked)",
  //         product_price: "$49.88",
  //         product_original_price: null,
  //         currency: "USD",
  //         product_star_rating: "4",
  //         product_num_ratings: 162,
  //         product_url: "https://www.amazon.com/dp/B0CHH6X6H2",
  //         product_photo:
  //           "https://m.media-amazon.com/images/I/812woqv69CL._AC_UY654_FMwebp_QL65_.jpg",
  //         product_num_offers: 1,
  //         product_minimum_offer_price: "$49.88",
  //         is_best_seller: false,
  //         is_amazon_choice: false,
  //         is_prime: true,
  //         climate_pledge_friendly: false,
  //         sales_volume: "500+ bought in past month",
  //         delivery: "FREE delivery Wed, Jul 10",
  //         has_variations: false,
  //       },
  //       {
  //         asin: "B0CRVWXJ6H",
  //         product_title:
  //           "Samsung Galaxy A25 5G (SM-A256E/DS), 128GB 6GB RAM, Dual SIM, Factory Unlocked GSM, International Version (Wall Charger Bundle) - (Blue Black)",
  //         product_price: "$182.00",
  //         product_original_price: "$194.99",
  //         currency: "USD",
  //         product_star_rating: "4.1",
  //         product_num_ratings: 113,
  //         product_url: "https://www.amazon.com/dp/B0CRVWXJ6H",
  //         product_photo:
  //           "https://m.media-amazon.com/images/I/51m744UUjYL._AC_UY654_FMwebp_QL65_.jpg",
  //         product_num_offers: 20,
  //         product_minimum_offer_price: "$169.99",
  //         is_best_seller: false,
  //         is_amazon_choice: false,
  //         is_prime: true,
  //         product_availability: "Only 15 left in stock - order soon.",
  //         climate_pledge_friendly: false,
  //         sales_volume: "1K+ bought in past month",
  //         delivery:
  //           "FREE delivery Wed, Jul 10 Only 15 left in stock - order soon.",
  //         has_variations: true,
  //       },
  //       {
  //         asin: "B07ZPKBL9V",
  //         product_title:
  //           "Apple iPhone 11, 64GB, (PRODUCT)RED - Fully Unlocked (Renewed)",
  //         product_price: "$211.19",
  //         product_original_price: null,
  //         currency: "USD",
  //         product_star_rating: "4.2",
  //         product_num_ratings: 51176,
  //         product_url: "https://www.amazon.com/dp/B07ZPKBL9V",
  //         product_photo:
  //           "https://m.media-amazon.com/images/I/510Fpe16MoL._AC_UY654_FMwebp_QL65_.jpg",
  //         product_num_offers: 60,
  //         product_minimum_offer_price: "$196.81",
  //         is_best_seller: false,
  //         is_amazon_choice: false,
  //         is_prime: false,
  //         product_availability: "Only 12 left in stock - order soon.",
  //         climate_pledge_friendly: true,
  //         sales_volume: "500+ bought in past month",
  //         delivery:
  //           "FREE delivery Jul 9 - 10 Only 12 left in stock - order soon.",
  //         has_variations: true,
  //       },
  //       {
  //         asin: "B0CV4NH5T9",
  //         product_title:
  //           "SAMSUNG Galaxy A35 5G A Series Cell Phone, 128GB Unlocked Android Smartphone, AMOLED Display, Advanced Triple Camera System, Expandable Storage, Rugged Design, US Version, 2024, Awesome Lilac",
  //         product_price: "$349.99",
  //         product_original_price: "$399.99",
  //         currency: "USD",
  //         product_star_rating: "4.1",
  //         product_num_ratings: 53,
  //         product_url: "https://www.amazon.com/dp/B0CV4NH5T9",
  //         product_photo:
  //           "https://m.media-amazon.com/images/I/71lw4ZWUfYL._AC_UY654_FMwebp_QL65_.jpg",
  //         product_num_offers: 10,
  //         product_minimum_offer_price: "$335.99",
  //         is_best_seller: false,
  //         is_amazon_choice: false,
  //         is_prime: true,
  //         climate_pledge_friendly: false,
  //         sales_volume: "500+ bought in past month",
  //         delivery: "FREE delivery Wed, Jul 10",
  //         has_variations: true,
  //       },
  //       {
  //         asin: "B08VLMQ3KS",
  //         product_title:
  //           "Samsung Galaxy S21 5G, US Version, 128GB, Phantom Gray - Unlocked (Renewed)",
  //         product_price: "$194.99",
  //         product_original_price: "$379.00",
  //         currency: "USD",
  //         product_star_rating: "3.9",
  //         product_num_ratings: 5769,
  //         product_url: "https://www.amazon.com/dp/B08VLMQ3KS",
  //         product_photo:
  //           "https://m.media-amazon.com/images/I/61jYjeuNUnL._AC_UY654_FMwebp_QL65_.jpg",
  //         product_num_offers: 119,
  //         product_minimum_offer_price: "$147.00",
  //         is_best_seller: false,
  //         is_amazon_choice: false,
  //         is_prime: true,
  //         climate_pledge_friendly: true,
  //         sales_volume: "3K+ bought in past month",
  //         delivery: "FREE delivery Wed, Jul 10",
  //         has_variations: false,
  //       },
  //       {
  //         asin: "B09SM24S8C",
  //         product_title:
  //           "Samsung Galaxy A03s Cell Phone, AT&amp;T GSM Unlocked Android Smartphone, 32GB, Long Lasting Battery, Expandable Storage, 3 Camera Lenses, Infinite Display - Black (Renewed)",
  //         product_price: "$71.84",
  //         product_original_price: "$87.14",
  //         currency: "USD",
  //         product_star_rating: "3.9",
  //         product_num_ratings: 409,
  //         product_url: "https://www.amazon.com/dp/B09SM24S8C",
  //         product_photo:
  //           "https://m.media-amazon.com/images/I/51m45B3Yy+L._AC_UY654_FMwebp_QL65_.jpg",
  //         product_num_offers: 45,
  //         product_minimum_offer_price: "$68.00",
  //         is_best_seller: false,
  //         is_amazon_choice: false,
  //         is_prime: true,
  //         climate_pledge_friendly: false,
  //         sales_volume: "2K+ bought in past month",
  //         delivery: "FREE delivery Wed, Jul 10",
  //         has_variations: true,
  //       },
  //       {
  //         asin: "B0CHHL5R3H",
  //         product_title:
  //           "Total by Verizon TCL 30 Z, 32GB, Black - Prepaid Smartphone (Locked)",
  //         product_price: "$39.99",
  //         product_original_price: null,
  //         currency: "USD",
  //         product_star_rating: "3.9",
  //         product_num_ratings: 28,
  //         product_url: "https://www.amazon.com/dp/B0CHHL5R3H",
  //         product_photo:
  //           "https://m.media-amazon.com/images/I/718+xprSIBL._AC_UY654_FMwebp_QL65_.jpg",
  //         product_num_offers: 1,
  //         product_minimum_offer_price: "$39.99",
  //         is_best_seller: false,
  //         is_amazon_choice: false,
  //         is_prime: true,
  //         climate_pledge_friendly: false,
  //         sales_volume: "400+ bought in past month",
  //         delivery: "FREE delivery Wed, Jul 10",
  //         has_variations: false,
  //       },
  //       {
  //         asin: "B086QB7WZ1",
  //         product_title:
  //           "AT&amp;T BL102-2 DECT 6.0 2-Handset Cordless Phone for Home with Answering Machine, Call Blocking, Caller ID Announcer, Audio Assist, Intercom, and Unsurpassed Range, Silver/Black",
  //         product_price: "$48.14",
  //         product_original_price: "$56.95",
  //         currency: "USD",
  //         product_star_rating: "4.3",
  //         product_num_ratings: 26382,
  //         product_url: "https://www.amazon.com/dp/B086QB7WZ1",
  //         product_photo:
  //           "https://m.media-amazon.com/images/I/81vjTHTF9WL._AC_UY654_FMwebp_QL65_.jpg",
  //         product_num_offers: 12,
  //         product_minimum_offer_price: "$17.82",
  //         is_best_seller: false,
  //         is_amazon_choice: false,
  //         is_prime: true,
  //         climate_pledge_friendly: false,
  //         sales_volume: "3K+ bought in past month",
  //         delivery: "FREE delivery Wed, Jul 10",
  //         has_variations: false,
  //       },
  //       {
  //         asin: "B0BLZN9NDG",
  //         product_title:
  //           "SAMSUNG,Galaxy A04e (SM-A042M/DS) Dual SIM 32GB,6.5&#x27;&#x27; GSM Unlocked,International Version-Black",
  //         product_price: "$89.01",
  //         product_original_price: null,
  //         currency: "USD",
  //         product_star_rating: "3.8",
  //         product_num_ratings: 547,
  //         product_url: "https://www.amazon.com/dp/B0BLZN9NDG",
  //         product_photo:
  //           "https://m.media-amazon.com/images/I/71O2YkTlq-L._AC_UY654_FMwebp_QL65_.jpg",
  //         product_num_offers: 16,
  //         product_minimum_offer_price: "$75.00",
  //         is_best_seller: false,
  //         is_amazon_choice: false,
  //         is_prime: true,
  //         climate_pledge_friendly: false,
  //         sales_volume: "1K+ bought in past month",
  //         delivery: "FREE delivery Wed, Jul 10",
  //         has_variations: true,
  //       },
  //       {
  //         asin: "B0CCSZZGT7",
  //         product_title:
  //           "TracFone Motorola moto g Play, 32GB, Black - Prepaid Smartphone (Locked)",
  //         product_price: "$47.52",
  //         product_original_price: "$49.99",
  //         currency: "USD",
  //         product_star_rating: "4",
  //         product_num_ratings: 180,
  //         product_url: "https://www.amazon.com/dp/B0CCSZZGT7",
  //         product_photo:
  //           "https://m.media-amazon.com/images/I/71pGGUaxezL._AC_UY654_FMwebp_QL65_.jpg",
  //         product_num_offers: 1,
  //         product_minimum_offer_price: "$47.52",
  //         is_best_seller: false,
  //         is_amazon_choice: false,
  //         is_prime: true,
  //         climate_pledge_friendly: false,
  //         sales_volume: "1K+ bought in past month",
  //         delivery: "FREE delivery Wed, Jul 10",
  //         has_variations: false,
  //       },
  //       {
  //         asin: "B0CMDRFVTL",
  //         product_title:
  //           "SAMSUNG Galaxy S24 Cell Phone, 256GB AI Smartphone, Unlocked Android, 50MP Camera, Fastest Processor, Long Battery Life, US Version, 2024, Cobalt Violet",
  //         product_price: null,
  //         product_original_price: null,
  //         currency: null,
  //         product_star_rating: "4.5",
  //         product_num_ratings: 1582,
  //         product_url: "https://www.amazon.com/dp/B0CMDRFVTL",
  //         product_photo:
  //           "https://m.media-amazon.com/images/I/716UvwH-NvL._AC_UY654_FMwebp_QL65_.jpg",
  //         product_num_offers: 1,
  //         product_minimum_offer_price: null,
  //         is_best_seller: false,
  //         is_amazon_choice: false,
  //         is_prime: true,
  //         climate_pledge_friendly: true,
  //         sales_volume: "100+ bought in past month",
  //         delivery: "FREE delivery Wed, Jul 10",
  //         has_variations: true,
  //       },
  //       {
  //         asin: "B000050FZP",
  //         product_title:
  //           "AT&amp;T 210 Basic Trimline Corded Phone, No AC Power Required, Wall-Mountable, White",
  //         product_price: "$15.95",
  //         product_original_price: null,
  //         currency: "USD",
  //         product_star_rating: "4.2",
  //         product_num_ratings: 19399,
  //         product_url: "https://www.amazon.com/dp/B000050FZP",
  //         product_photo:
  //           "https://m.media-amazon.com/images/I/610brW3Dn7L._AC_UY654_FMwebp_QL65_.jpg",
  //         product_num_offers: 68,
  //         product_minimum_offer_price: "$9.96",
  //         is_best_seller: false,
  //         is_amazon_choice: false,
  //         is_prime: true,
  //         climate_pledge_friendly: false,
  //         sales_volume: "2K+ bought in past month",
  //         delivery:
  //           "FREE delivery Wed, Jul 10 on $35 of items shipped by Amazon",
  //         has_variations: false,
  //       },
  //       {
  //         asin: "B0CTBCDCDH",
  //         product_title:
  //           "Samsung Galaxy A05s (SM-A057M/DS), 128GB 4GB RAM, Dual SIM, Factory Unlocked GSM, International Version (Wall Charger Bundle) (Light Violet)",
  //         product_price: "$124.45",
  //         product_original_price: null,
  //         currency: "USD",
  //         product_star_rating: "4",
  //         product_num_ratings: 20,
  //         product_url: "https://www.amazon.com/dp/B0CTBCDCDH",
  //         product_photo:
  //           "https://m.media-amazon.com/images/I/21f9A+OzosL._AC_UY365_FMwebp_QL65_.jpg",
  //         product_num_offers: 1,
  //         product_minimum_offer_price: "$124.45",
  //         is_best_seller: false,
  //         is_amazon_choice: false,
  //         is_prime: true,
  //         climate_pledge_friendly: false,
  //         sales_volume: "200+ bought in past month",
  //         delivery: "FREE delivery Wed, Jul 10",
  //         has_variations: false,
  //       },
  //       {
  //         asin: "B092NTYZ78",
  //         product_title:
  //           "Panasonic Compact Cordless Phone with DECT 6.0, 1.6&quot; Amber LCD and Illuminated HS Keypad, Call Block, Caller ID, Multiple Display Languages - 1 Handset - KX-TGB810S (Black/Silver)",
  //         product_price: "$24.99",
  //         product_original_price: null,
  //         currency: "USD",
  //         product_star_rating: "4.2",
  //         product_num_ratings: 5295,
  //         product_url: "https://www.amazon.com/dp/B092NTYZ78",
  //         product_photo:
  //           "https://m.media-amazon.com/images/I/81k6vcykYYL._AC_UY654_FMwebp_QL65_.jpg",
  //         product_num_offers: 12,
  //         product_minimum_offer_price: "$10.49",
  //         is_best_seller: false,
  //         is_amazon_choice: false,
  //         is_prime: true,
  //         climate_pledge_friendly: false,
  //         sales_volume: "1K+ bought in past month",
  //         delivery:
  //           "FREE delivery Wed, Jul 10 on $35 of items shipped by Amazon",
  //         has_variations: false,
  //       },
  //     ],
  //   },
  // });

  const [searchResults, setSearchResults] = useState({
    status: "",
    request_id: "",
    data: {
      total_products: null,
      country: "",
      domain: "",
      products: [
        {
          asin: "",
          product_title: "",
          product_price: "",
          product_original_price: "$169.99",
          currency: "",
          product_star_rating: "",
          product_num_ratings: null,
          product_url: "",
          product_photo: "",
          product_num_offers: null,
          product_minimum_offer_price: "",
          is_best_seller: null,
          is_amazon_choice: null,
          is_prime: null,
          climate_pledge_friendly: null,
          sales_volume: "",
          delivery: "",
          has_variations: null,
        },
      ],
    },
  });

  return (
    <>
      <Container className="mt-5">
        {message && (
          <div
            className={`alert ${
              !error ? "alert-success" : "alert-danger"
            } mt-2`}
          >
            {message}
          </div>
        )}
        <Container className="mt-3">
          Enter a search term below to search Amazon and add an item to the database.
        </Container>
        <AmazonSearchForm
          formData={formData}
          setFormData={setFormData}
          setMessage={setMessage}
          setError={setError}
          setSearchResults={setSearchResults}
          setSuccess={setSuccess}
          loading={loading}
          setLoading={setLoading}
        />
        {success && (
          <AmazonSearchResults
            searchResults={searchResults}
            setMessage={setMessage}
            error={error}
            setError={setError}
          />
        )}
      </Container>
    </>
  );
};

export default AmazonSearchHome;
