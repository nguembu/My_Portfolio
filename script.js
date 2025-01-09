// JavaScript à ajouter pour les fonctionnalités interactives comme l'ajout au panier, etc.
// Exemple de script pour une fonctionnalité d'ajout au panier

// Sélectionner les boutons "Ajouter au Panier"
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Ajouter un événement click à chaque bouton
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Obtenir les informations sur le produit à partir de l'élément parent
        const product = button.parentElement;

        // Récupérer le nom, le prix, etc. du produit
        const productName = product.querySelector('.product-name').textContent;
        const productPrice = parseFloat(product.querySelector('.product-price').textContent);

        // Appeler une fonction ou effectuer une action pour ajouter le produit au panier
        // Par exemple, mettre à jour l'affichage du panier ou envoyer une requête au serveur
        addToCart(productName, productPrice);
    });
});

// Fonction pour ajouter un produit au panier (exemple)
function addToCart(name, price) {
    console.log(`Produit ajouté au panier: ${name}, Prix: ${price}`);
    // Ici, vous pouvez implémenter la logique réelle pour ajouter au panier
    // Par exemple, mise à jour de l'affichage du panier ou envoi de données au serveur
}


let cart = [];

function addToCart(name, description) {
    cart.push({ name, description });
    alert(name + " a été ajouté au panier.");
}

function placeOrder() {
    if (cart.length === 0) {
        alert("Votre panier est vide !");
        return;
    }

    // Créer une fenêtre pour entrer les informations de commande
    const quantity = prompt("Entrez la quantité par produit :");
    const deliveryLocation = prompt("Entrez le lieu de livraison :");
    const deliveryDate = prompt("Entrez la date de livraison (format: JJ/MM/AAAA) :");

    if (quantity && deliveryLocation && deliveryDate) {
        // Afficher un message de confirmation avec les détails
        alert(`Votre commande a bien été enregistrée.\n\nDétails de la commande :\nQuantité : ${quantity}\nLieu : ${deliveryLocation}\nDate : ${deliveryDate}`);
        
        // Réinitialiser le panier
        cart = [];
    } else {
        alert("Veuillez remplir toutes les informations.");
    }
}
