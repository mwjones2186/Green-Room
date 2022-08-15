const newPostFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#title').value.trim();
    const body = document.querySelector('#body').value.trim();
  
   
      const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({ title, body }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) { 
        document.location.replace('/messageboard')
      } else {
        alert('Failed to log in.');
      }
    
  };
  
  document
    .querySelector('.create-post-form')
    .addEventListener('submit', newPostFormHandler);
  