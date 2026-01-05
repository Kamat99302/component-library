  import Badge from "./Badge/index"
  import Banner from "./Banner/index"
  import Card from "./Card/index"
  import Testimonial from './Testimonial/index'
  import './App.css'
  import {FaCloud} from "react-icons/fa"
  import mayImg from "./img/Image.png"

  function App() {
    return (
      <>
      <h1>Component Library</h1>
      <div className='badge-section'>
        <p>Square</p>
        <Badge variant="square" color="gray">Badge</Badge>
        <Badge variant="square" color="red">Badge</Badge>
        <Badge variant="square" color="yellow">Badge</Badge>
        <Badge variant="square" color="green">Badge</Badge>
        <Badge variant="square" color="blue">Badge</Badge>
        <Badge variant="square" color="indigo">Badge</Badge>
        <Badge variant="square" color="purple">Badge</Badge>
        <Badge variant="square" color="pink">Badge</Badge>
        </div>


        <div className='badge-section'>
        <p>Pill</p>
        <Badge variant="pill" color="gray">Badge</Badge>
        <Badge variant="pill" color="red">Badge</Badge>
        <Badge variant="pill" color="yellow">Badge</Badge>
        <Badge variant="pill" color="green">Badge</Badge>
        <Badge variant="pill" color="blue">Badge</Badge>
        <Badge variant="pill" color="indigo">Badge</Badge>
        <Badge variant="pill" color="purple">Badge</Badge>
        <Badge variant="pill" color="pink">Badge</Badge>
        </div>

      <div className='banner-section'>
        <div className='banner-multiline-section'>
          <p className='type'>MultiLine</p>
            <Banner status="success">C'est un succés</Banner>
            <Banner status="warning">Certaines dépendances n'ont pas été installées</Banner>
            <Banner status="error">Une erreur est survenue lors de la mise à jour</Banner>
            <Banner status="neutral">Une mise à jour du firmware est disponible</Banner>
        </div>

        <div className='banner-singleline-section'>
            <p className='type'>Single Line</p>
            <Banner variant='singleLine' status="success"></Banner>
            <Banner variant='singleLine' status="warning"></Banner>
            <Banner variant='singleLine' status="error"></Banner>
            <Banner variant='singleLine' status="neutral"></Banner>
        </div>      
      </div>

      <p className='type'>Cards</p>

      <div className='card-section'>
            <Card icon={<FaCloud size={50} />} iconColor="white" iconBgColor="#3B82F6"title="Cloud Storage" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, nostrum nesciunt amet facere maxime ipsum excepturi omnis, itaque esse laborum magnam placeat qui?"></Card>
            <Card icon={<FaCloud size={50} />} hoverable iconColor="grey" iconBgColor="#3B82F6"title="Fast Delivery" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, nostrum nesciunt amet facere maxime ipsum excepturi omnis, itaque esse laborum magnam placeat qui?" ></Card>
      </div>

      <p className='type'>Testimonials</p>

      <div className='testimonial-section'>
        <Testimonial name="Matthieu Juan" roleandLocation="Les cabannes" testimonialBgColor="blue" testimonialTxtColor="yellow" image={mayImg} >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, nostrum nesciunt amet facere maxime ipsum excepturi omnis, itaque esse laborum magnam placeat qui? Ab excepturi pariatur sunt nobis molestiae. Nesciunt.
        </Testimonial>
        <Testimonial name="Matthieu Juan" roleandLocation="Les cabannes" testimonialBgColor="red" testimonialTxtColor="white">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, nostrum nesciunt amet facere maxime ipsum excepturi omnis, itaque esse laborum magnam placeat qui? Ab excepturi pariatur sunt nobis molestiae. Nesciunt.
        </Testimonial>
      </div>
        
      </>
    )
  }

  export default App
