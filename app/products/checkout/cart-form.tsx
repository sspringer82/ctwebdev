'use client';

import { submitCart } from '@/app/lib/cart.api';
import { Container, Paper, Grid, TextField, Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import useSWRMutation from 'swr/mutation';

export type Cart = {
  firstname: string;
  lastname: string;
  street: string;
  zip: string;
  city: string;
  country: string;
};

const CartForm = () => {
  const { trigger, isMutating } = useSWRMutation(
    '/products/checkout/submit',
    submitCart
  );

  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Cart>();

  const onSubmit = async (data: Cart) => {
    await trigger(data);
    router.push('/products');
  };

  return (
    <Container>
      <Paper style={{ padding: 16, marginBottom: 16 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container alignItems="flex-start" spacing={2}>
            {[
              { name: 'firstname', label: 'Vorname' },
              { name: 'lastname', label: 'Nachname' },
              { name: 'street', label: 'Straße' },
              { name: 'zip', label: 'Postleitzahl' },
              { name: 'city', label: 'Stadt' },
              { name: 'country', label: 'Land' },
            ].map((item, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Controller
                  name={item.name}
                  control={control}
                  rules={{ required: 'Dieses Feld ist erforderlich' }}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label={item.label}
                      fullWidth
                      error={!!errors[item.name]}
                      helperText={errors[item.name]?.message}
                    />
                  )}
                />
              </Grid>
            ))}
            <Grid item xs={12} style={{ marginTop: 16 }}>
              <Button type="submit" variant="outlined" color="primary">
                Absenden
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default CartForm;
