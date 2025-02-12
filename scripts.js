function openAllLinks(categoryId, event) {
    event.stopPropagation(); // Prevent details toggle when clicking the button
    let links = document.querySelectorAll(`#${categoryId} a`);
    links.forEach(link => window.open(link.href, '_blank'));
}