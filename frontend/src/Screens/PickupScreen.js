import { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Helmet } from 'react-helmet-async';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { Store } from '../Store';
import CheckoutSteps from '../components/CheckoutSteps';

export default function PickupScreen() {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    userInfo,
    cart: { pickupInfo },
  } = state;
  const [fullName, setFullName] = useState(pickupInfo.fullName || '');
  const [address, setAddress] = useState(pickupInfo.address || '');
  const [city, setCity] = useState(pickupInfo.city || '');
  const [postalCode, setPostalCode] = useState(pickupInfo.postalCode || '');
  useEffect(() => {
    if (!userInfo) {
      navigate('/signin?redirect=/pickup');
    }
  }, [userInfo, navigate]);
  const [phoneNumber, setPhoneNumber] = useState(pickupInfo.phoneNumber || '');
  const submitHandler = (e) => {
    e.preventDefault();
    ctxDispatch({
      type: 'SAVE_PICKUP_INFO',
      payload: {
        fullName,
        address,
        city,
        postalCode,
        phoneNumber,
      },
    });
    localStorage.setItem(
      'pickupInfo',
      JSON.stringify({
        fullName,
        address,
        city,
        postalCode,
        phoneNumber,
      })
    );
    navigate('/payment');
  };

  return (
    <div>
      <Helmet>
        <title>Pick Up Information</title>
      </Helmet>
      <CheckoutSteps step1 step2></CheckoutSteps>
      <div className="container small-container">
        <h1 className="my-3">Pick-up Info</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="fullName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="fullName">
            <Form.Label>Address</Form.Label>
            <Form.Control
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="fullName">
            <Form.Label>City</Form.Label>
            <Form.Control
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="fullName">
            <Form.Label>Postal Code</Form.Label>
            <Form.Control
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="fullName">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </Form.Group>
          <div className="mb-3">
            <Button variant="primary" type="submit">
              Continue
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
