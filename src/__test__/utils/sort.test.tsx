import 'jest-styled-components';

import { sortList } from '../../utils/sort';

describe('Test Sorting function', () => {
  const initialState = [{
    travelFromDate: 1615593873000,
    travelToDate: 1616502243000,
    source: 'Madhya Pradesh',
    destination: 'Indore',
    tripType: 'School',
    latitude: 26.2006,
    longitude: 92.9376,
    description: '',
    imageURL: 'https://cdn.thecrazytourist.com/wp-content/uploads/2017/01/Sanganeb-National-Park.jpg'
  },{
    travelFromDate: 1615079685000,
    travelToDate: 1621928276000,
    source: 'Andhra Pradesh',
    destination: 'Assam',
    tripType: 'School',
    latitude: 26.2006,
    longitude: 92.9376,
    description: '',
    imageURL: 'https://cdn.thecrazytourist.com/wp-content/uploads/2017/01/Sanganeb-National-Park.jpg'
  }, {
    travelFromDate: 1631883229000,
    travelToDate: 1626519890000,
    source: 'Rajasthan',
    destination: 'Udaipur',
    tripType: 'School',
    latitude: 26.2006,
    longitude: 92.9376,
    description: '',
    imageURL: 'https://cdn.thecrazytourist.com/wp-content/uploads/2017/01/Sanganeb-National-Park.jpg'
  }];

  it('should render sort trips in A-Z alphabatically', () => {
    const type = 'A-Z';
    const sortedValue = [{
      travelFromDate: 1615079685000,
      travelToDate: 1621928276000,
      source: 'Andhra Pradesh',
      destination: 'Assam',
      tripType: 'School',
      latitude: 26.2006,
      longitude: 92.9376,
      description: '',
      imageURL: 'https://cdn.thecrazytourist.com/wp-content/uploads/2017/01/Sanganeb-National-Park.jpg'
    }, {
      travelFromDate: 1615593873000,
      travelToDate: 1616502243000,
      source: 'Madhya Pradesh',
      destination: 'Indore',
      tripType: 'School',
      latitude: 26.2006,
      longitude: 92.9376,
      description: '',
      imageURL: 'https://cdn.thecrazytourist.com/wp-content/uploads/2017/01/Sanganeb-National-Park.jpg'
    }, {
      travelFromDate: 1631883229000,
      travelToDate: 1626519890000,
      source: 'Rajasthan',
      destination: 'Udaipur',
      tripType: 'School',
      latitude: 26.2006,
      longitude: 92.9376,
      description: '',
      imageURL: 'https://cdn.thecrazytourist.com/wp-content/uploads/2017/01/Sanganeb-National-Park.jpg'
    }];

    const component = sortList(initialState, type);

    expect(component).toEqual(sortedValue);
  });

  it('should render sort trips in Z-A alphabatically', () => {
    const type = 'Z-A';
    const sortedValue = [{
      travelFromDate: 1631883229000,
      travelToDate: 1626519890000,
      source: 'Rajasthan',
      destination: 'Udaipur',
      tripType: 'School',
      latitude: 26.2006,
      longitude: 92.9376,
      description: '',
      imageURL: 'https://cdn.thecrazytourist.com/wp-content/uploads/2017/01/Sanganeb-National-Park.jpg'
    }, {
      travelFromDate: 1615593873000,
      travelToDate: 1616502243000,
      source: 'Madhya Pradesh',
      destination: 'Indore',
      tripType: 'School',
      latitude: 26.2006,
      longitude: 92.9376,
      description: '',
      imageURL: 'https://cdn.thecrazytourist.com/wp-content/uploads/2017/01/Sanganeb-National-Park.jpg'
    }, {
      travelFromDate: 1615079685000,
      travelToDate: 1621928276000,
      source: 'Andhra Pradesh',
      destination: 'Assam',
      tripType: 'School',
      latitude: 26.2006,
      longitude: 92.9376,
      description: '',
      imageURL: 'https://cdn.thecrazytourist.com/wp-content/uploads/2017/01/Sanganeb-National-Park.jpg'
    }];

    const component = sortList(initialState, type);

    expect(component).toEqual(sortedValue);
  });

  it('should render sort trips in Asec by date', () => {
    const type = 'dateAsec';
    const sortedValue = [
      {
        travelFromDate: 1615079685000,
        travelToDate: 1621928276000,
        source: 'Andhra Pradesh',
        destination: 'Assam',
        tripType: 'School',
        latitude: 26.2006,
        longitude: 92.9376,
        description: '',
        imageURL: 'https://cdn.thecrazytourist.com/wp-content/uploads/2017/01/Sanganeb-National-Park.jpg'
      },
      {
        travelFromDate: 1615593873000,
        travelToDate: 1616502243000,
        source: 'Madhya Pradesh',
        destination: 'Indore',
        tripType: 'School',
        latitude: 26.2006,
        longitude: 92.9376,
        description: '',
        imageURL: 'https://cdn.thecrazytourist.com/wp-content/uploads/2017/01/Sanganeb-National-Park.jpg'
      },
      {
        travelFromDate: 1631883229000,
        travelToDate: 1626519890000,
        source: 'Rajasthan',
        destination: 'Udaipur',
        tripType: 'School',
        latitude: 26.2006,
        longitude: 92.9376,
        description: '',
        imageURL: 'https://cdn.thecrazytourist.com/wp-content/uploads/2017/01/Sanganeb-National-Park.jpg'
      }
    ];

    const component = sortList(initialState, type);

    expect(component).toEqual(sortedValue);
  });

  it('should render sort trips in Desc by date', () => {
    const type = 'dateDesc';
    const sortedValue = [
      {
        travelFromDate: 1631883229000,
        travelToDate: 1626519890000,
        source: 'Rajasthan',
        destination: 'Udaipur',
        tripType: 'School',
        latitude: 26.2006,
        longitude: 92.9376,
        description: '',
        imageURL: 'https://cdn.thecrazytourist.com/wp-content/uploads/2017/01/Sanganeb-National-Park.jpg'
      },
      {
        travelFromDate: 1615593873000,
        travelToDate: 1616502243000,
        source: 'Madhya Pradesh',
        destination: 'Indore',
        tripType: 'School',
        latitude: 26.2006,
        longitude: 92.9376,
        description: '',
        imageURL: 'https://cdn.thecrazytourist.com/wp-content/uploads/2017/01/Sanganeb-National-Park.jpg'
      },
      {
        travelFromDate: 1615079685000,
        travelToDate: 1621928276000,
        source: 'Andhra Pradesh',
        destination: 'Assam',
        tripType: 'School',
        latitude: 26.2006,
        longitude: 92.9376,
        description: '',
        imageURL: 'https://cdn.thecrazytourist.com/wp-content/uploads/2017/01/Sanganeb-National-Park.jpg'
      }
    ];

    const component = sortList(initialState, type);

    expect(component).toEqual(sortedValue);
  });
});
