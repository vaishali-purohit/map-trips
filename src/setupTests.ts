import '@testing-library/jest-dom';
import 'regenerator-runtime/runtime';
import 'jest-styled-components';

import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';

configure({ adapter: new Adapter() });
