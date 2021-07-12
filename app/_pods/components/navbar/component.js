import { tracked } from '@glimmer/tracking';
import Component from '@glimmer/component';
export default class Navbar extends Component {
    @tracked collapsed = false;
}