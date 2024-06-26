import Carousel from 'react-bootstrap/Carousel';
import img1 from '../src/assets/images/slider/Control room at Mahnar.jpg';
import img2 from '../src/assets/images/slider/Control room at Raghopur at night.jpeg';
import img3 from '../src/assets/images/slider/Digha New GIS.jpg';
import img4 from '../src/assets/images/slider/Switchyard at Bakhri GSS.jpg';
import img5 from '../src/assets/images/slider/Switchyard at Bhabhua GSS.jpg';
import img6 from '../src/assets/images/slider/Switchyard at Manihari GSS.jpg';
import img7 from '../src/assets/images/slider/Switchyard at Manjhaul GSS.jpg';
import img8 from '../src/assets/images/slider/Switchyard at Simri Bakhtiyarpur GSS.jpg';
import img9 from '../src/assets/images/slider/Tarapur GSS.jpg';
import img10 from '../src/assets/images/slider/Tehta control room.jpg';
import img11 from '../src/assets/images/slider/Top View of Imamganj.jpg';
import img12 from '../src/assets/images/slider/Transformer at Raghopur.jpeg';
import "../styles/Slider.css"
function Slider() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>      
    <img src={img1} alt="" className="sliderImage" />
        <Carousel.Caption>
          <h5 className=' text-light bg-dark' style={{width:'fit-content', margin:'auto',padding:'10px'}}>Control room at Mahnar</h5>        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>  
      <img src={img2} alt="" className="sliderImage"/>    
        <Carousel.Caption>
          <h5 className=' bg-secondary text-white' style={{width:'fit-content', margin:'auto',padding:'10px'}}>Control room at Raghopur at night</h5>         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>   
      <img src={img3} alt="" className="sliderImage" />    
        <Carousel.Caption>
          <h3>Digha New GIS</h3>          
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={1000}>      
    <img src={img4} alt="" className="sliderImage" />
        <Carousel.Caption>
          <h3>Switchyard at Bakhri GSS</h3>        
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={1000}>      
    <img src={img5} alt="" className="sliderImage"/>
        <Carousel.Caption>
          <h3>Switchyard at Bhabhua GSS</h3>        
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={1000}>      
    <img src={img6} alt="" className="sliderImage"/>
        <Carousel.Caption>
          <h3>Switchyard at Manihari GSS</h3>        
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={1000}>      
    <img src={img7} alt="" className="sliderImage"/>
        <Carousel.Caption>
          <h3>Switchyard at Manjhaul GSS</h3>        
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={1000}>      
    <img src={img8} alt="" className="sliderImage"/>
        <Carousel.Caption>
          <h3>Switchyard at Simri Bakhtiyarpur GSS</h3>        
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={1000}>      
    <img src={img9} alt="" className="sliderImage"/>
        <Carousel.Caption>
          <h3>Tarapur GSS</h3>        
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={1000}>      
    <img src={img10} alt="" className="sliderImage"/>
        <Carousel.Caption>
          <h3>Tehta control room</h3>        
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={1000}>      
    <img src={img11} alt="" className="sliderImage"/>
        <Carousel.Caption>
          <h3>Top View of Imamganj</h3>        
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={1000}>      
    <img src={img12} alt=""className="sliderImage" />
        <Carousel.Caption>
          <h3>Transformer at Raghopur</h3>        
        </Carousel.Caption>
      </Carousel.Item>      
    </Carousel>
  );
}

export default Slider;