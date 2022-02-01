import Head from 'next/head'
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap'
import Slider from 'react-slick';
import Dropdowns from '../components/Dropdowns';
import Product from '../components/Product';
import styles from '../styles/Home.module.css'

export default function Home({ products }) {
  const [allData, setAllData] = useState(products);
  // console.log(allData);
  const generateProductDataForDrop = () => {
    return [...new Set(products.map(product => product.product_name))]
  }
  const generateStateDataForDrop = () => {
    return [...new Set(products.map(state => state.address.state))]
  }
  const generateCityDataForDrop = () => {
    return [...new Set(products.map(city => city.address.city))]
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false
        }
      },

      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const setting = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 5,
    responsive: [
      {
        breakpoint: 1480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false
        }
      },

      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  // product filter
  const handleFilterProduct = (product) => {
    const filteredData = products.filter((item) => {
      // console.log(item);
      if (item.product_name === product) {
        return item;
      }
    });
    // console.log(filteredData);
    setAllData(filteredData);
    console.log(allData);
  };
  // state filter
  const handleFilterState = (state) => {
    const filteredData = products.filter((item) => {
      // console.log(item);
      if (item.address.state === state) {
        return item;
      }
    });
    // console.log(filteredData);
    setAllData(filteredData);
    console.log(allData);
  };
  // city filter
  const handleFilterCity = (city) => {
    const filteredData = products.filter((item) => {
      // console.log(item);
      if (item.address.city === city) {
        return item;
      }
    });
    // console.log(filteredData);
    setAllData(filteredData);
    console.log(allData);

  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Edvora App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
      </Head>
      <Container fluid className='py-5'>
        {/* Stack the columns on mobile by making one full-width and the other half-width */}
        <Row>
          <Col xs={12} md={2}>
            <div className={styles.dropDown}>
              <h3 style={{ color: 'white' }}>Filters</h3>
              <hr style={{ border: "2px solid #eaeaea" }} />
              <br />
              <Dropdowns products={generateProductDataForDrop()} states={generateStateDataForDrop()} cities={generateCityDataForDrop()} onProductFilter={handleFilterProduct} onStateFilter={handleFilterState} onCityFilter={handleFilterCity} />
            </div>
            <br /><br />
          </Col>
          <Col xs={12} md={10}>
            <h1 style={{ color: 'white' }}>Edvora</h1><br />
            <h3 style={{ color: "rgba(255, 255, 255, 0.5)", textShadow: "0px 4px 4px rgb(0 0 0 / 25%)" }}>Products</h3><br />
            <h4 style={{ color: 'white' }}>Product name</h4>
            <br />
            <hr style={{ border: "1px solid rgba(203, 203, 203, 0.5)" }} />
            <div className={styles.sliderMain}>
              <Slider {...settings}>
                {
                  allData?.map((product, idx) => (
                    <Product key={idx} product={product} />

                  ))
                }

              </Slider>

            </div>
            <br /><br />
            <h4 style={{ color: 'white' }}>Product name</h4>
            <br />
            <hr style={{ border: "1px solid rgba(203, 203, 203, 0.5)" }} />
            <div className={styles.sliderMain}>
              <Slider {...setting}>
                {
                  allData?.map((product, idx) => (
                    <Product key={idx} product={product} />

                  ))
                }

              </Slider>

            </div>
          </Col>
        </Row>
      </Container>

      <footer className={styles.footer}>
        <a
          href="https://rahul-wp.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'white', textDecoration: 'none' }}
        >
          Created by Rahul

        </a>
      </footer>
    </div>
  )
}

export const getServerSideProps = async () => {

  const res = await fetch('https://assessment-edvora.herokuapp.com/');

  const products = await res.json();

  return {
    props: {
      products
    }
  }

}