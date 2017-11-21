import Mock from 'mockjs';

let Random = Mock.Random;

Mock.mock('/api/user', {
    'name': '@cname',
    'intro': '@word(20)'
});