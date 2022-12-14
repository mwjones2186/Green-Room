const {Post} = require('../models');

const postData =[
    { 
        title:'This is a Test Title for Outdoors 1',
        body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nunc nibh, tincidunt eu dapibus eu, aliquam viverra orci. 
                Suspendisse pharetra justo eget velit fermentum, a finibus dui sagittis. Phasellus tellus justo, porta nec sagittis ut, porttitor in tellus. 
                Proin vitae erat porta, vestibulum quam non, mollis sem. 
                Ut molestie tellus enim, a rutrum massa porta vel. 
                Praesent sem tellus, luctus eu tristique a, sagittis eu neque. 
                Proin scelerisque, est quis aliquam ultricies, risus augue aliquet dui, quis feugiat neque mi nec nisl. 
                Sed vel lectus lacinia, fermentum magna eget, sodales dolor. 
                Cras porttitor lacinia molestie. Nulla mauris sem, ornare pretium risus vitae, rutrum consectetur nulla. 
                Fusce fringilla maximus fringilla.`,
        user_id:1,
        category_id: 1
    },
    { 
        title:'This is a Test Title for Outdoors 2',
        body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nunc nibh, tincidunt eu dapibus eu, aliquam viverra orci. 
                Suspendisse pharetra justo eget velit fermentum, a finibus dui sagittis. Phasellus tellus justo, porta nec sagittis ut, porttitor in tellus. 
                Proin vitae erat porta, vestibulum quam non, mollis sem. 
                Ut molestie tellus enim, a rutrum massa porta vel. 
                Praesent sem tellus, luctus eu tristique a, sagittis eu neque. 
                Proin scelerisque, est quis aliquam ultricies, risus augue aliquet dui, quis feugiat neque mi nec nisl. 
                Sed vel lectus lacinia, fermentum magna eget, sodales dolor. 
                Cras porttitor lacinia molestie. Nulla mauris sem, ornare pretium risus vitae, rutrum consectetur nulla. 
                Fusce fringilla maximus fringilla.`,
        user_id:1,
        category_id: 1
    },
    { 
        title:'This is a Test Title for Fiber Arts',
        body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nunc nibh, tincidunt eu dapibus eu, aliquam viverra orci. 
                Suspendisse pharetra justo eget velit fermentum, a finibus dui sagittis. Phasellus tellus justo, porta nec sagittis ut, porttitor in tellus. 
                Proin vitae erat porta, vestibulum quam non, mollis sem. 
                Ut molestie tellus enim, a rutrum massa porta vel. 
                Praesent sem tellus, luctus eu tristique a, sagittis eu neque. 
                Proin scelerisque, est quis aliquam ultricies, risus augue aliquet dui, quis feugiat neque mi nec nisl. 
                Sed vel lectus lacinia, fermentum magna eget, sodales dolor. 
                Cras porttitor lacinia molestie. Nulla mauris sem, ornare pretium risus vitae, rutrum consectetur nulla. 
                Fusce fringilla maximus fringilla.`,
        user_id:4,
        category_id: 4
    },
    { 
        title:'This is a Test Title for Computers',
        body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nunc nibh, tincidunt eu dapibus eu, aliquam viverra orci. 
                Suspendisse pharetra justo eget velit fermentum, a finibus dui sagittis. Phasellus tellus justo, porta nec sagittis ut, porttitor in tellus. 
                Proin vitae erat porta, vestibulum quam non, mollis sem. 
                Ut molestie tellus enim, a rutrum massa porta vel. 
                Praesent sem tellus, luctus eu tristique a, sagittis eu neque. 
                Proin scelerisque, est quis aliquam ultricies, risus augue aliquet dui, quis feugiat neque mi nec nisl. 
                Sed vel lectus lacinia, fermentum magna eget, sodales dolor. 
                Cras porttitor lacinia molestie. Nulla mauris sem, ornare pretium risus vitae, rutrum consectetur nulla. 
                Fusce fringilla maximus fringilla.`,
        user_id:2,
        category_id: 2
    },
    { 
        title:'This is a Test Title for Pets',
        body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nunc nibh, tincidunt eu dapibus eu, aliquam viverra orci. 
                Suspendisse pharetra justo eget velit fermentum, a finibus dui sagittis. Phasellus tellus justo, porta nec sagittis ut, porttitor in tellus. 
                Proin vitae erat porta, vestibulum quam non, mollis sem. 
                Ut molestie tellus enim, a rutrum massa porta vel. 
                Praesent sem tellus, luctus eu tristique a, sagittis eu neque. 
                Proin scelerisque, est quis aliquam ultricies, risus augue aliquet dui, quis feugiat neque mi nec nisl. 
                Sed vel lectus lacinia, fermentum magna eget, sodales dolor. 
                Cras porttitor lacinia molestie. Nulla mauris sem, ornare pretium risus vitae, rutrum consectetur nulla. 
                Fusce fringilla maximus fringilla.`,
        user_id:3,
        category_id: 3
    },
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;