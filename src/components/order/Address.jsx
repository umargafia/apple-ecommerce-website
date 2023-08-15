import Grid from '@mui/material/Unstable_Grid2/Grid2';
import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

import MyInput from '../global/MyInput';
import MyButton from '../global/MyButton';
import InfoItem from './InfoItem';
import { createAddress, getAddress, updateAddress } from '../../store/api';

function Address() {
  const [isEdit, setEdit] = useState(false);
  const { token } = useSelector((state) => state.auth);
  const [address, setAddress] = useState({});

  const [addressData, setAddressData] = useState({
    country: '',
    state: '',
    localGov: '',
    street: '',
    zipCode: '',
  });

  const handleSave = async () => {
    try {
      if (!address._id) {
        await createAddress({ token, addressData });
      } else {
        await updateAddress({ token, addressData });
      }

      setEdit(false);
    } catch (error) {}
  };

  const handleGetAddress = async () => {
    try {
      const response = await getAddress({ token });
      setAddress(response.data);

      const data = response.data[0];
      console.log(data);

      setAddressData({
        country: data.country || '',
        state: data.state || '',
        localGov: data.localGov || '',
        street: data.street || '',
        zipCode: data.zipCode || '',
      });
    } catch (error) {}
  };

  useEffect(() => {
    handleGetAddress();
    console.log(addressData);
  }, []);

  const handleAddressChange = (fieldName) => (event) => {
    const { value } = event.target;
    setAddressData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  return (
    <Grid container sx={{ background: 'white', p: 2 }}>
      {isEdit ? (
        <>
          <Typography>Shipping Address</Typography>
          <MyInput
            props={{
              value: addressData.country,
              onChange: handleAddressChange('country'),
            }}
            text="Country"
          />
          <MyInput
            props={{
              value: addressData.state,
              onChange: handleAddressChange('state'),
            }}
            text="State"
          />
          <MyInput
            props={{
              value: addressData.localGov,
              onChange: handleAddressChange('localGov'),
            }}
            text="Local Government"
          />
          <MyInput
            props={{
              value: addressData.street,
              onChange: handleAddressChange('street'),
            }}
            text="Street"
          />
          <MyInput
            props={{
              value: addressData.zipCode,
              onChange: handleAddressChange('zipCode'),
              type: 'number',
            }}
            text="Zip Code"
          />
          <MyButton text="Save" onClick={handleSave} />
        </>
      ) : (
        <Box>
          <Typography
            sx={{
              color: 'primary.main',
              fontSize: 20,
              mb: 1,
              fontWeight: 'bold',
            }}
          >
            Address
          </Typography>
          <InfoItem title="Zip Code" text={addressData.zipCode || 'N/A'} />
          <InfoItem title="Country" text={addressData.country || 'N/A'} />
          <InfoItem title="State" text={addressData.state || 'N/A'} />
          <InfoItem
            title="Local Government"
            text={addressData.localGov || 'N/A'}
          />
          <InfoItem title="Street" text={addressData.street || 'N/A'} />
          <MyButton text="Edit Address" onClick={() => setEdit(true)} />
        </Box>
      )}
    </Grid>
  );
}

export default Address;
