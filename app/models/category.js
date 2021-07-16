import Model, { attr } from '@ember-data/model';
import { computed } from '@ember/object'

export default class CategoryModel extends Model {
  @attr('string') name;
  @attr('string') value;
}
