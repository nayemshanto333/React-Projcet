import React from 'react';
import {Row, Col, Card} from 'react-bootstrap'

const ReviewsItems =[
    {
        img:"img/reviewImg01.png",
        heading:"2021 Cadillac Escalade",
        details:"The 2021 Escalade is a technological showcase and a worthy claimant of the flagship American luxury vehicle title.",
        profileImg:"img/profileImg01.png",
        profileName:"Hironaka Hiroe",
        designation:"Chief Editor",
        rating:"4.91",
        countRating:"(98)"
    },
    {
        img:"img/reviewImg02.png",
        heading:"2021 Hyundai Elantra",
        details:"If developing a car was a marathon technological showcase, Hyundai didn’t run the last mile with the 2021 Elantra. ",
        profileImg:"img/profileImg02.png",
        profileName:"Debashis Bhuiyan",
        designation:"News Editor",
        rating:"4.65",
        countRating:"(93)"
    },
    {
        img:"img/reviewImg03.png",
        heading:"2021 Mercedes-Benz GLA250",
        details:"The new entry point into Mercedes-Benz’s SUV lineup is bigger and improved, but still features a frustrating powertrain. ",
        profileImg:"img/profileImg03.png",
        profileName:"Lew Silverton",
        designation:"Chief Editor",
        rating:"4.55",
        countRating:"(35)"
    },
]


function Reviews() {
  return (
   <>
    <div className='container'>
        <h1 className='text-center fw-bold fs-2 filter-heading'>Recent reviews</h1>
        <Row className='d-flex justify-content-center'>
            {ReviewsItems.map(
                ({img, heading, details, profileImg, profileName, designation, rating, countRating})=>(
                    <Col style={{width:"25rem" , border:"none"}}>
                        <Card.Img variant='top' src={img}/>
                        <Card.Body>
                            <h2 className='reviewHeading'>{heading}</h2>
                            <p className='reviewDetails'>{details}</p>
                            <div className='d-flex align-items-center profileSection '>
                                <img className='reviewProfileImg ' src={profileImg} alt="" />
                                <div className='ms-3 '>
                                    <h5 className='reviewProfileName'>{profileName}</h5>
                                    <small className='reviewProfileDesignation'>{designation}</small>
                                </div>
                                <div className='d-flex align-items-center gap-1 ratingPadding'>
                                    <h3 className='profileStar'>&#9733;</h3>
                                    <small className='profileRating' >{rating}</small>
                                    <small className='profileRatingCount'>{countRating}</small>
                                </div>
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

export default Reviews;
