document.getElementById('search-button').addEventListener('click', function() {
  const query = document.getElementById('search-input').value.trim();
  if (query) {
    fetch('/search.json')
      .then(response => response.json())
      .then(data => {
        const results = data.filter(item => item.content.includes(query));
        displayResults(results);
      });
  }
});

function displayResults(results) {
  const searchResults = document.getElementById('search-results');
  searchResults.innerHTML = '';
  if (results.length > 0) {
    const ul = document.createElement('ul');
    results.forEach(result => {
      const li = document.createElement('li');
      li.textContent = result.title + ' - ' + result.categories + ' - ' + result.tags;
      ul.appendChild(li);
    });
    searchResults.appendChild(ul);
  } else {
    searchResults.textContent = '未找到结果';
  }
}