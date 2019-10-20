var exec = require('child_process').exec;

//先发第一个环节码100，等待返回正确数据再进行发送下一个码
// component.execCmd();

//该方法用于命令行执行python命令 类似于:  python py_test.py arg1
//这样在python中就可以接受传递过去的参数
var component = {
    execCmd: function (pth1, pth2) {
        // var terminalCmd = 'python ./imgStyle/eval.py --model_file ./imgStyle/model/'+ pth1 +'.ckpt-done  --image_file '+ pth2
        var terminalCmd = 'python ./imgStyle/eval.py --model_file ./imgStyle/model/wave.ckpt-done  --image_file ./imgStyle/img/shirt.jpg'
        // var terminalCmd = 'python eval.py --model_file model/wave.ckpt-done  --image_file img/shirt.jpg'
        exec(terminalCmd, function (error, stdout, stderr) {
            if(error){
                console.error('error: ' + error);
                return;
            }
            console.log('success')
        })
    }
}
module.exports = component;
