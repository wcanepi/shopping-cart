// Declaring array
var productList = [
    {
        'category': 'Fiction',
        'booktitle': 'Where the Crawdads Sing'
    },
    {
        'category': 'Fiction',
        'booktitle': 'Connections in Death'
    },
    {
        'category': 'Fiction',
        'booktitle': 'The Lost Girls of Paris'
    },
    {
        'category': 'Nonfiction',
        'booktitle': 'Becoming'
    },
    {
        'category': 'Nonfiction',
        'booktitle': 'Educated'
    },
    {
        'category': 'Nonfiction',
        'booktitle': 'Grateful American'
    },
    {
        
        'category': 'Paperback',
        'booktitle': 'White Fragility'
    },
    {
        'category': 'Paperback',
        'booktitle': 'Born a Crime'
    },
    {
        'category': 'Paperback',
        'booktitle': 'Sapiens'
    },
    {
        'category': 'Teens',
        'booktitle': 'Five Feet Apart'
    },
    {
        'category': 'Teens',
        'booktitle': 'The Hate U Give'
    },
    {
        'category': 'Teens',
        'booktitle': 'On the Come Up'
    },
    {
        'category': 'Kids',
        'booktitle': 'Harry Potter'
    },
     {
        'category': 'Kids',
        'booktitle': 'Diary of a Wimpy Kid'
    },
     {
        'category': 'Kids',
        'booktitle': 'Dog Man'
    }
];
// Declare categories array
var categories = [];

// Get booktitle and index as parameters
function findDupes(booktitle, index){
    // Get all items that are currently in the shopping cart
    var cartList = $('.cart-list'), item = $(`#btn-${index}`);
    // For each item in the cart list, check to see if the given booktitle is a match
    for(let i = 0; i < cartList.length; i++){
        if(item.text() === booktitle){
            // Alert the user if the book title already in the shppoing bag
            alert(booktitle + ' is already in your shopping bag!');
        }else{
            // Create the button/event listener for the button in the shopping cart
            cartList.append(`<button id="btn-${index}" class="cart m-2 btn-${index} btn-outline-primary">${booktitle}</button>`);
            $(`#btn-${index}`).on('click', function(){
                // Remove the book from the shopping cart
                $(`#btn-${index}`).remove();
            });
        }
    }
}
// Create button for for each item in the array
for (let i = 0; i < productList.length; i++) {
    $('.item-list').append(`<button class="product m-1 btn-${i} ${productList[i].category}">${productList[i].booktitle}</button>`);
  

    // Eevent listener that checks the shopping cart for duplicates
    $(`.btn-${i}`).on('click', function () {
        findDupes(productList[i].booktitle, i);
    });
}
// Dynamically populate categories array
productList.forEach(item => {
    let exists = false;
    
    // Check to see if the books category already exists in the categories array
    categories.forEach(category => {
        if(item.category === category){exists = true;}
    });
    // Push the new category to the categories array, if it doesnt already exist
    if(!exists){
        categories.push(item.category);
        
        // Create button for the new category.
        $('.categories').append(`<button class="m-2" id="${item.category}">${item.category}</button>`);
        
        // Create anevent listener for the category button
        $(`#${item.category}`).on('click', function(){
            // Hide all products.
            $('.product').hide();
            // Only show the products that have the class that matches the category button.
            $(`.${item.category}`).show();
        });
        exists = false;
    }
});
// When all gets clicked, show all products button
$('#all').on('click', function(){
    $('.product').show();
});

