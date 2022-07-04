/** @jsx jsx */
import { jsx, Button } from 'theme-ui';
import { Container, Heading, Image, Link } from 'theme-ui';

import { FaArrowRight } from 'react-icons/fa';

import PatternBG from 'assets/workflowBGPattern.svg';
import Pointer from 'assets/pointer.svg';


export default function WorkFlow({title, showImage=false}) {
  return (
    <section sx={styles.workflow}>
      <Container sx={styles.flex}>
          {showImage && (
            <Image src={Pointer}></Image>
          )}
          <Heading as="h2" dangerouslySetInnerHTML={{ __html: title }} ></Heading>
          <Link href={'https://c3bridge.vercel.app/'} variant="default">
              <Button variant="reverseTransaparent">LET’S GO! <FaArrowRight/> </Button>
          </Link>
      </Container>
    </section>
  );
}

const styles = {
  flex: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    img: {
      width: '78px',
      height: '103px',
      mb: '17px',
    },
    h2: {
      textAlign: 'center',
      font: 'normal normal bold 42px/53px Poppins',
      color: '#F9FBFF',
      lineHeight: '1.2',
      mb: '17px',
      fontSize: ['22px', null, '42px']
    },
    svg : {
      width: '17px',
      height: '16px',
      ml: '10px'
    }

  },
  workflow: {
    backgroundImage: `url(${PatternBG})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'left',
    backgroundSize: 'cover',
    position: 'relative',
    py: ['20px', null, '42px']
  },
};
