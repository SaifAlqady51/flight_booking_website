import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function Loading() {
  return (
    <Stack spacing={1}>

      <Skeleton variant="rectangular" width={60} height={60} />
    </Stack>
  );
}
