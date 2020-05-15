// JavaScript Document

var category_select = 0;
var category_name = "";
var category_nameUrl = "";
var thumb_select = 0;
var item_select = 0;

//list_cardapio[c][1][i][1]; categoria | 0 nome ou 1 list itens | item | 0 dados ou 1 precos 

var list_cardapio = [
						["Pratos Variados", [//############## GRELHADOS							 	
							
							[
								["Medalhas de Filet Mignon ao Creme de Gorgonzola", "grelhados/strog_file_gorgonzola.jpg", "grelhados/strog_file_gorgonzola.jpg", "Acompanhado de arroz, batata palha ou chips","","","0g.","0g."],
								[								
									["Filet Mignon", "", "R$ 43,90","R$ 73,90"]
								]
							],//------ ITEM FIM
                            /*
							[
                                ["Camarão ao Molho Cremoso de Requeijão", "grelhados/thumb/strog_camarao_ao_molho.jpg", "grelhados/strog_camarao_ao_molho.jpg", "Acompanhado de arroz, batata palha ou chips","","","650g.","1300g."],
                                [
                                    ["Camarão", "", "R$ 42,90","R$ 79,90"]
                                ]
                            ],//------ ITEM FIM
							*/

							[
								["Filet à Parmeggiana", "grelhados/strog_filet_a_parmeggiana.jpg", "grelhados/strog_filet_a_parmeggiana.jpg", "Carne empanada, coberta com presunto, queijo e molho de tomate, acompanhada de arroz e purê de batata ou batata sautê.", "", "","1000g.",""],
								[								
									["Frango", "", "R$ 36,90",""],
									["Filet Mignon", "", "R$ 43,90",""]
								]
							],//------ ITEM FIM
							[
								["Arroz à Grega", "grelhados/strog_arroz_a_grega.jpg", "grelhados/strog_arroz_a_grega.jpg", "Carne a sua escolha, acompanhada de arroz à grega e purê de batatas.", "Arroz à grega (vagem, passas, presunto, pimentão, cenoura e cebola)","","700g.","140g."],
								[								
									["Tilápia", "", "R$ 38,90","R$ 63,90"],
									["Alcatra", "", "R$ 38,90","R$ 65,90"],
									["Frango", "", "R$ 36,90","R$ 59,90"],
									["Lombo", "", "R$ 37,90","R$ 62,90"],
									["Filet Mignon", "", "R$ 43,90","R$ 73,90"],
									// ["Salmão", "", "R$ 40,90","R$ 75,90"],
									["Camarão", "", "R$ 46,90","R$ 81,90"]
								]
							],//------ ITEM FIM
							[
								["Arroz à piamontês", "grelhados/strog_arroz_a_piamontes.jpg", "grelhados/strog_arroz_a_piamontes.jpg", "Carne a sua escolha, acompanhada de arroz à piamontês, batata palha ou chips.", "","","750g.","1400g."],
								[								
									["Tilápia", "", "R$ 38,90","R$ 63,90"],
									["Alcatra", "ao molho de vinho", "R$ 38,90","R$ 65,90"],
									["Frango", "", "R$ 36,90","R$ 59,90"],
									["Lombo", "", "R$ 37,90","R$ 62,90"],
									["Filet Mignon", "ao molho de vinho", "R$ 43,90","R$ 73,90"],
									// ["Salmão", "", "R$ 40,90","R$ 75,90"],
									["Camarão", "", "R$ 46,90","R$ 81,90"]
								]
							],//------ ITEM FIM
							[	
								["Panachés de Legumes", "grelhados/strog_panaches_de_legumes.jpg", "grelhados/strog_panaches_de_legumes.jpg", "Carne a sua escolha, acompanhada de leve e saboroso mix de legumes cozidos e arroz.", "","","700g.","1400g."],
								[								
									["Tilápia", "", "R$ 38,90","R$ 63,90"],
									["Alcatra", "ao molho de vinho", "R$ 38,90","R$ 65,90"],
									["Frango", "ao molho de ervas", "R$ 36,90","R$ 59,90"],
									["Lombo", "", "R$ 37,90","R$ 62,90"],
									["Filet Mignon", "ao molho de vinho", "R$ 43,90","R$ 73,90"],
									// ["Salmão", "ao molho de ervas", "R$ 40,90","R$ 75,90"],
									["Camarão", "", "R$ 46,90","R$ 81,90"]
								]
							],//------ ITEM FIM
							[
								["Moquequinha", "grelhados/strog_muqueca.jpg", "grelhados/strog_muqueca.jpg", "Moqueca de camarão ou tilápia, acompanha arroz e purê de batatas ou batata sautê.", "","","900g.","1800g."],
								[
									["Tilápia", "", "R$ 38,90","R$ 63,90"],
									["Camarão", "", "R$ 46,90","R$ 81,90"]
								]
							],//------ ITEM FIM						
							[
								["Tropeiro", "grelhados/strog_tropeiro.jpg", "grelhados/strog_tropeiro.jpg", "Carne a sua escolha, acompanhada de feijão tropeiro, arroz, vinagrete, e batata chips ou palha.", "", "","800g.","1600g."],
								[								
									["Alcatra", "", "R$ 38,90","R$ 65,90"],
									["Frango", "", "R$ 36,90","R$ 59,90"],
									["Linguiça", "", "R$ 36,90","R$ 62,90"],
									["Lombo", "", "R$ 37,90","R$ 62,90"],
									["Filet Mignon", "", "R$ 43,90","R$ 73,90"]
								]
							],//------ ITEM FIM
							[
								["Filet à Brasileira", "grelhados/strog_filet_a_brasileira.jpg", "grelhados/strog_filet_a_brasileira.jpg", "Carne a sua escolha, acompanhada de farofa de ovos especial, arroz, vinagrete e batata chips.", "", "","800g.","1600g."],
								[								
									["Alcatra", "ao molho de vinho", "R$ 38,90","R$ 65,90"],
									["Frango", "", "R$ 36,90","R$ 59,90"],
									["Lombo", "", "R$ 37,90","R$ 62,90"],
									["Filet Mignon", "ao molho de vinho", "R$ 43,90","R$ 73,90"]
								]
							],//------ ITEM FIM
							[
								["Mexidão", "grelhados/strog_mexidao.jpg", "grelhados/strog_mexidao.jpg", "Carne a sua escolha, arroz, feijão, cebola, ovo, bacon, farinha e cheiro verde.", "", "","750g.",""],
								[								
									["Alcatra", "", "R$ 37,90",""],
									["Frango", "", "R$ 36,90",""],
									["Linguiça", "", "R$ 36,90",""],
									["Filet Mignon", "", "R$ 41,90",""]
								]
							]//------ ITEM FIM							
						],1], //############## GRELHADOS FIM
						["Strogonoffs", [//############## STROGONOFFS 	
							[
								["Strogonoff de Frango", "strogonoff/strog_strogonoff_frango.jpg", "strogonoff/strog_strogonoff_frango.jpg", "Pedaços de frango, champignons, creme de leite e um molho especial à base de tomate.", "Arroz + Batata palha ou Arroz + Batata chips.", "","750g.","1500g."],
								[								
									["Frango", "", "R$ 36,90","R$ 59,90"]
								]
							],//------ ITEM FIM
							[
								["Strogonoff de Filet", "strogonoff/strog_strogonoff_filet.jpg", "strogonoff/strog_strogonoff_filet.jpg", "Pedaços de filet mignon ou alcatra, champignons, creme de leite e um molho especial à base de tomate.", "Arroz + Batata palha ou Arroz + Batata chips.", "","750g.","1500g."],
								[								
									["File Mignon", "", "R$ 43,90","R$ 73,90"],
									["Alcatra", "", "R$ 38,90","R$ 65,90"]
								]
							],//------ ITEM FIM
							// [
							// 	["Strogonoff de Salmão", "strogonoff/strog_strogonoff_salmao.jpg", "strogonoff/strog_strogonoff_salmao.jpg", "Pedaços de salmão, champignons, creme de leite e um molho especial à base de tomate.", "Arroz + Batata palha ou Arroz + Batata chips.", "","750g.","1500g."],
							// 	[
							// 		["Salmão", "", "R$ 43,90","R$ 79,90"]
							// 	]
							// ],//------ ITEM FIM
							[
								["Strogonoff de Camarão", "strogonoff/strog_strogonoff_camarao.jpg", "strogonoff/strog_strogonoff_camarao.jpg", "Camarões, champignons, creme de leite e um molho especial à base de tomate.", "Arroz + Batata palha ou Arroz + Batata chips.", "","750g.","1500g."],
								[								
									["Camarão", "", "R$ 46,90","R$ 81,90"]
								]
							],//------ ITEM FIM
							[
								["Strogonoff Vegetariano", "strogonoff/strog_strogonoff_vegetariano.jpg", "strogonoff/strog_strogonoff_vegetariano.jpg", "Cenoura, brócolis, couve-flor, azeitonas pretas, milho, champignons, creme de leite e molho especial à base de tomate.", "Arroz + Batata palha ou Arroz + Batata chips.", "","750g.","1500g."],
								[								
									["Vegetariano", "", "R$ 35,90","R$ 62,90"]
								]
							]//------ ITEM FIM

						],1], //############## STROGONOFFS FIM
						["Saladas", [//############## SALADAS 	
							[
								["Caesar Salad", "saladas/strog_ceasar_salad.jpg", "saladas/strog_ceasar_salad.jpg", "Alface americana, frango desfiado, parmesão e croutons ao molho caesar.", "Opções de Molhos: Molho Italian, Molho French e Molho Ceasar.", "","",""],
								[								
									["Caesar Salad", "", "R$ 28,90",""]
								]
							],//------ ITEM FIM
							
							[
								["Salada Mista", "saladas/strog_salada_mista.jpg", "saladas/strog_salada_mista.jpg", "Mix de folhas, cenoura, tomate-maçã, azeitonas pretas, cebola, champignon, parmesão e frango desfiado.", "Opções de Molhos: Molho Italian, Molho French e Molho Ceasar.", "","",""],
								[								
									["Salada Mista", "", "R$ 29,90",""]
								]
							],//------ ITEM FIM
							/*[
								["Italiana", "saladas/strog_italiana.jpg", "saladas/strog_italiana.jpg", "Mussarela de búfala com tomate seco, rúcula e alface americana.", "Opções de Molhos: Molho Italian, Molho French e Molho Ceasar.", ""],
								[								
									["Italiana", "", "R$ 19,90",""]
								]
							],//------ ITEM FIM*/
							[
								["Salada de Legumes", "saladas/strog_salada_legumes.jpg", "saladas/strog_salada_legumes.jpg", "Mix de folhas, couve flor, brócolis, cenoura, melão e tomate-cereja.", "Opções de Molhos: Molho Italian, Molho French e Molho Ceasar.", "","",""],
								[								
									["Salada de Legumes", "", "R$ 29,90",""]
								]
							],//------ ITEM FIM
							[
								["Salada de Palmito", "saladas/strog_salada_palmito.jpg", "saladas/strog_salada_palmito.jpg", "Mix de folhas, tomate-maçã e palmito.", "Opções de Molhos: Molho Italian, Molho French e Molho Ceasar.", "","",""],
								[								
									["Salada de Palmito", "", "R$ 27,90",""]
								]
							],//------ ITEM FIM
							[
								["Salada Tradicional", "saladas/strog_arroz_tradicional.jpg", "saladas/strog_arroz_tradicional.jpg", "Mix de folhas, tomate-maçã, tomate-cereja, parmesão ralado e croutons.", "Opções de Molhos: Molho Italian, Molho French e Molho Ceasar.", "","",""],
								[								
									["Salada Tradicional", "", "R$ 25,90",""]
								]
							]//------ ITEM FIM
							
						],0], //############## SALADAS FIM
						["Sanduiches", [//############## SANDUICHES
							[
								["Sanduiche de Filet Mignon", "sanduiches/strog_sanduiche_de_filet.jpg", "sanduiches/strog_sanduiche_de_filet.jpg", "Baguete, filet mignon, cebola roxa, queijo derretido, alface, tomate e molho barbecue.", "Padrão (1 unididade)", "","",""],
								[
									["Filet Mignon", "", "R$ 26,90",""]
								]
							],//------ ITEM FIM
							[
								["Sanduiche de Frango", "sanduiches/strog_sanduiche_de_frango.jpg", "sanduiches/strog_sanduiche_de_frango.jpg", "Baguete, filet de frango, cebola roxa, queijo derretido, alface, tomate, manjericão e molho de mostarda e mel.", "Padrão (1 unididade)", "","",""],
								[
									["Frango", "", "R$ 22,90",""]
								]
							],//------ ITEM FIM
							[
								["Sanduiche de Linguiça", "sanduiches/strog_sanduiche_de_linguica.jpg", "sanduiches/strog_sanduiche_de_linguica.jpg", "Baguete, linguiça de lombo, cebola roxa, alface e tomate.", "Padrão (1 unididade)", "","",""],
								[
									["Linguiça", "", "R$ 22,90",""]
								]
							],//------ ITEM FIM
							[
								["Sanduiche de Alcatra", "sanduiches/strog_sanduiche_de_alcatra.jpg", "sanduiches/strog_sanduiche_de_alcatra.jpg", "Baguete, alcatra, cebola roxa, queijo derretido, alface, tomate e molho barbecue.", "Padrão (1 unididade)", "","",""],
								[
									["Alcatra", "", "R$ 22,90",""]
								]
							],//------ ITEM FIM
							[
								["Sanduiche Marguerita", "sanduiches/strog_sanduiche_marguerita.jpg", "sanduiches/strog_sanduiche_marguerita.jpg", "Baguete aberta, molho de tomate, queijo gratinado, tomate-cereja e manjericão.", "Padrão (1 unididade)", "","",""],
								[
									["Marguerita", "", "R$ 20,90",""]
								]
							]//------ ITEM FIM

							/*
							[
								["Hamburguer Minas", "sanduiches/strog_sanduiche_padrao.jpg", "sanduiches/strog_sanduiche_padrao.jpg", "Pão com gergelim, hamburguer, queijo canastra, bacon crocante, cebola caramelizada e molho especial de goiabada.", "Padrão (1 unididade)", "","",""],
								[
									["Minas", "", "R$ 23,90",""]
								]
							],//------ ITEM FIM
							[
								["Hamburguer Brasil", "sanduiches/strog_sanduiche_padrao.jpg", "sanduiches/strog_sanduiche_padrao.jpg", "Pão australiano, hamburguer, Mussarela, cebola caramelizada, alface, tomate uva e molho de queijo.", "Padrão (1 unididade)", "","",""],
								[
									["Brasil", "", "R$ 23,90",""]
								]
							],//------ ITEM FIM
							[
								["Hamburguer Itália", "sanduiches/strog_sanduiche_padrao.jpg", "sanduiches/strog_sanduiche_padrao.jpg", " Pão com gergelim, hamburguer, creme de gorgonzola, champignon, cebola caramelizada, alface, tomate uva e molho ceasar.", "Padrão (1 unididade)", "","",""],
								[
									["Itália", "", "R$ 27,90",""]
								]
							],//------ ITEM FIM
							[
								["Hamburguer American", "sanduiches/strog_sanduiche_padrao.jpg", "sanduiches/strog_sanduiche_padrao.jpg", "Pão autraliano, hamburguer, queijo cheddar, bacon, cebola caramelizada e molho barbecue.", "Padrão (1 unididade)", "","",""],
								[
									["American", "", "R$ 27,90",""]
								]
							],//------ ITEM FIM
							[
								["Hamburguer México", "sanduiches/strog_sanduiche_padrao.jpg", "sanduiches/strog_sanduiche_padrao.jpg", "Pão com Gergelim, hamburguer, catupiry, bacon, molho de queijo, cebola caramelizada e molho picante.", "Padrão (1 unididade)", "","",""],
								[
									["México", "", "R$ 27,90",""]
								]
							]//------ ITEM FIM
							*/

						],0], //############## SANDUICHES FIM
						["Massas e Risotos", [//############## MASSAS 	
							[// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ OBservar depois @@@@@@@@@@@@@@@
								["Filet à Paillard", "grelhados/strog_filet_a_paiard.jpg", "grelhados/strog_filet_a_paiard.jpg", "Spaghetti ou Fettuccine ao molho branco, acompanhado de filet mignon ao molho de vinho, champignons e queijo ralado.", "", "","1100g.",""],
								[								
									["Filet Mignon", "ao molho de vinho", "R$ 43,90",""]
								]
							], //------ ITEM FIM
							[
								["Risotos", "massas/strog_risoto_camarao.jpg", "massas/strog_risoto_camarao.jpg", "Todos os risotos levam azeitonas pretas, passas e milho, acompanhados de carne a sua escolha.", "", "","900g.","0g."],
								[								
									["Alcatra", "", "R$ 32,90",""],
									["Frango", "", "R$ 31,90",""],									
									["Vegetariano", "", "R$ 32,90",""],
									["Filet Mignon", "", "R$ 36,90",""],
									// ["Salmão", "", "R$ 40,90",""],
									["Camarão", "", "R$ 43,90",""]
								]
							],//------ ITEM FIM
							[
								["Spaghetti à Bolonhesa", "massas/strog_spaguetti_bolonhesa.jpg", "massas/strog_spaguetti_bolonhesa.jpg", "Spaghetti, Fettuccini ou Penne com molho bolonhesa, acompanhado de parmesão ralado.", "", "","900g.","0g."],
								[								
									["Bolonhesa", "", "R$ 37,90","R$ 63,90"]
								]
							],//------ ITEM FIM
							[
								["Spaghetti Parmegiana", "massas/strog_spaguetti_parmegiana.jpg", "massas/strog_spaguetti_parmegiana.jpg", "Spaghetti ou Fettuccini com molho de tomate, acompanhado de filet mignon ou frango à parmeggiana.", "", "","900g.","0g."],
								[								
									["Frango", "", "R$ 36,90",""],
									["Filet Mignon", "", "R$ 43,90",""]
								]
							],//------ ITEM FIM
							[
								["Spaghetti ao Molho Rosé", "massas/strog_spaguetti_molhorose.jpg", "massas/strog_spaguetti_molhorose.jpg", "Spaghetti, Fettuccini ou Penne com molho rosé.", "", "","850g.","0g."],
								[								
									["Molho Rosé", "", "R$ 31,90",""]
								]
							],//------ ITEM FIM
							[
								["Penne com Camarões", "massas/strog_penne_camaroes.jpg", "massas/strog_penne_camaroes.jpg", "Spaghetti, Fettuccini ou Penne com molho branco, acompanhado de camarões.", "", "","1000g.","0g."],
								[								
									["Camarão", "", "R$ 46,90",""]
								]
							],//------ ITEM FIM
							[
								["Monte seu Prato", "massas/strog_monte_seu_prato.jpg", "massas/strog_monte_seu_prato.jpg", "Escolha a massa, o molho e o(s) acréscimo(s). Todas as massas, italianas Grano Duro + parmesão ralado.", "<span>Molhos:</span> Branco ou Rosé ou Ao Sugo ou À Bolonhesa. <br><br><span>Acréscimos:</span> Frango Desfiado, Filet, Frango Grelhado, Camarão. <br><br><span>Preço:</span> Sob Consulta.", ""],
								[								
								]
							]//------ ITEM FIM
						],1], //############## MASSAS FIM
						["Rolinhos", [//############## ROLINHOS 	
							[
								["Rolinho Camarão", "rolinhos/strog_rolinho_camarao.jpg", "rolinhos/strog_rolinho_camarao.jpg", "Massa crocante com camarão, requeijão e cebolinha.", /*"Padrão (1 unididade) | Super (2 unidades)"*/"", "","",""],
								[								
									["Camarão", "", "R$ 10,90","R$ 18,90"]
								]
							],//------ ITEM FIM
							/*[
								["Rolinho Queijo", "rolinhos/strog_rolinho_queijo.jpg", "rolinhos/strog_rolinho_queijo.jpg", "Massa crocante com quejo mussarela.", "Padrão (1 unididade) | Super (2 unidades)", "","",""],
								[								
									["Queijo", "", "R$ 5,90","R$ 9,90"]
								]
							],//------ ITEM FIM */
							[
								["Rolinho Primavera", "rolinhos/strog_rolinho_primavera.jpg", "rolinhos/strog_rolinho_primavera.jpg", "Massa crocante com carne cenoura e repolho.", /*"Padrão (1 unididade) | Super (2 unidades)"*/"", "","",""],
								[								
									["Primavera", "", "R$ 5,90","R$ 9,90"]
								]
							],//------ ITEM FIM
							[
								["Rolinho Frango com Requeijão", "rolinhos/strog_rolinho_frango.jpg", "rolinhos/strog_rolinho_frango.jpg", "Massa crocante com frango, requeijão, cenoura e cebolinha.", /*"Padrão (1 unididade) | Super (2 unidades)"*/"", "","",""],
								[								
									["Frango com Requeijão", "", "R$ 6,90","R$ 11,90"]
								]
							],//------ ITEM FIM							
							/*[
								["Rolinho Carne Seca", "rolinhos/strog_rolinho_carne_seca.jpg", "rolinhos/strog_rolinho_carne_seca.jpg", "Massa crocante com carne seca, requeijão e cebolinha.", "Padrão (1 unididade) | Super (2 unidades)", "","",""],
								[								
									["Carne Seca", "", "R$ 7,90","R$ 13,90"]
								]
							],//------ ITEM FIM */
							/*[
								["Rolinho Romeu e Julieta", "rolinhos/strog_rolinho_romeu_julieta.jpg", "rolinhos/strog_rolinho_romeu_julieta.jpg", "Massa crocante com queijo e goibada, coberta com açucar e canela.", "Padrão (1 unididade) | Super (2 unidades)", "","",""],
								[								
									["Romeu e Julieta", "", "R$ 5,90","R$ 9,90"]
								]
							],//------ ITEM FIM */
							/*[
								["Rolinho Banana com Chocolate", "rolinhos/strog_rolinho_chocolate_banana.jpg", "rolinhos/strog_rolinho_chocolate_banana.jpg", "Massa crocante com banana e chocolate, coberta com açucar e canela.", "Padrão (1 unididade) | Super (2 unidades)", "","",""],
								[								
									["Banana com Chocolate", "", "R$ 4,50","R$ 7,00"]
								]
							],//------ ITEM FIM */
							// [
							// 	["Rolinho Doce de Leite", "rolinhos/strog_rolinho_doce_leite.jpg", "rolinhos/strog_rolinho_doce_leite.jpg", "Massa crocante com doce de leite, coberta com açucar e canela.", /*"Padrão (1 unididade) | Super (2 unidades)"*/"", "","",""],
							// 	[
							// 		["Doce de Leite", "", "R$ 7,90","R$ 14,90"]
							// 	]
							// ]//------ ITEM FIM
						],2]
						, //############## ROLINHOS FIM
						["FIT", [//############## FIT 	
							[
								["Panachê FIT", "fit/strog_fit_panache.jpg", "fit/strog_fit_panache.jpg", "Brócolis, Couve-Flor, Cenoura, palmito salteados ao molho de ervas, arroz integral e 01 proteína a escolha.", "", "","",""],
								[								
									["Frango", "", "R$ 36,90","R$ 59,90"],
									["Alcatra: ", "", "R$ 38,90","R$ 65,90"],
									["Camarão", "", "R$ 46,90","R$ 81,90"],
									["Filet", "", "R$ 43,90","R$ 73,90"],
									["Lombo", "", "R$ 37,90","R$ 62,90"],
									["Tilápia", "", "R$ 38,90","R$ 63,90"],
									// ["Salmão", "", "R$ 39,90","R$ 74,90"]
								]
							],//------ ITEM FIM
							[
								["À Grega FIT", "fit/strog_fit_a_grega.jpg", "fit/strog_fit_a_grega.jpg", "Arroz integral com vagem, cenoura, cebola, uva-passa e cebolinha, mais purê de moranga e 01 proteína a escolha.", "", "","",""],
								[								
									["Alcatra: ", "", "R$ 38,90","R$ 65,90"],
									["Frango", "", "R$ 36,90","R$ 59,90"],
									["Camarão", "", "R$ 46,90","R$ 81,90"],
									["Filet", "", "R$ 43,90","R$ 73,90"],
									["Lombo", "", "R$ 37,90","R$ 62,90"],
									["Tilápia", "", "R$ 43,90","R$ 63,90"],
									// ["Salmão", "", "R$ 43,90","R$ 79,90"]
								]
							],//------ ITEM FIM
							[
								["Spaguetti FIT", "fit/strog_fit_spaguetti.jpg", "fit/strog_fit_spaguetti.jpg", "Spaguetti de massa integral, molho de tomates frescos e 01 proteína a escolha.", "", "","",""],
								[								
									["Frango", "", "R$ 30,90",""],
									["Camarão", "", "R$ 42,90",""],
									["Filet", "", "R$ 35,90",""],
									["Lombo", "", "R$ 31,90",""],
									["Tilápia", "", "R$ 34,90",""],
									// ["Salmão", "", "R$ 39,90",""]
								]
							],//------ ITEM FIM
							[
								["Salada FIT", "fit/strog_fit_salada.jpg", "fit/strog_fit_salada.jpg", "Mix de folhas, tomate grape, brócolis, couve-flor, cenoura, frango desfiado, batata doce e molho de ervas.", "", "","",""],
								[								
									["Salada", "", "R$ 25,90",""]
								]
							],//------ ITEM FIM
							
						],1] //############## FIT FIM

					];
					
