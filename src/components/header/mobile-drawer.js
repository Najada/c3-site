import React, { useContext } from 'react';
import { Box } from 'theme-ui';
import { Scrollbars } from 'react-custom-scrollbars';
import Drawer from 'components/drawer';
import { DrawerContext } from '../../contexts/drawer/drawer.context';
import { IoMdClose, IoMdMenu } from 'react-icons/io';
import {
  FaTwitter,
  FaGithub,
  FaDiscord,
  FaMediumM,
} from 'react-icons/fa';
import menuItems from './header.data';
import Link from 'next/link';

const social = [
  {
    path: 'https://docs.c3.app/',
    icon: <FaGithub />,
  },
  {
    path: 'https://discord.com/invite/wJeSSmNkgA',
    icon: <FaDiscord />,
  },
  {
    path: 'https://twitter.com/c3_app_?s=11&t=mES2RMQ8qJEh54gPkzNkhA',
    icon: <FaTwitter />,
  },
  {
    path: 'https://medium.com/@C3.app',
    icon: <FaMediumM />,
  },
];

const MobileDrawer = () => {
  const { state, dispatch } = useContext(DrawerContext);

  // Toggle drawer
  const toggleHandler = React.useCallback(() => {
    dispatch({
      type: 'TOGGLE',
    });
  }, [dispatch]);

  function getItems(item, i) {
    if (!item.isSubMenu) {
      return <Link
        variant="default"
        activeClass="active"
        href={item.path}
        key={i}
      >
        {item.label}
      </Link>
    }
    else {
      return <>
        <Link
          style={{ borderBottom: 'none' }}
          activeClass="active"
          href={'#'}
          variant="default"
          key={`menu-item-${i}`}
        >
          {item.label}
        </Link>
        <Box sx={styles.menu} style={{ marginLeft: '10px' }}>
          {item.elements.map((el, i) => (
            <Link
              activeClass="active"
              href={el.path}
              variant="default"
              key={`sub-menu-item-${i}`}
            >
              {el.label}
            </Link>
          ))}
        </Box>
      </>


    }
  }


  return (
    <Drawer
      width="320px"
      drawerHandler={
        <Box sx={styles.handler}>
          <IoMdMenu size="26px" />
        </Box>
      }
      open={state.isOpen}
      toggleHandler={toggleHandler}
      closeButton={<IoMdClose size="24px" color="#000000" />}
      drawerStyle={styles.drawer}
      closeBtnStyle={styles.close}
    >
      <Scrollbars autoHide>
        <Box sx={styles.content}>
          <Box sx={styles.menu}>
            {menuItems.map((item, i) => (

              getItems(item)
            ))}
          </Box>

          <Box sx={styles.menuFooter}>
            <Box sx={styles.social}>
              {social.map(({ path, icon }, i) => (
                <Box as="span" key={i} sx={styles.social.icon}>
                  <Link href={path}>{icon}</Link>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Scrollbars>
    </Drawer>
  );
};

const styles = {
  handler: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: '0',
    width: '26px',

    '@media screen and (min-width: 1024px)': {
      display: 'none',
    },
  },

  drawer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'dark',
  },

  close: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '25px',
    right: '30px',
    zIndex: '1',
    cursor: 'pointer',
  },

  content: {
    a: {
      color: 'text',
      textDecoration: 'none',
      '&:.active': {
        color: 'primary'
      },
      '&:hover': {
        color: 'primary'
      }
    },
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    pt: '100px',
    pb: '40px',
    px: '30px',
  },

  menu: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    a: {
      fontSize: '16px',
      fontWeight: '500',
      color: 'text_white',
      py: '15px',
      cursor: 'pointer',
      borderBottom: '1px solid #e8e5e5',
      transition: 'all 0.25s',
      '&:hover': {
        color: 'secondary',
      },
      '&.active': {
        color: 'secondary',
      },
    },
  },

  menuFooter: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    mt: 'auto',
  },

  social: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    icon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'primary',
      fontSize: 14,
      mr: '15px',
      transition: 'all 0.25s',
      cursor: 'pointer',
      ':last-child': {
        mr: '0',
      },
      '&:hover': {
        color: 'primary',
      },
    },
  },

  button: {
    color: 'white',
    fontSize: '14px',
    fw: '700',
    height: '45px',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    py: '0',
  },
};

export default MobileDrawer;
