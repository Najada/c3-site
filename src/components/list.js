import React from 'react';
import { Flex, Box, IconButton, Image } from 'theme-ui';
import Checkmark from 'assets/checkmark.svg';
// import parse from 'html-react-parser';

export default function List({ items = [] }) {

  const getListItemMarkup = () => {

  }

  return (
    <Box
      as="ul"
      sx={{
        listStyleType: 'none',
        margin: 0,
        padding: 0,
      }}
    >  {items.map((text, i) => {
      return <Flex
        as="li"
        key={i}
        sx={styles.listItem.li}

      >
        <Image src={Checkmark} sx={styles.listItem.img}></Image>
        <span dangerouslySetInnerHTML={{ __html: text }}></span>
      </Flex>
    })
      }

    </Box>
  );
}

const styles = {
  listItem: {
    li: {
      display: 'flex',
      justifyContent: 'start',
      alignItems: 'center',
      font: 'normal normal 700 16px/23px Poppins',
      fontSize: '16px',
      mb: '30px',
      flexDirection: 'row',
      span: {
        span: {
          color: "primary"
        }
      }
    },
    img: {
      width: '20px',
      height: '20px',
      marginRight: '12px'

    },
  },
};
