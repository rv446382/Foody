import React from 'react'
import "./nightlife.css";
import Collection from '../common/collection';
import Filters from '../common/filters';
import ExploreSection from '../common/exploreSection';
import { nightLife } from '../../data/nightLife';

const collectionList = [
  {
    id: 1,
    title: "Must-Visit legendary places",
    cover: 'https://b.zmtcdn.com/data/collections/706d897c97831fde7a470ab77e79808c_1675238926.jpg?output-format=webp',
    places: '12 places'
  },
  {
    id: 2,
    title: "trending this week",
    cover: 'https://b.zmtcdn.com/data/collections/4a8fc66cfe2a43c7538d5716895a3019_1684739753.png',
    places: '13 places'
  },
  {
    id: 3,
    title: "Newly Opened Restaurant",
    cover: 'https://b.zmtcdn.com/data/collections/4a8fc66cfe2a43c7538d5716895a3019_1684739753.png',
    places: '13 places'
  },
  {
    id: 4,
    title: "Must-Visit legendary places",
    cover: 'https://b.zmtcdn.com/data/collections/a1e31eb92bb9951aaf1750d88497adb4_1684740352.jpg',
    places: '12 places'
  },
  {
    id: 5,
    title: "Best insta worthy Places",
    cover: 'https://b.zmtcdn.com/data/pictures/4/20626134/266d2381f6a91f46766d6950a8924e97_featured_v2.jpg',
    places: '12 places'
  },
  {
    id: 6,
    title: "trending this week",
    cover: 'https://b.zmtcdn.com/data/pictures/4/20626134/266d2381f6a91f46766d6950a8924e97_featured_v2.jpg',
    places: '10 places'
  },
  {
    id: 7,
    title: "trending this week",
    cover: 'https://b.zmtcdn.com/data/collections/4a8fc66cfe2a43c7538d5716895a3019_1684739753.png',
    places: '12 places'
  },
  {
    id: 8,
    title: "Best insta worthy Places",
    cover: 'https://b.zmtcdn.com/data/collections/91657c6e0f9452b3d54b4658e7bc90b9_1684741472.jpg',
    places: '12 places'
  },
  {
    id: 9,
    title: "Best bars and Pubs",
    cover: 'https://b.zmtcdn.com/data/collections/61d06b1dc0a478a6216bcf07ff8b2d67_1684741886.jpg',
    places: '11 places'
  },
  {
    id: 10,
    title: "trending this week",
    cover: 'https://b.zmtcdn.com/data/collections/91657c6e0f9452b3d54b4658e7bc90b9_1684741472.jpg',
    places: '12 places'
  },
];

const nightFilters = [
  {
    id: 1,
    icon: <i className='fi fi-rr-settings-sliders absolute-center'></i>,
    title: "Filters",
  },
  {
    id: 2,
    title: "Rating: 4.0+",

  },
  {
    id: 3,
    title: "Safe and Hygenic",

  },
  {
    id: 4,
    title: "Pure Veg",

  },
  {
    id: 5,
    icon: <i className='fi fi-rr-apps-sort absolute-center'></i>,
    title: "Delivery Time",
  },
  {
    id: 6,
    title: "Great Offers",


  },

];
const nightList = nightLife;

const Nightlife = () => {
  return (
    <div>
      <Collection list={collectionList} />
      <div className='max-width'>
        <Filters filtersList={nightFilters} />
      </div>
      <ExploreSection list={nightList} collectionName='NightLife Restaurant in Lucknow' />
    </div>
  )
}

export default Nightlife
