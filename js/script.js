
$.getJSON('asset/data.json', function(data){
	$.each(data, function(i,val){
		$('#warrper .container')
		.append(`<div id="row">
					<div class="card">
						<img src="images/${val.image}">
						<div class="discont">
							<div class="views">
	    						<div class="solid">
	    							<img src="images/tag.svg" class="icon-small">
	    						</div>
	    						<div class="solidd">${('discount')}.${val.discount}.${('%')}</div>
	    					</div>
						</div>
  						<div class="card-body">
	    					<p class="card-text">${val.title}</p>
	    					<h5 class="price">${val.currency}.${val.price} ${val.currency}.${ (val.price - (val.price * val.discount / 100)) }</h5>
	    					<div class="views">
	    						<div class="solid">
	    							<img src="images/eye.svg" class="icon-small">
	    						</div>
	    						<div class="solid">${val.views}</div>
	    					</div>
	    					<div class="views">
	    						<div class="solid">
	    							<img src="images/love.svg" class="icon-small">
	    						</div>
	    						<div class="solid">${val.likes}</div>
	    					</div>
	    					<div class="views">
	    						<div class="solid">
	    							<img src="images/check.svg" class="icon-small">
	    						</div>
	    						<div class="solid">${val.sold}</div>
	    					</div>
  						</div>
					</div>
				</div>`);
	});
});








