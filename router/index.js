var router = o2c.router;

router.get('/',function(req,res){
	res.end('123');
});

router.get('/all/123',function(req,res){
	res.write('<!DOCTYPE html>');
	res.write('<html lang="zh-cn">');
	res.write('<header>');
	res.write('<meta charset="utf-8"/>');
	res.write('</header>');
	res.write('你妹');
	res.write('</html>');
	res.end();
});

router.get('/all/*',function(req,res){
	res.end(req.urlauto);
});