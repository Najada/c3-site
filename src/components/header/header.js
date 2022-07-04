/** @jsx jsx */
import { jsx, Container, Flex, Button } from 'theme-ui';
import { keyframes } from '@emotion/core';
// import { Link } from 'react-scroll';
import Logo from 'components/logo';
import LogoDark from 'assets/logo.webp';
import { DrawerProvider } from '../../contexts/drawer/drawer.provider';
import MobileDrawer from './mobile-drawer';
import menuItems from './header.data';
import Link from 'next/link';

export default function Header({ className }) {


  function getItems(item, i) {

    if (!item.isSubMenu) {
      return <Link
        href={item.path}
        activeClass="active"
        //to={path}
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        key={i}
      >
        {item.label}
      </Link>
    }
    else {
      return <div class="dropdown">
        <button class="dropbtn">{item.label} </button>
        <div class="dropdown-content">
          {item.elements.map((el, i) => (
            <a key={i} href={el.path} target={el.isBlank ? "_blank" : ''} >{el.label}</a>
          ))}
        </div>
      </div>
    }


  }
  return (
    <DrawerProvider>
      <header sx={styles.header} className={className} id="header">
        <Container sx={styles.container}>
          <Logo src={LogoDark} />
          <div sx={styles.menuItems}>
            <Flex as="nav" sx={styles.nav}>
              {menuItems.map((item, i) => (
                getItems(item, i)
              ))}
            </Flex>
            <Link href={'https://c3bridge.vercel.app/'} variant="default">
              <Button variant="primary" aria-label={'LAUNCH APP'}>
                {'LAUNCH APP'}
              </Button>
            </Link>
          </div>


          <MobileDrawer />
        </Container>
      </header>
    </DrawerProvider>
  );
}

const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }

  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`;

const styles = {
  header: {
    '.dropdown': {
      position: 'relative',
      display: 'inline-block',
      '&:hover': {
        '.dropdown-content': {
          display: 'flex'
        }
      }
    },
    '.dropdown-content': {
      display: 'none',
      justifyContent: 'start',
      flexDirection: 'column',
      position: 'absolute',
      backgroundColor: 'white',
      minwidth: '160px',
      padding: '12px 16px',
      zindex: '1',
      a: {
        whiteSpace: 'nowrap',
        p: 0,
        marginLeft: '27px',
        marginRight: '27px',
        my: 1
      }
    }
    ,

    zIndex: '999',
    color: 'text',
    fontWeight: 'body',
    py: 1,
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    boxShadow: '0px 3px 30px rgba(78, 105, 165, 0.16)',
    border: '1px solid rgba(237, 246, 255, 1)',
    backgroundColor: 'white',
    transition: 'all 0.4s ease',
    animation: `${positionAnim} 0.4s ease`,
    '.donate__btn': {
      flexShrink: 0,
    },
    '&.sticky': {
      position: 'fixed',
      backgroundColor: 'background',
      color: '#000000',
      py: 1,
      'nev > a': {
        color: 'text',
      },
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  menuItems: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'end',
  },
  nav: {
    // mx: 'auto',
    display: 'none',
    '@media screen and (min-width: 1024px)': {
      display: 'block',
    },
    a: {
      fontSize: 1,
      mx: '27px',
      fontWeight: 'link',
      textDecoration: 'none',
      // px: 15,
      cursor: 'pointer',
      color: '#000000',
      lineHeight: '1.5',
      transition: 'all 0.15s',
      '&:hover': {
        color: 'primary',
      },
      '&.active': {
        color: 'primary',
      },
    },
    '.dropbtn': {
      backgroundColor: 'transparent',
      border: 'none',
      fontSize: 1,
      mx: '27px',
      fontWeight: 'link',
      textDecoration: 'none',
      // px: 15,
      cursor: 'pointer',
      color: '#000000',
      lineHeight: '1.5',
      transition: 'all 0.15s',
      '&:hover': {
        color: 'primary',
      },
      '&.active': {
        color: 'primary',
      },
    }
  },
};
