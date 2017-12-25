import * as _ from 'lodash';
import * as addition from 'math/addition';
import {users} from 'data/users';

console.log("2 + 3 =", addition.sumTwo(2, 3));
console.log("2 + 3 + 4 =", addition.sumThree(2, 3, 4));
console.log(_.where(users, {age: 36}));