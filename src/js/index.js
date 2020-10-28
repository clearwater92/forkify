import str from './models/Search';
//import { add as a, multiply as m, ID } from './views/searchView';
import * as searchView from './views/searchView';

console.log(`Using imported functions! ${searchView.add(searchView.ID, 403)} and ${searchView.multiply(7089, 5414)}, ${str}`);