var list_acrescimos = 	[
							[
								["Champignon","R$ 2,90"],
								// ["Azeitona Preta","R$ 2,90"],  //?
								["Milho","R$ 2,50"],
								["Purê de Batatas","R$ 5,90"],
								["Palmito","R$ 5,90"],
								["Batata Sautê","R$ 5,90"],
								["Batata Chips / Palha","R$ 2,90"]
								//["Batata Palha","R$ 2,90"]
							],
							[
								["Cubos de Frango ao Molho de Ervas","R$ 10,90"],
								["Medalhas de Filet Mignon ao Molho de Vinho","R$ 20,90"],
								// ["Salmão ao Molho de Ervas","R$ 25,90"],
								["Camarão ao Molho de Ervas","R$ 28,90"]
							]
						]
function createCardapioFullList(){	
	var obj = '';
	
	//list_cardapio[c][1][i][1]; categoria | 0 nome ou 1 list itens | item | 0 dados ou 1 precos
	
	
	
	for(i=0;i<list_cardapio.length;i++){
		
		obj +='<div id="categoria">';
		obj +='	<div id="categoria-name">'+list_cardapio[i][0]+'</div>';
		obj +='		<div id="itens">';				
		for(j=0;j<list_cardapio[i][1].length;j++){	
			obj +='			<div id="item">';		
			obj +='				<div id="item-dados">';
			obj +='					<!-- ### CONTENT LEFT -->';
			obj +='					<div id="content-item-left_1">';
			obj +='						<div id="thumb_1">'+list_cardapio[i][1][j][0][2]+'</div>';  
			//obj +='						<div id="thumb_1" style="background: url(image/produtos/'+list_cardapio[i][1][j][0][2]+') no-repeat center center #e0e0e0; background-size: cover;" />';  
			obj +='					</div>';
			obj +='					<!-- ### CONTENT LEFT END -->';
			obj +='					<!-- ### CONTENT RIGHT -->';
			obj +='					<div id="content-item-right_1">';
			obj +='						<div id="title_1">'+list_cardapio[i][1][j][0][0]+'</div>';
			obj +='						<div id="info_1">'+list_cardapio[i][1][j][0][3]+'</div>';			
			if(list_cardapio[i][1][j][0][4].length>0){
				obj +=					'	<div id="options_1">'+list_cardapio[i][1][j][0][4]+'</div>';
			}	
			obj +='					</div>';
			obj +='					<!-- ### CONTENT RIGHT END -->';
			
			obj +='				</div>';			
			obj +='				<div id="item-preco">';
			obj +='					<table>';
			obj +='						<tr>';
			obj +='							<td>Opção</td>';
			obj +='							<td>Padrão</td>';
			obj +='							<td>Super</td>';
			obj +='						</tr>';
			for(k=0;k<list_cardapio[i][1][j][1].length;k++){
				obj +='						'+createCardapioItemPriceLine(list_cardapio[i][1][j][1][k][0], list_cardapio[i][1][j][1][k][1], list_cardapio[i][1][j][1][k][2], list_cardapio[i][1][j][1][k][3], list_cardapio[i][2]);
			}
			obj +='					</table>';
			obj +='				</div>';
			obj +='			</div>';	
		}	
		obj +='		</div>';	 
		obj +='</div>';
		
	}
	return obj;		
}



