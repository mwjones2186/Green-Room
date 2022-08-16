const newPostFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#title').value.trim();
    const body = document.querySelector('#body').value.trim();
    const post_url = document.querySelector('input[name="post-url"]').value;
    const category_id = document.querySelector('input[name="category_id"]').value;
   
      const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({ title, body, post_url, category_id }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) { 
        document.location.replace(`/category/${category_id}`)
      } else {
        alert(response.statusText);
      }
    
  };
  
  document
    .querySelector('.create-post-form')
    .addEventListener('submit', newPostFormHandler);
  