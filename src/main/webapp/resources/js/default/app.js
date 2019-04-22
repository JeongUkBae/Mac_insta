"use strict";
var app = app || {};
app =(()=>{
	let init =(x)=>{
		app.$.init(x);	
		
	};
	let onCreate =()=>{
		setContentView();
	};
	let setContentView =()=>{		
		$.when(
				$.getScript($.js()+'/component/compo.js'),
				$.getScript($.js()+'/common/auth.js')
			).done(()=>{
				auth.init();
			});  
		
	};
	let feed = ()=>{
		new Instafeed({
	        clientId: '97ae5f4c024c4a91804f959f43f2635f',
	        target: 'instafeed',
	        get: 'tagged',
	        tagName: 'photographyportfolio',
	        links: true,
	        limit: 8,
	        sortBy: 'most-recent',
	        resolution: 'standard_resolution',
	        template: '<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3"><div class="photo-box"><div class="image-wrap"><a href="{{link}}"><img src="{{image}}"></a><div class="likes">{{likes}} Likes</div></div><div class="description">{{caption}}<div class="date">{{model.date}}</div></div></div></div>'
	    });
	    feed.run();
	};
	
	return {init:init, onCreate:onCreate}
	
})();


app.session =(()=>{
	var init =x=>{
		onCreate(x);
	};
	var onCreate =x=>{
		sessionStorage.setItem('ctx',x);
		sessionStorage.setItem('img',x+'/resources/img');
		sessionStorage.setItem('css',x+'/resources/css');
		sessionStorage.setItem('js',x+'/resources/js');
	};
	return {init:init}
})();

app.$ = {
		init : (x)=>{

			$.getScript(x+'/resources/js/default/router.js',()=>{
				$.extend(new Session(x));
				app.onCreate(x);
			})
		}
	};