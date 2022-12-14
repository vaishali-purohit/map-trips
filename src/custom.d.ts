/* eslint-disable @typescript-eslint/no-explicit-any */

declare module '*.svg?inline' {
  const content: any
  export default content
}

declare module '*.svg' {
  const content: any
  export default content
}

declare module 'styled-components';
declare module 'react-drawer';
declare module 'redux-logger';
declare module 'store';
declare module 'redux-mock-store';
declare module 'enzyme';
declare module 'enzyme-adapter-react-16';