function createSocialLink_cardapio(linkID){	
	ID = linkID.split("#")[1];
	var c = ID.split("c=")[1].split("&")[0];
	var i = ID.split("i=")[1].split("&")[0];

	var list = list_cardapio[c][1][i][0];	// categoria | 0 nome ou 1 list itens | item | 0 dados ou 1 precos
	
	var title = list[0];
	var img = list[1];
	var info = list[3];
	
	var url_s = 'index.html'+linkID;
	var title_s = 'Strog Delivery :: '+title;
	var img_s = 'image/produtos/'+img;
	var info_s = ''+info;		
	
	return createSocialLink(url_s, title_s, img_s, info_s);
}

function createCardapioThumb(linkID, index){	
	ID = linkID.split("#")[1];
	var c = ID.split("c=")[1].split("&")[0];
	var i = index;

	linkID = linkID + "&i="+i;

	var list = list_cardapio[c][1][i][0];	// categoria | 0 nome ou 1 list itens | item | 0 dados ou 1 precos 
	
	var title = list[0];
	var img = list[1];
	var imgSocial= list[2];
	var info = list[3];
	var subTitle = "";
	
	try{
  		subTitle = list[5];
	}catch(err){} 	
	
	var obj = '';
	obj +='<li>';                          	
	obj +='	<div id="thumbs-left">';
	//obj +='		<a href="'+linkID+'" title="Ver preço" class="linkID" ><img src="image/produtos/'+img+'" alt="'+title+'" id="thumb"/></a>';
	obj +='		<a href="'+linkID+'" title="Ver preço" class="linkID" ><div id="thumb" style="background: url(image/produtos/'+img+') no-repeat center center #e0e0e0; background-size: cover;" /></a>';	
	
	obj +='		<a href="#" onclick="'+createSocialLink_cardapio(linkID)+'" title="Compartilhar"><img src="image/icons/cardapio_social_facebook.png" alt="Compartilhar" id="social" /></a>';
	obj +='	</div>';
	obj +='	<div id="thumbs-right">';
	obj +='		<a href="'+linkID+'" title="Ver preço" class="linkID" >';
	obj +='			<div id="title">'+title+'</div>';
	if(subTitle.length>0){
		obj +='			<div id="subTitle">'+subTitle+'</div>';
	}
	obj +='			<div id="info">'+info+'</div>';	
	obj +='			<div id="more"><span>Ver mais</span></div>';	
	obj +='		</a>';
	obj +='	</div>';                
	obj +='</li>';
	
	return obj;		
}
function createCardapioThumbList(linkID){	
	ID = linkID.split("#")[1];
	var c = ID.split("c=")[1].split("&")[0];

	var list = list_cardapio[c][1];	// categoria | 0 nome ou 1 list itens | item | 0 dados ou 1 precos

	var obj = '';
	for(i=0;i<list.length;i++){
		obj += createCardapioThumb(linkID, i);
	}
	
	return obj;		
	
}
function createCardapioBtBack(linkID){
	ID = linkID.split("#")[1];
	var c = ID.split("c=")[1].split("&")[0];	
	linkID = "#!c="+c;
		
	var obj = '';
	obj +='<a href="'+linkID+'" title="Ver todos">Ver Todos</a>';
	
	return obj;		
}
function createCardapioBreadcrumb(linkID){	
	ID = linkID.split("#")[1];
	var c = ID.split("c=")[1].split("&")[0];
	var i = ID.split("i=")[1].split("&")[0];
	linkID = "#!c="+c;

	var list = list_cardapio[c][1][i][0];	// categoria | 0 nome ou 1 list itens | item | 0 dados ou 1 precos
	
	var category = list_cardapio[c][0];
	var title = list[0];
		
	
		
	var obj = '';
	obj +='<li>';
	obj +='	<a href="'+linkID+'" title="Ir para '+category+'">'+category+'</a>';
	obj +='</li>';
	obj +='<li class="select">'+title+'</li>';
	
	return obj;		
}
function createCardapioItem(linkID){	
	ID = linkID.split("#")[1];
	var c = ID.split("c=")[1].split("&")[0];
	var i = ID.split("i=")[1].split("&")[0];
	
	var list = list_cardapio[c][1][i][0];	// categoria | 0 nome ou 1 list itens | item | 0 dados ou 1 precos 
	var title = list[0];
	var img = list[2];
	var info = list[3];
	var option = list[4];

	var obj = '';
	obj +='<!-- ### CONTENT LEFT -->';
	obj +='<div id="content-item-left">';
	//obj +='	<img src="image/produtos/'+img+'" alt="'+title+'" id="thumb">';  
	obj +='	<div id="thumb" style="background: url(image/produtos/'+img+') no-repeat center center #e0e0e0; background-size: cover;" />';  
	
	
	obj +='	<a href="#" onclick="'+createSocialLink_cardapio(linkID)+'" title="Compartilhar"><img src="image/icons/item_social_facebook.png" alt="Compartilhar" id="social"></a> ';      
	obj +='</div>';
	obj +='<!-- ### CONTENT LEFT END -->';
	obj +='<!-- ### CONTENT RIGHT -->';
	obj +='<div id="content-item-right">';
	obj +='	<div id="title">'+title+'</div>';
	obj +='	<div id="info">'+info+'</div>';	

	if(option.length>0){
		obj +='	<div id="options">'+option+'</div>';
	}	
	obj +='</div>';
	obj +='<!-- ### CONTENT RIGHT END -->';
	obj +='<!-- ### CONTENT RIGHT BT -->';
	obj +='<div id="content-item-right_bt">';
	obj +='	<a href="'+URL_SIST_VENDA+'" target="_blank"><div id="bt" class="pedidoonline_bt2">Pedir Online</div></a>';
	obj +='</div>';
	obj +='<!-- ### CONTENT RIGHT BT END -->';
	
	return obj;		
}
function generateCardapioFidelidade(price, indexFidelidade){
	try{
		if(indexFidelidade==2){
			return "";
		}else{
			var numPrice = price.split("R$ ")[1].split(",")[0];
			numPrice = numPrice*15;			
			return '<div id="points">ou '+numPrice+' pontos</div>';
		}
		
  	}catch(err){
		return "";
	}	
}
function createCardapioItemPriceLine(option, suboption, price_1, price_2, indexFidelidade){	
	var fidelidade_1 = generateCardapioFidelidade(price_1, indexFidelidade);
	var fidelidade_2 = generateCardapioFidelidade(price_2, indexFidelidade);
	
	var obj = '';
	obj +='<tr>';
	obj +='	<td><div id="title">'+option+'</div><div id="subtitle">'+suboption+'</div></td>';
	obj +='	<td><div id="price">'+price_1+'</div>'+fidelidade_1+'</td>'; //'+((price_1!='')?'':' class="noItem"')+'
	if(price_2 != ""){
		obj +=' <td><div id="price">'+price_2+'</div>'+fidelidade_2+'</td>'; //'+((price_2!='')?'':' class="noItem"')+'
	}	
	obj +='</tr>';	
	
	return obj;		
}

