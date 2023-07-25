import iphonex from '../assets/iphonex.png';
import iphonexr from '../assets/iphonexr.jpg';
import iphonexs from '../assets/iphonexs.jpg';
import iphonexsmax from '../assets/iphonexsmax.jpg';
import iphone11 from '../assets/iphone11.png';
import iphone11pro from '../assets/11promax.png';
import iphone12mini from '../assets/12mini.jpg';
import iphone12 from '../assets/12.jpg';
import iphone12pro from '../assets/12pro.jpg';
import iphone12promax from '../assets/12promax.jpg';
import iphone13mini from '../assets/13mini.png';
import iphone13 from '../assets/13.png';
import iphonese from '../assets/se2nd.png';
import iphoneset from '../assets/se3rd.png';
import iphone13pro from '../assets/13pro.png';
import iphone13promax from '../assets/13promax.png';
import iphone14 from '../assets/14.webp';
import iphone14pro from '../assets/14pro.jpg';
import iphone14promax from '../assets/iphone14lg.jpg';

class Iphone {
  constructor(image, name, price) {
    this.image = image;
    this.name = name;
    this.price = price;
  }
}

export default [
  new Iphone(iphonex, 'Apple iPhone X', '100,000'),
  new Iphone(iphonexr, 'Apple iPhone XR', '100,000'),
  new Iphone(iphonexs, 'Apple iPhone XS', '100,000'),
  new Iphone(iphonexsmax, 'Apple iPhone XS Max', '100,000'),
  new Iphone(iphone11, 'Apple iPhone 11', '100,000'),
  new Iphone(iphone11pro, 'Apple iPhone 11 Pro', '100,000'),
  new Iphone(iphone11pro, 'Apple iPhone 11 Pro Max', '100,000'),
  new Iphone(iphonese, 'Apple iPhone SE (2nd generation)', '100,000'),
  new Iphone(iphone12mini, 'Apple iPhone 12 mini', '100,000'),
  new Iphone(iphone12, 'Apple iPhone 12 ', '100,000'),
  new Iphone(iphone12pro, 'Apple iPhone 12 Pro', '100,000'),
  new Iphone(iphone12promax, 'Apple iPhone 12 Pro Max', '100,000'),
  new Iphone(iphone13mini, 'Apple iPhone 13 mini', '100,000'),
  new Iphone(iphone13, 'Apple iPhone 13', '100,000'),
  new Iphone(iphone13pro, 'Apple iPhone 13 Pro', '100,000'),
  new Iphone(iphone13promax, 'Apple iPhone 13 Pro Max', '100,000'),
  new Iphone(iphoneset, 'Apple iPhone SE (3rd generation)', '100,000'),
  new Iphone(iphone14, 'Apple iPhone 14 Plus', '100,000'),
  new Iphone(iphone14pro, 'Apple iPhone 14 Pro', '100,000'),
  new Iphone(iphone14promax, 'Apple iPhone 14 Pro Max', '100,000'),
];
