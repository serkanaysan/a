var express = require('express');
var db = require('../db');

var router = express.Router();


router.get('/get', function(req, res){
	
	var result = {
		"id":"1167",
		"name":"Savaşçı",
		"imageUrl":"https://www.fox.com.tr/Programlar/Savasci/thumbs/Savasci-cover-photo-a4c64289-1259-47c3-9577-f08bcdeb1972-mpositioned-655x368.jpg",
		"trailers":[
			{
				"imageUrl":"https://www.fox.com.tr/Programlar/Savasci/Tanitimlar/Savasci-20955-promo-image-bcb71f42-c746-40af-a99c-a24d8d04c826.jpg",
				"title":"Savaşçı",
				"description":"<p>&nbsp;</p>\r\n<p>Savaş&ccedil;ı, d&uuml;nyanın en zor şartlarında g&ouml;rev yapan, akla gelebilecek t&uuml;m g&uuml;&ccedil;l&uuml;klere katlanan adanmış kahramanların, &ldquo;Bordo Berelilerin&rdquo; hikayesi...</p>\r\n<p>&nbsp;</p>\r\n<p>Hikayemiz, bir d&ouml;nem Bordo Berelilerin se&ccedil;kin birliklerinden olan &uuml;nl&uuml; Kılı&ccedil; Timi, komutanları Albay Halil İbrahim Kopuz ve Y&uuml;zbaşı Kağan Bozok&rsquo;un hapisten &ccedil;ıkıp tekrar timi toplamaları ve g&ouml;reve d&ouml;n&uuml;şleriyle başlar. &Uuml;st&uuml;n beceri, g&ouml;rev duygusu ve sonsuz vatan sevgisiyle Kılı&ccedil; Timi, &uuml;lkenin ihtiya&ccedil; duyduğu her noktada g&ouml;rev alacak, T&uuml;rkiye&rsquo;nin sıkılmış yumruğu, b&uuml;k&uuml;lmez bileği olacaktır.</p>\r\n<p>&nbsp;</p>\r\n<p>Aşklarını, &ouml;zlemlerini, yaşadıkları t&uuml;rl&uuml; zorlukları omuzlarında taşıyan bu gen&ccedil; adamlar, kendilerini adadıkları vatan i&ccedil;in her şeylerini fedaya hazırdırlar.</p>\r\n<p>&nbsp;</p>\r\n<p>&Ccedil;&uuml;nk&uuml; onlar i&ccedil;in, &ldquo;s&ouml;z konusu vatansa, gerisi teferruattır..!&rdquo;</p>\r\n<p>&nbsp;</p>\r\n<p>Oyuncu kadrosunda Berk Oktay, Yıldız &Ccedil;ağrı Atiksoy, Murat Serezli, Fırat Albayram, Bur&ccedil; K&uuml;mbetlioğlu, Hakan Din&ccedil;kol, Alican Albayrak ve Uğur Bi&ccedil;er&rsquo;in yer aldığı yeni dizi &ldquo;Savaş&ccedil;ı&rdquo;, FOX&rsquo;ta!</p>",
				"videoUrl":"http://mn-i.mncdn.com/fox_adv/_definist_/MHBStw/videos/smil:sutasSeeding3_mobil.smil/playlist.m3u8",
			},
			{
				"imageUrl":"https://img-fox.mncdn.com/Savasci/fragmanlar/16/PR1SAVASCI_EP16_15EKMPZR_V2_25.jpg",
				"title":"Savaşçı",
				"description":"<p>&nbsp;</p>\r\n<p>Savaş&ccedil;ı, d&uuml;nyanın en zor şartlarında g&ouml;rev yapan, akla gelebilecek t&uuml;m g&uuml;&ccedil;l&uuml;klere katlanan adanmış kahramanların, &ldquo;Bordo Berelilerin&rdquo; hikayesi...</p>\r\n<p>&nbsp;</p>\r\n<p>Hikayemiz, bir d&ouml;nem Bordo Berelilerin se&ccedil;kin birliklerinden olan &uuml;nl&uuml; Kılı&ccedil; Timi, komutanları Albay Halil İbrahim Kopuz ve Y&uuml;zbaşı Kağan Bozok&rsquo;un hapisten &ccedil;ıkıp tekrar timi toplamaları ve g&ouml;reve d&ouml;n&uuml;şleriyle başlar. &Uuml;st&uuml;n beceri, g&ouml;rev duygusu ve sonsuz vatan sevgisiyle Kılı&ccedil; Timi, &uuml;lkenin ihtiya&ccedil; duyduğu her noktada g&ouml;rev alacak, T&uuml;rkiye&rsquo;nin sıkılmış yumruğu, b&uuml;k&uuml;lmez bileği olacaktır.</p>\r\n<p>&nbsp;</p>\r\n<p>Aşklarını, &ouml;zlemlerini, yaşadıkları t&uuml;rl&uuml; zorlukları omuzlarında taşıyan bu gen&ccedil; adamlar, kendilerini adadıkları vatan i&ccedil;in her şeylerini fedaya hazırdırlar.</p>\r\n<p>&nbsp;</p>\r\n<p>&Ccedil;&uuml;nk&uuml; onlar i&ccedil;in, &ldquo;s&ouml;z konusu vatansa, gerisi teferruattır..!&rdquo;</p>\r\n<p>&nbsp;</p>\r\n<p>Oyuncu kadrosunda Berk Oktay, Yıldız &Ccedil;ağrı Atiksoy, Murat Serezli, Fırat Albayram, Bur&ccedil; K&uuml;mbetlioğlu, Hakan Din&ccedil;kol, Alican Albayrak ve Uğur Bi&ccedil;er&rsquo;in yer aldığı yeni dizi &ldquo;Savaş&ccedil;ı&rdquo;, FOX&rsquo;ta!</p>",
				"videoUrl":"http://mn-i.mncdn.com/fox_adv/_definist_/MHBStw/videos/smil:sutasSeeding3_mobil.smil/playlist.m3u8",
			},
			{
				"imageUrl":"https://www.fox.com.tr/Programlar/Savasci/Tanitimlar/Savasci-20700-promo-image-aba2e41f-280a-43f7-b01b-fc4911dac8b7.jpg",
				"title":"Savaşçı",
				"description":"<p>&nbsp;</p>\r\n<p>Savaş&ccedil;ı, d&uuml;nyanın en zor şartlarında g&ouml;rev yapan, akla gelebilecek t&uuml;m g&uuml;&ccedil;l&uuml;klere katlanan adanmış kahramanların, &ldquo;Bordo Berelilerin&rdquo; hikayesi...</p>\r\n<p>&nbsp;</p>\r\n<p>Hikayemiz, bir d&ouml;nem Bordo Berelilerin se&ccedil;kin birliklerinden olan &uuml;nl&uuml; Kılı&ccedil; Timi, komutanları Albay Halil İbrahim Kopuz ve Y&uuml;zbaşı Kağan Bozok&rsquo;un hapisten &ccedil;ıkıp tekrar timi toplamaları ve g&ouml;reve d&ouml;n&uuml;şleriyle başlar. &Uuml;st&uuml;n beceri, g&ouml;rev duygusu ve sonsuz vatan sevgisiyle Kılı&ccedil; Timi, &uuml;lkenin ihtiya&ccedil; duyduğu her noktada g&ouml;rev alacak, T&uuml;rkiye&rsquo;nin sıkılmış yumruğu, b&uuml;k&uuml;lmez bileği olacaktır.</p>\r\n<p>&nbsp;</p>\r\n<p>Aşklarını, &ouml;zlemlerini, yaşadıkları t&uuml;rl&uuml; zorlukları omuzlarında taşıyan bu gen&ccedil; adamlar, kendilerini adadıkları vatan i&ccedil;in her şeylerini fedaya hazırdırlar.</p>\r\n<p>&nbsp;</p>\r\n<p>&Ccedil;&uuml;nk&uuml; onlar i&ccedil;in, &ldquo;s&ouml;z konusu vatansa, gerisi teferruattır..!&rdquo;</p>\r\n<p>&nbsp;</p>\r\n<p>Oyuncu kadrosunda Berk Oktay, Yıldız &Ccedil;ağrı Atiksoy, Murat Serezli, Fırat Albayram, Bur&ccedil; K&uuml;mbetlioğlu, Hakan Din&ccedil;kol, Alican Albayrak ve Uğur Bi&ccedil;er&rsquo;in yer aldığı yeni dizi &ldquo;Savaş&ccedil;ı&rdquo;, FOX&rsquo;ta!</p>",
				"videoUrl":"http://mn-i.mncdn.com/fox_adv/_definist_/MHBStw/videos/smil:sutasSeeding3_mobil.smil/playlist.m3u8",
			},
	
		],
		"episodes":[
			{
				"name":"1",
				"program_id":"1167",
				"description":"<p>Savaş&ccedil;ı&rsquo;da nefesler tutuluyor!</p>\r\n<p>&nbsp;</p>\r\n<p>Suriye&rsquo;de ter&ouml;ristlerin elinden kurtardıkları T&uuml;rkmen kadınlar ve &ccedil;ocuklarla T&uuml;rkiye sınırına ilerleyen Kılı&ccedil; Timi, Y&uuml;zbaşı Kağan&rsquo;a gelen acil habere dikkat kesilir. Baş&ccedil;avuş Turan da, el bombasının pimini &ccedil;ekerek kendini &ouml;ld&uuml;rmeye &ccedil;alışan ter&ouml;r mağduru T&uuml;rkmen kızını, canı pahasına durdurmaya &ccedil;alışır.&nbsp; Ankara&rsquo;da Kılı&ccedil; Timi&rsquo;ni bekleyen b&uuml;y&uuml;k tehlikeye rağmen Turan, yaptığı planla herkesi şaşırtır.</p>\r\n<p>&nbsp;</p>\r\n<p>Temo ise, Kopuz Albay ve Pia&rsquo;nın karşısına &ccedil;ıkarak gerilimin tırmanmasına sebep olur. En az babası kadar acımasız ve tehlikeli bir ter&ouml;rist olan Temo, hedefindeki Albay Kopuz ve Kılı&ccedil; Timi i&ccedil;in kalleş&ccedil;e planlarını devreye sokar. &nbsp;Diğer taraftan Doktor ve Rojda cephesindeki beklenmedik gelişmeler, olayların seyrini s&uuml;rpriz bir şekilde değiştirir.</p>\r\n<p>&nbsp;</p>\r\n<p>Savaş&ccedil;ı yeni b&ouml;l&uuml;m&uuml;yle Pazar 20.00'de FOX'ta!</p>",
				"videoUrl":"http://mn-i.mncdn.com/fox_adv/_definist_/MHBStw/videos/smil:sutasSeeding3_mobil.smil/playlist.m3u8",
			},
			{
				"name":"2",
				"program_id":"1167",
				"description":"<p><strong>Savaş&ccedil;ı&rsquo;da olaylar hız kesmiyor!</strong></p>\r\n<p>&nbsp;</p>\r\n<p>Konferans salonunda patlayan bomba, Aslı ve Kağan&rsquo;ı &ouml;l&uuml;mle burun buruna getirmiştir. Patlama sonrası Kağan kendine gelse de, bombanın yakınında olan Aslı, ağır yaralı olarak hastaneye kaldırılır. Kağan ve diğerleri b&uuml;y&uuml;k bir endişeyle Aslı&rsquo;dan gelecek iyi haberleri beklerken, umutlar gittik&ccedil;e t&uuml;kenir...</p>\r\n<p>&nbsp;</p>\r\n<p>Bu arada karargaha gelen bir istihbaratla operasyon kararı alan General Kutalmış ve Albay Kopuz, Kılı&ccedil; Timi&rsquo;ni &Uuml;steğmen Serdar komutasında harekete ge&ccedil;irir. Fakat Y&uuml;zbaşı Kağan, sevdiği kadın &ouml;l&uuml;mle pen&ccedil;eleşse de, timiyle birlikte g&ouml;reve gitmekte ısrar edecek ve annesi Selver&rsquo;in karşı koymasına rağmen o operasyona &ccedil;ıkacaktır. &Ccedil;&uuml;nk&uuml; ter&ouml;r yine &ccedil;irkin y&uuml;z&uuml;n&uuml; g&ouml;stermiştir. S&ouml;z konusu olan operasyon, Aslı gibi ter&ouml;r mağduru kadınların ve kız &ccedil;ocuklarının kurtarılmasıdır.</p>\r\n<p>Savaş&ccedil;ı yeni b&ouml;l&uuml;m&uuml;yle Pazar 20.00'de FOX'ta!</p>",
				"videoUrl":"http://mn-i.mncdn.com/fox_adv/_definist_/MHBStw/videos/smil:sutasSeeding3_mobil.smil/playlist.m3u8",
			},
			{
				"name":"3",
				"program_id":"1167",
				"description":"<p>&Ouml;ğretmen kardeşinin Doktor tarafından ka&ccedil;ırıldığını &ouml;ğrenen Teğmen Murat, kardeşini kurtarmak i&ccedil;in aklına koyduğunu yaparken, Kılı&ccedil; Timi canları pahasına aldığı g&ouml;revi yerine getircek ve silahların ter&ouml;ristlerin eline ge&ccedil;mesine izin vermeyecektir.</p>\r\n<p>&nbsp;</p>\r\n<p>Albay Kopuz ise&nbsp; karargahta Kılı&ccedil; Timi&rsquo;ni cehennemden kurtarmak i&ccedil;in &ccedil;areler ararken, beklenmedik ziyaret&ccedil;inin devreye girmesi olayları seyrini değiştirecek ve belki de bu Kılı&ccedil; Timi&rsquo;nin beklediği fırsat olacaktır.</p>\r\n<p>&nbsp;</p>\r\n<p>Fakat Kılı&ccedil; Timi i&ccedil;in zaman t&uuml;kenmiştir...</p>\r\n<p>&nbsp;</p>\r\n<p>Savaş&ccedil;ı yeni b&ouml;l&uuml;m&uuml;yle Pazar 20.00'de FOX'ta!</p>",
				"videoUrl":"http://mn-i.mncdn.com/fox_adv/_definist_/MHBStw/videos/smil:sutasSeeding3_mobil.smil/playlist.m3u8",
			},
	
		],
		"extras":[
			{
				"name":"Eğer gök bayrak ile al bayrağı yan yana taşıyan bu adamın çığlığını duymazsak... Tarih bizim suratımıza tükürür!",
				"program_id":"1167",
				"imageUrl":"https://www.fox.com.tr/Programlar/Savasci/Ekstra-Videolar/Savasci-20914-promo-image-95b8d78e-7af9-4871-8137-62f1cce7ea03.jpg",
				"videoUrl":"http://mn-i.mncdn.com/fox_adv/_definist_/MHBStw/videos/smil:sutasSeeding3_mobil.smil/playlist.m3u8",
			},
			{
				"name":"Bu topraklarda kurşun önce kadın ve çocuklara değiyor!",
				"program_id":"1167",
				"imageUrl":"https://www.fox.com.tr/Programlar/Savasci/Ekstra-Videolar/Savasci-20913-promo-image-abc477b9-df04-427b-8dff-bfa639bd0ca6.jpg",
				"videoUrl":"http://mn-i.mncdn.com/fox_adv/_definist_/MHBStw/videos/smil:sutasSeeding3_mobil.smil/playlist.m3u8",
			},
			{
				"name":"Bu ocağın diğer askerleri için endişe ediyorsan, onları dertleri için dert yanıyorsan, sen de bu ocağın tam bir askerisin demektir!",
				"program_id":"1167",
				"imageUrl":"https://www.fox.com.tr/Programlar/Savasci/Ekstra-Videolar/Savasci-20912-promo-image-5644ac4a-3e40-4e46-a8e9-dec4454c0563.jpg",
				"videoUrl":"http://mn-i.mncdn.com/fox_adv/_definist_/MHBStw/videos/smil:sutasSeeding3_mobil.smil/playlist.m3u8",
			},
	
		],
	
	
	};
	res.status(200).send(result);
	/*db.query("Select * From user", [], function(err, result){
		

		if(err){
			return res.status(400).send("Select Error: " + err);
		}



		res.status(200).send({result});
	});*/
});

router.post('/post', function(req, res){
	
	db.query("Select count(*) from user ?where name=",[req.body.name], function(err, result){
		if(result>1){
			return res.status(300).send({result});

		}
		else{
			db.query("Insert Into user (name, rank, available) Values (?, ?, ?)", [req.body.name, req.body.rank, req.body.available], function(err, result){
				if(err){
					return res.status(400).send('Insert Error: ' + err);
				}

				res.status(200).send({result});

			});
		}
		
	});

	
	
});

router.put('/put/:id', function(req, res){
	db.query("Update user Set name = ?, rank = ?, available = ? Where id = ?",[req.body.name, req.body.rank, req.body.available, req.params.id], function(err, result){
		if(err){
			return res.status(400).send("Update Error: " + err);
		}

		res.status(200).send({result});
	});
});

router.delete('/delete/:id', function(req, res){
	db.query("Delete From user where id=?", [req.params.id], function(err, result){
		if(err){
			return res.status(400).send('Delete Error: ' + err);
		}

		res.status(200).send({result});
	});
});

module.exports = router;