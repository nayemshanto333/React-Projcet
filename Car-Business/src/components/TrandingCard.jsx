import { Button, Card, Col, Row } from 'react-bootstrap';

const Trendings = [
    {
        img:"img/Img01.png",
        title:"Used 2019 Audi S4 Premium Plus",
        miles:"11 475 Miles",
        transmission:"AWD",
        cylinder:"4-Cylinder Turbo",
        price:"$41,400",
        bestSeller:"Bestseller"
    },
    {
        img:"img/Img02.png",
        title:"Used 2019 Audi S4 Premium Plus",
        miles:"11 475 Miles",
        transmission:"AWD",
        cylinder:"4-Cylinder Turbo",
        price:"$41,400",
        bestSeller:"Bestseller"
    },
    {
        img:"img/Img03.png",
        title:"Used 2019 Audi S4 Premium Plus",
        miles:"11 475 Miles",
        transmission:"AWD",
        cylinder:"4-Cylinder Turbo",
        price:"$41,400",
        bestSeller:"Bestseller"
    }
]

function TrandingCard() {
  return (
    <>
        <div className='container '>
            <h1 className='text-center fw-bold cardHeading'>Trending near you</h1>
            <Row className='d-flex justify-content-center '>
                {Trendings.map(
                    ({img , title, miles, transmission, cylinder, price, bestSeller})=>(
                       <Col className='' style={{width:"25rem" , border:"none"}} >
                        <Card.Img variant='top' src={img}/>
                        <Card.Body>
                            <Card.Title className='fw-bold fs-5 mt-3 cardTitle'>{title}</Card.Title>
                            <Card.Text className='mt-2 cardText'>{miles}</Card.Text>
                            <Card.Text className='cardText'>{transmission} . {cylinder}</Card.Text>
                            <div className='d-flex flex-row gap-3'>
                                <Button className='fw-bold priceBtn'>{price}</Button>
                                <Button className='bestSellerBtn'>{bestSeller}</Button>
                            </div>
                        </Card.Body>
                       </Col> 
                    )            
                )}
            

            </Row>

        </div>
    </>
  );
}

export default TrandingCard;
