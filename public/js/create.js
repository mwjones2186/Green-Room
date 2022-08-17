const newPostFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#title').value.trim();
    const body = document.querySelector('#body').value.trim();
    const category_id = document.querySelector('input[name="category_id"]').value;
   
      const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({ title, body, category_id }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) { 
        document.location.replace(`/categories/${category_id}`)
      } else {
        alert(response.statusText);
      }
    
  };
  
  document
    .querySelector('.create-post-form')
    .addEventListener('submit', newPostFormHandler);
  