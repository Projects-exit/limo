import React from 'react';
import { ReactComponent as LoaderImg } from 'Assets/Misc/tyre.svg';

// import Checkout from './Checkout'
// import Outsideclick from 'Hooks/OutsideClick'
// import {ReactComponent as Ripple} from 'Assets/Bg/ripple.svg'

export const Loader = ({height = 40, width = 40}) => <LoaderImg height={height} width={width} className="animate-spin mx-auto" />;