function createTableItemPriceLine(option, suboption, price_1, price_2, indexFidelidade){	
	var fidelidade_1 = generateCardapioFidelidade(price_1, indexFidelidade);
	var fidelidade_2 = generateCardapioFidelidade(price_2, indexFidelidade);
	
	var obj = '';
    
	obj +='	<tr>';
   	obj +='		<td>Opção</td>';
    obj +='		<td>Padrão</td>';
	if(price_2 != ""){
		obj +='		<td>Super</td>';
	}
	obj +='	</tr>';
	return obj;		
}

function createCardapioItemPrice(linkID) {
    ID = linkID.split("#")[1];
    var c = ID.split("c=")[1].split("&")[0];
    var i = ID.split("i=")[1].split("&")[0];

    var list = list_cardapio[c][1][i][1];	// categoria | 0 nome ou 1 list itens ou 2 exibe info tam pratos | item | 0 dados ou 1 precos

    var peso = list_cardapio[c][1][i][0][6];
    if (peso == "0g.") {
        peso = "";
    }
    if (peso) {
        peso = ' - ' + peso;
    } else {
        peso = "";
    }

    var peso_super = list_cardapio[c][1][i][0][7];
    if (peso_super == "0g.") {
        peso_super = "";
    }
    if (peso_super) {
        peso_super = ' - ' + peso_super;
    } else {
        peso_super = "";
    }

    var obj = '';
    if (list_cardapio[c][2] == 1) {
        obj += '<div id="info-size">';
        //obj +='	<div>Padrão'+peso+'</div>';
        //obj +='	<div>Super'+peso_super+'</div>';
		/*obj +='	<div>Padrão</div>';
		 obj +='	<div>Super</div>';*/
        obj += '</div>';
    } else if (list_cardapio[c][2] == 2) {
        obj += '<div id="info-size">';
        //obj +='	<div>Padrão'+peso+'</div>';
        //obj +='	<div>Super'+peso_super+'</div>';
		/*obj +='	<div>Padrão</div>';
		 obj +='	<div>Super</div>';*/
        obj += '</div>';
    }


    obj += '<table>';
    obj += '	<tr>';
    obj += '		<td>Opção</td>';
    obj += '		<td>Padrão</td>';
    if (list[0][3]) {
    	obj += '		<td>Super</td>';
	}
    obj +='	</tr>';
	//obj +=' '+createTableItemPriceLine(list[i][0],list[i][1],list[i][2],list[i][3], list_cardapio[c][2])
	//A tabela era criada aqui, antes de ser preenchida, aqui criava o cabeçalho dela.
	//Criei essa Função que cria o cabeçalho da tabela dinamicamente de acordo com os valores.
	//Na verdade Copiei ela, dessa função aí em baixo.
	//Só adequei para que ela reproduzisse o cabeçalho da tabela uma vez.
	 
	for(i=0;i<list.length;i++){
		obj +='	'+createCardapioItemPriceLine(list[i][0],list[i][1],list[i][2],list[i][3], list_cardapio[c][2]);
	}
	obj +='</table>';
	
	
	
	
	if(list.length==0){
		obj = "";
	}
	
	return obj;		
}



