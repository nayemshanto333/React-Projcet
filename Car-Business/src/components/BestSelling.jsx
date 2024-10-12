import{Row , Col} from 'react-bootstrap'

const bestSellingItems = [
  {
    img:"img/Bitmap01.png",
    brand:"Subaru",
    price:"$40k"
  },
  {
    img:"img/Bitmap02.png",
    brand:"Volkswagen",
    price:"$15k"
  },
  {
    img:"img/Bitmap03.png",
    brand:"Toyota",
    price:"$27k"
  },
  {
    img:"img/Bitmap04.png",
    brand:"Mercedes-Benz",
    price:"$60k"
  },
  {
    img:"img/Bitmap05.png",
    brand:"Hyundai",
    price:"$30k"
  },
  {
    img:"img/Bitmap06.png",
    brand:"Infiniti",
    price:"$54k"
  },
]

function BestSelling() {
  return (
    <>
        <div className='container' >
            <h1 className='text-center justify-content-center bestSellingHeading'>Explore best selling car makes</h1>
            <Row className='d-flex justify-content-center align-items-center mx-auto'>
              {bestSellingItems.map(
                ({img, brand, price})=>(
                  <Col md={4} className='sellingCard'>
                    <div className='vw-add d-flex align-items-center'>
                      <img src={img} className='vw-logo w-[100px]  me-4' />
                      <div>
                        <div className='vw-brand'>{brand}</div>
                        <div className='vw-price'>from {price}</div>
                      </div>

                    </div>
                  </Col>
                )
              )}

            </Row>
        </div>
    </>
  );
}

export default BestSelling;
