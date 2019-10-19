var exec = require('child_process').exec;
var no = 0;

//先发第一个环节码100，等待返回正确数据再进行发送下一个码
execCmd();

//该方法用于命令行执行python命令 类似于:  python py_test.py arg1
//这样在python中就可以接受传递过去的参数
function execCmd() {
    exec('python eval.py --model_file model/wave.ckpt-done  --image_file img/test.jpg', function (error, stdout, stderr) {
        if(error){
            console.error('error: ' + error);
            return;
        }
		console.log('success')
	})
}