function selectCardapioItem(linkID){
	if(!linkID){
		linkID = "#!c=0";				
	}
	
	ID = linkID.split("#")[1];
	var c = ID.split("c=")[1].split("&")[0];

	
	$("#section-cardapio #content #left #menu ul li a").each(function(n) {
		var rel_tmp = $(this).attr('href');
		ID_tmp = rel_tmp.split("#")[1];		
		var c_tmp = ID_tmp.split("c=")[1].split("&")[0];
		
		//alert(c_tmp+" = "+c);
		
		if(c_tmp == c){
			$(this).parent().addClass("selectMenu");
		}else{
			$(this).parent().removeClass("selectMenu");
		}		
	});
	
	
	$('#section-cardapio #content #right #thumbs').css({'display': 'none'});
	$('#section-cardapio #content #right #item').css({'display': 'block'});
	
	$('#section-cardapio #content #right #item #bar-top #bt-back').html(createCardapioBtBack(linkID));
	$('#section-cardapio #content #right #item #bar-top #breadcrumb ul').html(createCardapioBreadcrumb(linkID));
	$('#section-cardapio #content #right #item #content-item #content-item-box').html(createCardapioItem(linkID));
	$('#section-cardapio #content #right #item #content-item #table-price').html(createCardapioItemPrice(linkID));	
	
	$('#section-cardapio #content #right #item #bar-top #bt-back a, #section-cardapio #content #right #item #bar-top #breadcrumb ul li a').click(function(){
		var rel = $(this).attr('href');
		var linkID = "#"+ rel.split("#")[1];
		
		//selectCardapioCategory(linkID);
		//moveSection("cardapio", 3);		
		
		onClick(linkID);
		
		//return false;	
		//return false;
	});
}

