Réponse 1 :

La fonction foo() prend un array contenant des arrays de 2 nombres entiers en argument. Elle exécute d'abord un classement des arrays de l'array principal selon la valeur du 1er nombre de chaque array dans le sens croissant.
Ensuite, elle compare la valeur du 2ème nombre du 1er array avec la valeur du 1er nombre de l'array suivant :

* Si celui-ci est égal au supérieur, ces 2 arrays sont enlevés et remplacés au même endroit par un array contenant la 1ère valeur du 1er item et : 
- soit la 2ème valeur du 1er item si celle-ci est supérieur ou égal à la 2ème valeur du 2ème item
- soit la 2ème valeur du 2ème item si celle-ci est supérieur à la 2ème valeur du 1er item

* Si celui-ci est inférieur, la fonction passe à l'index suivant dans l'array principal, l'array 2 est comparé à l'array 3 et ainsi de suite on itère dans l'array dans que cette condition est vérifiée.


Réponse 3 : 

J'ai implémenté la fonction en 1H30

