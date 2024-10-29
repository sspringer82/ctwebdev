import { Box, Skeleton } from '@mui/material';

export const BookDetailsSkeleton: React.FC = () => {
  return (
    <>
      <Box mb={2}>
        {/* Titel Skeleton */}
        <Skeleton variant="text" width="60%" height={40} />
        {/* Autor Skeleton */}
        <Skeleton variant="text" width="40%" height={30} />
      </Box>
      {/* ISBN */}
      <Skeleton variant="text" width="50%" />
      {/* Release Date */}
      <Skeleton variant="text" width="40%" />
      {/* Pages */}
      <Skeleton variant="text" width="30%" />
      {/* Language */}
      <Skeleton variant="text" width="30%" />
    </>
  );
};

export const BookRatingSkeleton: React.FC = () => {
  return (
    <Box mt={2}>
      {/* Rating Text Skeleton */}
      <Skeleton variant="text" width="20%" />
      {/* Rating Stars Skeleton */}
      <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
        <Skeleton variant="rectangular" width={120} height={24} />
      </Box>
    </Box>
  );
};