function selectCardapioCategory(linkID){	
	if(!linkID){
		linkID = "#!c=0";				
	}
		
	ID = linkID.split("#")[1];
	var c = ID.split("c=")[1].split("&")[0];

	$("#section-cardapio #content #left #menu #title").html(list_cardapio[c][0]); // categoria | 0 nome ou 1 list itens | item | 0 dados ou 1 precos
	
	$("#section-cardapio #content #left #menu ul li a").each(function(n) {
		var rel_tmp = $(this).attr('href');
		ID_tmp = rel_tmp.split("#")[1];		
		var c_tmp = ID_tmp.split("c=")[1].split("&")[0];
		
		//alert(c_tmp+" = "+c);
		
		if(c_tmp == c){
			$(this).parent().addClass("selectMenu");
		}else{
			$(this).parent().removeClass("selectMenu");
		}		
	});		
	
	
	
	//$(this).parent().addClass("selectMenu");
	
	
	if(c==0 || c==1 || c==4){
		createCardapioAcrescimosList(0);
	}else if(c==2){
		createCardapioAcrescimosList(1);
	}else if(c==3){
		createCardapioAcrescimosList(-1);
	}else if(c==5){
		createCardapioAcrescimosList(-1);
	}
	
	
	
	$('#section-cardapio #content #right #thumbs').css({'display': 'block'});
	$('#section-cardapio #content #right #item').css({'display': 'none'});

	$('#section-cardapio #content #right #thumbs ul').html(createCardapioThumbList(linkID));	
	$('#section-cardapio #content #right #thumbs ul li #thumbs-left .linkID, #section-cardapio #content #right #thumbs ul li #thumbs-right .linkID').click(function(){
		var rel = $(this).attr('href');
		var linkID = "#"+ rel.split("#")[1];
					
		if(linkID){
			onClick(linkID);
			//selectCardapioItem(linkID);		
		}
		
		//return false;
	});
}



