/* ===== LISTA DE MODELOS =====
   Para adicionar: copie uma linha e troque os dados.
   cat   = id da categoria (veja CATEGORIAS)
   arq   = arquivo guardado no Supabase (pasta arquivos/, protegido por login) — ou use link: "https://drive..."
   foto  = imagem dentro de membros/fotos/
   novo  = true mostra a etiqueta NOVO
*/
window.CATEGORIAS = [
  {id:'letreiros', nome:'Letreiros', ico:'🔤'},
  {id:'arvore', nome:'Enfeites de Árvore', ico:'🎄'},
  {id:'noel', nome:'Papai Noel', ico:'🎅'},
  {id:'renas', nome:'Renas', ico:'🦌'},
  {id:'neve', nome:'Bonecos de Neve', ico:'⛄'},
  {id:'presepio', nome:'Presépio', ico:'⭐'},
  {id:'nomes', nome:'Enfeites com Nome', ico:'🏷️'},
  {id:'cortadores', nome:'Cortadores de Biscoito', ico:'🍪'},
  {id:'luminarias', nome:'Luminárias', ico:'💡'},
  {id:'mesa', nome:'Decoração de Mesa', ico:'🕯️'},
  {id:'chaveiros', nome:'Chaveiros', ico:'🔑'},
  {id:'tags', nome:'Tags de Presente', ico:'🎁'},
  {id:'flocos', nome:'Flocos de Neve', ico:'❄️'},
  {id:'estrelas', nome:'Estrelas', ico:'🌟'},
  {id:'guirlandas', nome:'Guirlandas', ico:'💚'},
];
window.ITENS = [
  {nome:'Boneco de Neve Articulado (sentado)', cat:'neve', arq:'boneco-neve-articulado.zip', foto:'boneco-neve-articulado.webp', info:'Arquivo 3MF · pernas articuladas', novo:true},
  {nome:'Renas Caneladas Modernas', cat:'renas', arq:'renas-caneladas.zip', foto:'renas-caneladas.webp', info:'Arquivo 3MF · decoração', novo:true},
  {nome:'Casinha de Pinha para Vela', cat:'luminarias', arq:'casinha-pinha-vela.zip', foto:'casinha-pinha-vela.webp', info:'Arquivo 3MF · para vela de LED', novo:true},
  {nome:'Vila de Casinhas Iluminadas', cat:'luminarias', arq:'vila-casinhas-vela.zip', foto:'vila-casinhas-vela.webp', info:'6 STL · para vela de LED', novo:true},
  {nome:'Mini Papai Noel com Saco', cat:'noel', arq:'mini-papai-noel-saco.zip', foto:'mini-papai-noel-saco.webp', info:'Peça pequena e rápida', novo:true},
  {nome:'Bolas de Natal Modernas (8 modelos)', cat:'arvore', arq:'bolas-natal-modernas.zip', foto:'bolas-natal-modernas.webp', info:'8 STL · para pendurar na árvore', novo:true},
  {nome:'Papai Noel de Tricô', cat:'noel', arq:'papai-noel-trico.zip', foto:'papai-noel-trico.webp', info:'Peças separadas por cor · encaixe', novo:true},
  {nome:'Rena de Tricô', cat:'renas', arq:'rena-trico.zip', foto:'rena-trico.webp', info:'Corpo, chifres, olhos e nariz separados', novo:true},
  {nome:'Boneco de Neve de Tricô', cat:'neve', arq:'boneco-neve-trico.zip', foto:'boneco-neve-trico.webp', info:'Gorro, cachecol e corpo separados', novo:true},
  {nome:'Biscoito de Gengibre de Tricô', cat:'mesa', arq:'biscoito-gengibre-trico.zip', foto:'biscoito-gengibre-trico.webp', info:'Peças separadas por cor', novo:true},
  {nome:'Boneco de Neve com Gorro Marrom', cat:'neve', arq:'boneco-neve-gorro-marrom.zip', foto:'boneco-neve-gorro-marrom.webp', info:'Ideal para multicor (AMS)', novo:true},
  {nome:'Rena Nórdica Canelada', cat:'renas', arq:'rena-nordica-canelada.zip', foto:'rena-nordica-canelada.webp', info:'Peça única · decoração', novo:true},
  {nome:'Árvores Espirais Caneladas (15 cm)', cat:'arvore', arq:'arvore-espiral-15cm.zip', foto:'arvore-espiral-15cm.webp', info:'2 partes · decoração de mesa', novo:true},
  {nome:'Árvore de Natal com Estrela', cat:'arvore', arq:'arvore-natal-estrela.zip', foto:'arvore-natal-estrela.webp', info:'Andares e estrela separados', novo:true},
  {nome:'Gorro de Papai Noel Canelado', cat:'mesa', arq:'gorro-papai-noel-canelado.zip', foto:'gorro-papai-noel-canelado.webp', info:'Gorro, base e pompom', novo:true},
  {nome:'Bandeja com Anjo e Casinhas', cat:'luminarias', arq:'deko-set-anjo-casinhas.zip', foto:'deko-set-anjo-casinhas.webp', info:'Casinhas para luz de LED', novo:true},
  {nome:'Feliz Natal com Floco de Neve (8 cm)', cat:'letreiros', arq:'feliz-natal-floco-8cm.zip', foto:'feliz-natal-floco-8cm.webp', info:'1 STL · imprime sem suporte', novo:true},
];
