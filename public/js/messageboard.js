function populatePost (){
    fetch ('/api/posts/users')
	.then(response => response.json())
	.then(data => {
        data.forEach(post => {
            const populate = document.getElementById('populated');
            const postDiv = document.createElement('li');
            const postContainer = document.createElement('div');
            const postTitle = document.createElement('div');
            const postBody = document.createElement('div');
            postBody.textContent = post.body;
            postTitle.textContent = post.title;
            postContainer.append(postTitle, postBody);
            postDiv.append(postContainer);
            populate.append(postDiv);
        })
    })
	.catch(err => console.error(err));

}

populatePost();