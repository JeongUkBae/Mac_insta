var auth = auth || {};
auth =(()=>{
	let setPath=()=>{
		 _= $.ctx();
		 js = $.js();
	};
	let init =()=>{
		setPath();
		onCreate();
	};
	let onCreate =()=>{
		setContentView();
	};
	let setContentView =()=>{
		main_name();
		image_box();
		
	};
	let image_box =()=>{
		let a =[1,2,3];
		let box = '';
				
		$.each(a,(i,j)=>{
			box += '<div id="img_'+j+'" class="col-xs-12 col-sm-6 col-md-4 col-lg-3">'
				+'<div class="photo-box">'
				+'<div class="image-wrap">'
				+'<img src="resources/images/test_img.jpg">'
				+'<div class="likes">'+j+' Likes</div>'
				+'</div>'
				+'<div class="description">'
				+' Fantastic Architecture #architecture #testing'
				+'<div class="date">September 16, 2014</div>'
				+'</div>'
				+'</div>'
				+'</div>'
	
		

		});
		$(box).appendTo('#instafeed');
		$('#main_image').attr('src','resources/images/maxresdefault.jpg')
		$('#img_'+j).click(function(e){
			e.preventDefault();
			
			alert('this??::'+$(this).val());
		});
//		$('#img_'+$(this))
		
	};
	let main_name=()=>{
		$('#pr_name').text('Nak_uh');
		
//<div id="gtx-trans" style="position: absolute; left: 414px; top: 81px;"><div class="gtx-trans-icon"></div></div>
	};
	
	
	
	return {init:init,image_box:image_box }
	
})();