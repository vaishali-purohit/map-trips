import 'jest-styled-components';

import { getDaysDifference } from '../../utils/daysDiff';

describe('Test Day difference function', () => {
  it('should render difference in days', () => {
    const startDate = new Date(1626519890000);
    const endDate = new Date(1631883229000);
  
    const result = 63;
    const component = getDaysDifference(startDate, endDate);

    expect(component).toEqual(result);
  });

  it('should render difference in days with Zero days', () => {
    const startDate = new Date(1631883229000);
    const endDate = new Date(1631883229000);
  
    const result = 0;
    const component = getDaysDifference(startDate, endDate);

    expect(component).toEqual(result);
  });
});
