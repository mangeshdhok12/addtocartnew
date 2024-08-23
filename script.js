
function selectOffer(offerId) {
    // Remove 'selected' class from all offer boxes
    document.querySelectorAll('.offer-box').forEach(box => {
        box.classList.remove('selected');
        document.getElementById(box.id.replace('-box', '')).classList.add('hidden');
        
        // Reset the dimensions of all .offer-discount elements
        box.querySelector('.offer-discount').style.height = '70px';
        box.querySelector('.offer-discount').style.width = '52px';
    });

    // Add 'selected' class to the clicked offer box and show its hidden content
    const selectedBox = document.getElementById(`${offerId}-box`);
    selectedBox.classList.add('selected');
    document.getElementById(offerId).classList.remove('hidden');

    // Remove the dimensions of the .offer-discount element for the selected offer
    selectedBox.querySelector('.offer-discount').style.height = 'auto';
    selectedBox.querySelector('.offer-discount').style.width = 'auto';
   

    // selectedBox.querySelector('.offer-discount').style.top = '10px';
    // selectedBox.querySelector('.offer-discount').style.left = '10px';

    // Set the radio button to checked
    selectedBox.querySelector('input[type="radio"]').checked = true;

    // Update total price
    const price = selectedBox.querySelector('input[type="radio"]').value;
    document.querySelector('.total-price').textContent = `Total: $${price}.00 USD`;

    // Enable the "Add to Cart" button
    document.querySelector('.add-to-cart-btn').disabled = false;
}