function createCardapioAcrescimos(title, price){	
	
	
	var obj = '';
	obj +='<li>';
  	obj +='	<img src="image/icons/cardapio_additions_bullet.png">';
    obj +='	<div id="title">'+title+'</div>';
    obj +='	<div id="price">'+price+'</div>';
    obj +='</li>';
	
	return obj;		
}
function createCardapioAcrescimosList(index){	
	if(index==-1){
		$('#section-cardapio #content #additions ul').html("");
		$('#section-cardapio #content #additions').css("display","none");
		
	}else{
		$('#section-cardapio #content #additions').css("display","block");		
		var list = list_acrescimos[index];

		var obj = '';
		for(i=0;i<list.length;i++){
			obj += createCardapioAcrescimos(list[i][0],list[i][1]);
		}	
		
		$('#section-cardapio #content #additions ul').html(obj);
		
		if(index==1){
			$('#section-cardapio #content #additions ul li').toggleClass("big");
		}
		
	}
}



$(function() {
	$('#section-cardapio #content #left #menu ul li a').click(function(){
		
		var rel = $(this).attr('href');
		var linkID = "#"+ rel.split("#")[1];
		
		onClick(linkID);
		
		
		//selectCardapioCategory(linkID);
		//moveSection("cardapio", 3);	
			
		//return false;
	});	
	
	$('#section-cardapio #cardapio-completo').html(createCardapioFullList());
	
	
	
	//selectCardapioCategory();
	//selectCardapioItem(1);		
})
