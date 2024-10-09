class Produit {

    constructor(_id,nom, prix) {
      this._id = _id;
      this.nom = nom;
      this.prix = prix;
    }

  }

  var laptop = new Produit(1,'laptop', 1500000);
  console.log(laptop);
  var smartphone = new Produit(2,'smartphone', 900000)
  console.log(smartphone);
  var airpods = new Produit(3,'airpods', 100000)
  console.log(airpods);
  
  var Produits = [laptop,smartphone,airpods]
  

  class Panier  extends Produit {

    constructor (_id, nom, prix, quantite){
        super(_id,nom,prix);
        this.quantite = quantite;
    }
    
    total(){
        return this.prix * this.quantite;
    }

    ajout(_id,nom,prix,quantite){
        var nouveau = new Panier(_id,nom,prix,quantite);
        return nouveau;
    }

  }

  var achat1 = new Panier (1,'laptop', 1500000, 3);
  var achat2 = new Panier(2, 'smartphone', 900000, 2)
  var achat3 = new Panier (3, 'airpods', 100000, 1)
  console.log(achat1);
  console.log(`Le total du panier 1 est :`, achat1.total());
  console.log(achat2);
  console.log(`Le total du panier 2 est :`, achat2.total());
  console.log(achat3);
  console.log(`Le total du panier 3 est :`, achat3.total());

  var achats = [achat1,achat2,achat3]
  console.log(achats);
   
  var ajout = achat1.ajout(3, 'airpods', 100000, 1)
  achats.push(ajout)
  console.log(achats);

  
   
  

  







