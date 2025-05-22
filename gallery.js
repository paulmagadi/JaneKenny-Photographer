document.addEventListener('DOMContentLoaded', function() {
    const photos = [
        { id: 1, src: 'images/nature/1.jpg', category: 'nature', title: 'Nature Landscape' },
        { id: 2, src: 'images/nature/2.jpg', category: 'portrait', title: 'Portrait Photography' },
        { id: 3, src: 'images/nature/1.jpg', category: 'urban', title: 'Urban Scene' },
        { id: 4, src: 'images/nature/1.jpg', category: 'travel', title: 'Travel Destination' },
        { id: 5, src: 'images/nature/2.jpg', category: 'nature', title: 'Mountain View' },
        { id: 6, src: 'images/nature/1.jpg', category: 'portrait', title: 'Female Portrait' },
        { id: 7, src: 'images/nature/1.jpg', category: 'urban', title: 'City Architecture' },
        { id: 8, src: 'images/nature/2.jpg', category: 'travel', title: 'Beach Vacation' },
        { id: 9, src: 'images/nature/1.jpg', category: 'nature', title: 'Forest Path' },
        { id: 10, src: 'images/nature/1.jpg', category: 'portrait', title: 'Male Portrait' },
        { id: 11, src: 'images/nature/2.jpg', category: 'urban', title: 'Street Photography' },
        { id: 12, src: 'images/nature/1.jpg', category: 'travel', title: 'European City' },
        { id: 13, src: 'images/nature/2.jpg', category: 'nature', title: 'Waterfall' },
        { id: 14, src: 'images/nature/1.jpg', category: 'portrait', title: 'Child Portrait' },
        { id: 15, src: 'images/nature/1.jpg', category: 'urban', title: 'Night City' },
        { id: 16, src: 'images/nature/2.jpg', category: 'travel', title: 'Asian Destination' },
        { id: 17, src: 'images/jenny/1.png', category: 'Jenny', title: 'Jenny' },
        { id: 18, src: 'images/jenny/2.png', category: 'Jenny', title: 'Jenny' },
        { id: 19, src: 'images/jenny/3.png', category: 'Jenny', title: 'Jenny' },
        { id: 20, src: 'images/jenny/4.png', category: 'Jenny', title: 'Jenny' },
        { id: 21, src: 'images/jenny/5.png', category: 'Jenny', title: 'Jenny' },
        { id: 22, src: 'images/jenny/6.png', category: 'Jenny', title: 'Jenny' },
        { id: 23, src: 'images/jenny/7.png', category: 'Jenny', title: 'Jenny' },
        { id: 24, src: 'images/jenny/8.png', category: 'Jenny', title: 'Jenny' },
        { id: 25, src: 'images/jenny/9.png', category: 'Jenny', title: 'Jenny' },
        { id: 26, src: 'images/jenny/10.jpg', category: 'Jenny', title: 'Jenny' },
    ];

    // DOM Elements
    const gallery = document.getElementById('gallery');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const prevPageBtn = document.getElementById('prev-btn');
    const nextPageBtn = document.getElementById('next-btn');
    const pageNumbers = document.getElementById('page-numbers');

    // Pagination variables
    const itemsPerPage = 8;
    let currentPage = 1;
    let filteredPhotos = [...photos];
    let activeFilter = 'all';

    // Initialize the gallery
    function initGallery() {
        renderGallery();
        renderPagination();
        setupEventListeners();
    }

    // Render gallery items
    function renderGallery() {
        gallery.innerHTML = '';
        
        // Calculate pagination
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const photosToShow = filteredPhotos.slice(startIndex, endIndex);
        
        if (photosToShow.length === 0) {
            gallery.innerHTML = '<p class="no-results">No photos found matching your criteria.</p>';
            return;
        }
        
        photosToShow.forEach(photo => {
            const galleryItem = document.createElement('div');
            galleryItem.className = `gallery-item ${photo.category}`;
            galleryItem.dataset.category = photo.category;
            
            galleryItem.innerHTML = `
                <img src="${photo.src}" alt="${photo.title}">
                <span class="category">${photo.category}</span>
            `;
            
            gallery.appendChild(galleryItem);
        });
    }

    // Render pagination controls
    function renderPagination() {
        pageNumbers.innerHTML = '';
        const totalPages = Math.ceil(filteredPhotos.length / itemsPerPage);
        
        if (totalPages <= 1) {
            pageNumbers.style.display = 'none';
            prevPageBtn.disabled = true;
            nextPageBtn.disabled = true;
            return;
        }
        
        pageNumbers.style.display = 'flex';
        
        // Previous button state
        prevPageBtn.disabled = currentPage === 1;
        
        // Next button state
        nextPageBtn.disabled = currentPage === totalPages;
        
        // Page numbers
        for (let i = 1; i <= totalPages; i++) {
            const pageNumber = document.createElement('span');
            pageNumber.className = `page-number ${i === currentPage ? 'active' : ''}`;
            pageNumber.textContent = i;
            pageNumber.addEventListener('click', () => {
                currentPage = i;
                renderGallery();
                renderPagination();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
            pageNumbers.appendChild(pageNumber);
        }
    }

    // Filter photos by category
    function filterPhotos(category) {
        activeFilter = category;
        currentPage = 1;
        
        if (category === 'all') {
            filteredPhotos = [...photos];
        } else {
            filteredPhotos = photos.filter(photo => photo.category === category);
        }
        
        renderGallery();
        renderPagination();
    }

    // Set up event listeners
    function setupEventListeners() {
        // Filter buttons
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                filterPhotos(button.dataset.filter);
            });
        });
        
        // Previous button
        prevPageBtn.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                renderGallery();
                renderPagination();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
        
        // Next button
        nextPageBtn.addEventListener('click', () => {
            const totalPages = Math.ceil(filteredPhotos.length / itemsPerPage);
            if (currentPage < totalPages) {
                currentPage++;
                renderGallery();
                renderPagination();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    }

    // Initialize the gallery
    initGallery();
});