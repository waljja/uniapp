var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/index/list/data', function(req, res, next) {
  res.send({
	  "code": 0,
	  "data": {
		  topBar: [
		  	{ name: "1" },
		  	{ name: "2" },
		  	{ name: "3" },
		  	{ name: "4" },
		  	{ name: "5" },
		  	{ name: "6" }
		  ],
		  data: [
			  {
				  type: "swiper",
				  data: [
					  { imgUrl: "../../static/banner/AJ1灰.jpg" },
					  { imgUrl: "../../static/banner/NMD白.jpg" },
					  { imgUrl: "../../static/banner/NMD黑白.jpg" },
					  { imgUrl: "../../static/banner/NMD绿.jpg" },
					  { imgUrl: "../../static/banner/UB20.jpg" },
					  { imgUrl: "../../static/banner/贝壳头.jpg" }
				  ]
			  },
			  {
				  type: "recommend",
				  data: [
					  {
						  bigUrl: "../../static/banner/女装.jpg",
						  data: [
							  { imgUrl: "../../static/banner/NMD菲董黄.jpg" },
							  { imgUrl: "../../static/banner/NMD黑红.jpg" }
						  ]
					  },
					  {
						  bigUrl: "../../static/banner/女装.jpg",
						  data: [
							  { imgUrl: "../../static/banner/DUNK熊猫.jpg" },
							  { imgUrl: "../../static/banner/style36蓝.jpg" }
						  ]
					  }
				  ]
			  },
			  {
				  type: "commodityList",
				  data: [
					  {
					  	id: 1,
					  	imgUrl: "../../static/commodity/裙子绿.jpg",
					  	name: "裙子绿",
					  	pprice: "1000",
					  	dprice: "2000",
					  	discount: "5"
					  },
					  {
					  	id: 2,
					  	imgUrl: "../../static/commodity/裙子白.jpg",
					  	name: "裙子白",
					  	pprice: "1000",
					  	dprice: "2000",
					  	discount: "5"
					  },
					  {
					  	id: 3,
					  	imgUrl: "../../static/commodity/裙子红.jpg",
					  	name: "裙子红",
					  	pprice: "1000",
					  	dprice: "2000",
					  	discount: "5"
					  },
					  {
					  	id: 4,
					  	imgUrl: "../../static/commodity/女装.jpg",
					  	name: "女装",
					  	pprice: "1000",
					  	dprice: "2000",
					  	discount: "5"
					  }
				  ]
			  }
		  ]
	  }
  })
});

module.exports = router;
