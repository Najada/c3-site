import React from 'react';
import { Box, Text, Heading } from 'theme-ui';

export default function SectionHeader({ title, subtitle, isWhite }) {
  return (
    <Box sx={{ variant: 'sectionHeader' }}>
      <Heading
        as="h2"
        sx={{
          variant: 'sectionHeader.title',
          color: isWhite ? 'white' : 'heading',
        }}
      >
        {title}
      </Heading>
      {subtitle && (
      <Text
        as="p"
        sx={{
          variant: 'sectionHeader.subTitle',
        }}
      >
        {subtitle}
      </Text>
  )}
    </Box>
  );
}
