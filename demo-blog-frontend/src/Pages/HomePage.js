import React from 'react';
import { Carousel, Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/HomePage.css'; // Import the CSS file

const HomePage = () => {
  const blogImages = [
    {

      img:'https://images.pexels.com/photos/768474/pexels-photo-768474.jpeg?auto=compress&cs=tinysrgb&w=600',
      title:"Welcome to Blog App: Your Daily Dose of Insight",
      caption:"Discover, Read, Repeat"
    },
    {

      img:    'https://images.pexels.com/photos/261579/pexels-photo-261579.jpeg?auto=compress&cs=tinysrgb&w=600'      ,
      title:"Discover Fresh Perspectives with Blog App",
      caption:"Dive Into a World of Ideas"
    },{

      img:'https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=600',
      title:"Stay Informed with the Latest Trends and Stories",
      caption:"Where Every Blog Tells a Story"
    },
  ];

  return (
    <div style={{marginTop:'7%'}}>
      {/* Carousel */}
      <Carousel className="my-carousel">
        {blogImages.map((image, index) => (
          <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={image.img}
              alt={`Slide ${index + 1}`}
              style={{height:"400px",objectFit: 'fill'}}
            />
            <Carousel.Caption>
              <h3>{image.caption}</h3>
              <p>{image.title}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>

      {/* Text and Image Section */}
      <Container className="text-image-section" style={{marginLeft:'30px'}}>
        <Row className="align-items-center">
          <Col md={6} className="text-side">
            <h2>Welcome to Our Blog</h2>
            <p>
              Discover the latest insights and updates from our blog. Stay tuned for
              articles on various topics that matter to you. Our blog is your
              go-to source for knowledge and trends.
            </p>
          </Col>
          <Col md={6} className="image-side">
            <img
              src="https://images.pexels.com/photos/3098619/pexels-photo-3098619.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Featured"
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>
      <Container className="text-image-section" style={{marginLeft:'30px'}}>
        <Row className="align-items-center">
        <Col md={6} className="image-side">
            <img
              src="https://images.pexels.com/photos/261579/pexels-photo-261579.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Featured"
              className="img-fluid"
            />
          </Col>
          
          <Col md={6} className="text-side">
            <h2>Explore. Read. Connect</h2>
            <p>
              This Blog App offers a rich collection of blogs written by experts and enthusiasts from around the world. Our mission is to provide you with content that not only informs but also sparks meaningful conversations. Explore our categories, read the latest posts, and connect with a community that shares your interests. Start your journey with us today and see what new insights await.


            </p>
          </Col>
         
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
