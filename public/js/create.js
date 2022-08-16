const newPostFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#title').value.trim();
    const body = document.querySelector('#body').value.trim();
    const post_url = document.querySelector('input[name="post-url"]').value;
   
      const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({ title, body, post_url }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) { 
        document.location.replace('/messageboard')
      } else {
        alert(response.statusText);
      }
    
  };
  
  document
    .querySelector('.create-post-form')
    .addEventListener('submit', newPostFormHandler);
  