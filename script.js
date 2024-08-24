//your code here
const imagesContainer = document.querySelector('.images');
        const resetButton = document.getElementById('reset');
        const verifyButton = document.getElementById('verify');
        const para = document.getElementById('para');
        let selectedImages = [];

        // Array of image classes
        const imageClasses = ['img1', 'img2', 'img3', 'img4', 'img5'];

        // Randomly select an image class to duplicate
        const duplicateImageClass = imageClasses[Math.floor(Math.random() * imageClasses.length)];

        // Add the duplicate to the array
        imageClasses.push(duplicateImageClass);

        // Shuffle the array
        imageClasses.sort(() => Math.random() - 0.5);

        // Render images
        imageClasses.forEach((imgClass, index) => {
            const imgElement = document.createElement('img');
            imgElement.classList.add(imgClass);
            imgElement.setAttribute('data-index', index);
            imagesContainer.appendChild(imgElement);

            imgElement.addEventListener('click', function() {
                // Add or remove selected image
                if (selectedImages.length < 2 && !imgElement.classList.contains('selected')) {
                    imgElement.classList.add('selected');
                    selectedImages.push(imgClass);

                    // Show Reset button after the first click
                    resetButton.style.display = 'inline-block';

                    // Show Verify button when two images are selected
                    if (selectedImages.length === 2) {
                        verifyButton.style.display = 'inline-block';
                    }
                }
            });
        });

        // Reset button functionality
        resetButton.addEventListener('click', function() {
            selectedImages = [];
            document.querySelectorAll('.selected').forEach(el => el.classList.remove('selected'));
            resetButton.style.display = 'none';
            verifyButton.style.display = 'none';
            para.textContent = '';
        });

        // Verify button functionality
        verifyButton.addEventListener('click', function() {
            verifyButton.style.display = 'none';

            if (selectedImages.length === 2 && selectedImages[0] === selectedImages[1]) {
                para.textContent = 'You are a human. Congratulations!';
            } else {
                para.textContent = 'We can\'t verify you as a human. You selected the non-identical tiles.';
            }
        });
