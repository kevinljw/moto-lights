var center_state = 'idle';
var center_val = 0;
/**
 * GET /
 * Home page.
 */
valCounter();
function valCounter(){
	setInterval(function(){
			// console.log('toggleClass')

		if(center_val>0){
			console.log('center_val',center_val);
			center_val--;
		}	
 	},500);
}
exports.index = function(req, res) {
  res.render('home', {
    title: 'Home'
  });
};

exports.getLeft = function(req, res) {
  res.render('left', {
    title: 'Left Light',
    state: center_state,
    num_value: center_val
  });
};
exports.getRight = function(req, res) {
  res.render('right', {
    title: 'Right Light',
    state: center_state,
    num_value: center_val
  });
};
exports.getControl = function(req, res) {
  // center_val=0;
  center_state = 'idle';
  res.render('control_panel', {
    title: 'Control Panel',
    state: center_state,
    num_value: center_val
  });
};
exports.blink_right = function(req, res) {
  center_val=req.params.val;
  center_state = 'r_blink';
  res.render('control_panel', {
    title: 'Control Panel',
    state: center_state,
    num_value: center_val
  });
};
exports.blink_left = function(req, res) {
  center_val=req.params.val;
  center_state = 'l_blink';
  res.render('control_panel', {
    title: 'Control Panel',
    state: center_state,
    num_value: center_val
  });
};
exports.set_idle = function(req, res) {
  center_state = 'idle';
  res.render('control_panel', {
    title: 'Control Panel',
    state: center_state
  });
};
exports.set_straight = function(req, res) {
  center_state = 'straight';
  res.render('control_panel', {
    title: 'Control Panel',
    state: center_state
  });
};