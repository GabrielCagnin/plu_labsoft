import { Meteor } from 'meteor/meteor';

import { Products } from '../imports/api/collections.js';

Meteor.startup(() => {
  // code to run on server at startup

	Meteor.method("produto", function(id) {
		var product = Products.findOne({idProduto: parseInt(id, 10)});
		if(product)
			return {
				idProduto: product.idProduto,
				nome: product.nome,
				valor: product.valor,
				marca: product.marca,
				categoria: product.categoria,
				imagem: product.imagem
			};
		else
			return -1;
	}, {
		url: "produto/:0",
		httpMethod: "get"
	});

  
});
