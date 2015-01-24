import DS from "ember-data";
import config from '../config/environment';

console.log('config: ', config)

export default DS.RESTAdapter.extend({
  namespace: 'api',
  host: config.APP.API_HOST
});