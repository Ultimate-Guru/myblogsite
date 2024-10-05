document.getElementById('article-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from submitting in the traditional way

    // Get form values
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const tags = document.getElementById('tags').value;
    const imageInput = document.getElementById('image-upload');
    const imageFile = imageInput.files[0];
    const publish = document.getElementById('publish');

    // If there's an image file, we'll read it and use it in the post
    if (imageFile) {
        const reader = new FileReader();

        reader.onload = function (e) {
            // Create a new article card for displaying the submitted article
            const articleContainer = document.getElementById('article-display');
            const articleCard = document.createElement('div');
            articleCard.classList.add('article-card');

            // Add image
            const imgElement = document.createElement('img');
            imgElement.src = e.target.result;
            imgElement.alt = "Uploaded Image";
            articleCard.appendChild(imgElement);

            // Add title
            const titleElement = document.createElement('h3');
            titleElement.textContent = title;
            articleCard.appendChild(titleElement);

            // Add content
            const contentElement = document.createElement('p');
            contentElement.textContent = content;
            articleCard.appendChild(contentElement);

            // Add tags (if provided)
            if (tags) {
                const tagsElement = document.createElement('p');
                tagsElement.classList.add('tags');
                tagsElement.textContent = `Tagged: ${tags}`;
                articleCard.appendChild(tagsElement);
            }

            // Append the article card to the display container
            articleContainer.appendChild(articleCard);

            // Clear the form fields after submission
            document.getElementById('article-form').reset();
        };

        // Read the image file as a data URL (base64 encoded image)
        reader.readAsDataURL(imageFile);
    } else {
        // If no image was uploaded, create the article without an image
        const articleContainer = document.getElementById('article-display');
        const articleCard = document.createElement('div');
        articleCard.classList.add('article-card');

        // Add title
        const titleElement = document.createElement('h3');
        titleElement.textContent = title;
        articleCard.appendChild(titleElement);

        // Add content
        const contentElement = document.createElement('p');
        contentElement.textContent = content;
        articleCard.appendChild(contentElement);

        // Add tags (if provided)
        if (tags) {
            const tagsElement = document.createElement('p');
            tagsElement.classList.add('tags');
            tagsElement.textContent = `Tagged: ${tags}`;
            articleCard.appendChild(tagsElement);
        }

        // Append the article card to the display container
        articleContainer.appendChild(articleCard);

        // Clear the form fields after submission
        document.getElementById('article-form').reset();
    }
});

const publishPost = () => {
    publish.addEventListener('click', () => {
        window.alert('Article Submitted');
        document.getElementById('article-form').reset();
        document.getElementById('article-display').reset();
    })
}