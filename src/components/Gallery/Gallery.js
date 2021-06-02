import './Gallery.css';
import productIcon from './product-icon.svg';
import house1 from './house1.png';
import house2 from './house2.png';
import house3 from './house3.png';
import { SingleProject } from '../';
// import useBreakpoint from '../../hooks/useBreakpoint';
import { useEffect, useState } from 'react';

const styles1 = {
  gridColumn: '1 / 2',
};
const styles2 = {
  gridColumn: '2 / 4',
};
const styles3 = {
  gridColumn: '4 / 5',
};
const styles4 = {
  gridColumn: '1 / 3',
};
const styles5 = {
  gridColumn: '3 / 4',
};
const styles6 = {
  gridColumn: '4 / 5',
};

function Gallery() {
  // const [dummy, setDummy] = useState(Math.random());
  const [state, setState] = useState(() => {
    if (window.innerWidth < 1024) return true;
    else return false;
  });
  console.log(state);
  const [gridContainerStyles] = useState(() => {
    if (!state) {
      return {
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        gridTemplateRows: '200px 200px',
        // width: '80%',
        gridAutoFlow: 'dense',
      };
    }
    return {
      gridTemplateColumns: '1fr 1fr',
      gridTemplateRows: '200px 200px 200px 200px',
      // width: '100%',
      border: '2px solid blue',
      justifyContent: 'center',
    };
  });
  const [_styles1] = useState(() => {
    if (!state) {
      return {
        // gridColumn: '1 / 2',
        // gridRow: '1 / 2',
      };
    }
    return {
      gridColumn: '1 / 2',
      gridRow: '1 / 2',
    };
  });
  const [_styles2] = useState(() => {
    if (!state) {
      return {
        // gridColumn: '2 / 4',
        // gridRow: '1 / 2',
      };
    }
    return {
      gridColumn: '1 / 3',
      gridRow: '2 / 3',
    };
  });
  const [_styles3] = useState(() => {
    if (!state) {
      return {
        // gridColumn: '2 / 4',
        // gridRow: '1 / 2',
      };
    }
    return {
      gridColumn: '2 / 3',
      gridRow: '1 / 2',
    };
  });
  const [_styles4] = useState(() => {
    if (!state) {
      return {
        // gridColumn: '2 / 4',
        // gridRow: '2 / 3',
      };
    }
    return {
      gridColumn: '1 / 3',
      gridRow: '3 / 4',
    };
  });
  const [_styles5] = useState(() => {
    if (!state) {
      return {
        // gridColumn: '2 / 4',
        // gridRow: '2 / 3',
      };
    }
    return {
      gridColumn: '1 / 2',
      gridRow: '4 / 5',
    };
  });
  const [_styles6] = useState(() => {
    if (!state) {
      return {
        // gridColumn: '2 / 4',
        // gridRow: '2 / 3',
      };
    }
    return {
      gridColumn: '2 / 3',
      gridRow: '4 / 5',
    };
  });
  // console.log(_styles1, _styles2, state);

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth < 1024) setState(true);
    });
  }, []);

  return (
    <div className='gallery'>
      <h1>
        <span>
          <img src={productIcon} alt='product icon' height='40px' />
        </span>
        <span>PROJECTS</span>
      </h1>
      <div className='gallery-wrapper' style={gridContainerStyles}>
        <SingleProject
          image={house1}
          gridSettings={state ? _styles1 : styles1}
          back={'salmon'}
        />
        <SingleProject
          image={house2}
          gridSettings={state ? _styles2 : styles2}
          back={'blue'}
        />
        <SingleProject
          image={house3}
          gridSettings={state ? _styles3 : styles3}
          back={'purple'}
        />
        <SingleProject
          image={house2}
          gridSettings={state ? _styles4 : styles4}
          back={'crimson'}
        />
        <SingleProject
          image={house3}
          gridSettings={state ? _styles5 : styles5}
          back={'slateblue'}
        />
        <SingleProject
          image={house1}
          gridSettings={state ? _styles6 : styles6}
          back={'turquoise'}
        />
      </div>
    </div>
  );
}

export default Gallery;
