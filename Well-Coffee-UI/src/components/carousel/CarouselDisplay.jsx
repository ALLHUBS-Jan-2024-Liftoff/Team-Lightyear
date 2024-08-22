import { Container, Carousel } from "react-bootstrap";
import carouselImageOne from '../../assets/images/carousel-one.png';
import carouselImageTwo from '../../assets/images/carousel-two.png';
import carouselImageThree from '../../assets/images/carousel-three.png'


const CarouselDisplay = () => {
 return (
     <Container className="mt-5 d-flex align-items-start">
       <div className="w-50 m-3">
         <h2>
           Welcome to WellCoffee's inventory management solution! ✨
         </h2>
         <p>
           Manage your inventory with ease using our straightforward tool.
           Track stock levels, create new invoices, and stay on top of
           low stock items — all in one place. We will help you keep
           your inventory organized and your business running smoothly.
           Inventory management made easy!
         </p>
       </div>
       <Carousel fade className="w-50 mx-auto">
         <Carousel.Item>
           <img src={carouselImageOne} className="d-block w-100"/>
           <Carousel.Caption className="d-flex flex-column justify-content-center align-items-center p-3 bg-white rounded">
             <p className="text-center text-dark fw-bold fs-5 mb-0">Work together as a team!</p>
           </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item>
           <img src={carouselImageTwo} className="d-block w-100"/>
           <Carousel.Caption className="d-flex flex-column justify-content-center align-items-center p-3 bg-white rounded">
             <p className="text-center text-dark fw-bold fs-5 mb-0">Record and track items!</p>
           </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item>
           <img src={carouselImageThree} className="d-block w-100"/>
           <Carousel.Caption className="d-flex flex-column justify-content-center align-items-center p-3 bg-white rounded">
             <p className="text-center text-dark fw-bold fs-5 mb-0">Order and restock inventory! </p>
           </Carousel.Caption>
         </Carousel.Item>
       </Carousel>
     </Container>
 );
}

export default CarouselDisplay;