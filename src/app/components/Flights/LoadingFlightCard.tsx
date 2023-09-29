import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export const LoadingFlightCard = () => {
    return (
        <Stack>
            <Skeleton variant='rounded' width={210} height={60} />
        </Stack>
    );
};
