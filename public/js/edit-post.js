const editFormHandler = async (event) => {
    event.preventDefault();
  
    const post_id = document.querySelector('#post-id').value.trim();
    const title = document.querySelector('#title').value.trim();
    const body = document.querySelector('#body').value.trim();
  
   
      const response = await fetch('/api/posts', {
        method: 'GET',
        body: JSON.stringify({ post_id, title, body }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to edit post!');
      }
    
};
  
document
  .querySelector('#edit-post-form')
  .addEventListener('submit', editFormHandler);
