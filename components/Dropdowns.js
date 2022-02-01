import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';

const Dropdowns = ({ products, states, cities, onProductFilter, onStateFilter, onCityFilter }) => {
    console.log(onProductFilter);
    const [dropProduct, setDropProduct] = useState('Products');
    const [dropState, setDropState] = useState('State');
    const [dropCity, setDropCity] = useState('City');
    const handleProductClick = (e) => {
        const value = e.target.innerText;
        // console.log(value);
        setDropProduct(value);
        onProductFilter(value)
    }
    const handleStateClick = (e) => {
        const value = e.target.innerText;
        // console.log(value);
        setDropState(value);
        onStateFilter(value)
    }
    const handleCityClick = (e) => {
        const value = e.target.innerText;
        // console.log(value);
        setDropCity(value);
        onCityFilter(value)
    }
    return (
        <div className='dropDownList'>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {dropProduct}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {
                        products.map((product, idx) => <Dropdown.Item onClick={handleProductClick} key={idx}>{product}</Dropdown.Item>)
                    }
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {dropState}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {
                        states.map((state, idx) => <Dropdown.Item onClick={handleStateClick} key={idx}>{state}</Dropdown.Item>)
                    }
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {dropCity}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {
                        cities.map((city, idx) => <Dropdown.Item onClick={handleCityClick} key={idx}>{city}</Dropdown.Item>)
                    }
                </Dropdown.Menu>
            </Dropdown>
            <br /><br />
        </div>
    );
};

export default Dropdowns;