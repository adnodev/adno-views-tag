// Adno display tags
// https://adno.app 

const elements = $('[data-src][data-adno]');

elements.each(function() {
	switch ($(this).attr('data-adno')) {
		case 'embed': adnoEmbed(this); break;
		case 'infos': adnoInfos(this); break;
		case 'list': adnoList(this); break;
		case 'slider': adnoSlider(this); break;
		default: console.log(`Unknown object type`);
	}
});

function adnoEmbed(obj) {
	const url = $(obj).attr('data-src') ;
	if (url !== "") {
		const height = $(obj).attr('data-height') || '500px';
		const width = $(obj).attr('data-width') || "100%";
		const allow = $(obj).attr('data-fullscreen') === 'true' ? 'allow="fullscreen"' : '' ;
		html_start = '<iframe class="adno-embed" src="https://w.adno.app/#/embed?url=';
		html_end = '" height="' + height + '" width="' + width + '" ' + allow + '></iframe>';	
		let html =  html_start + url + html_end; 
		$(obj).html(html);
	}
}

function adnoInfos(obj) {
	const url = $(obj).attr('data-src');
	let level = $(obj).attr('data-title-level');
	let match = /h1|h2|h3|h4|h5|h6|H1|H2|H3|H4|H5|H6/;
	level =  match.test(level) ? level : "h3";
	$.getJSON(url).done(function(data){
		let html = '<div class="adno-infos">';
		html += '<'+level+'>' + data.title + '</'+level+'>';
		if (data.description !== "") html += '<p class="description">' + data.description + '</p>';
		if ((data.creator !== "") || (data.editor !== "") || (data.rights !== "")) {
			html += '<p class="credit">';
			if (data.creator !== "") html += '<span class="creator">' + data.creator + '</span> ' ;
			if (data.editor !== "") html += '<span class="editor">' + data.editor + '</span> ' ;
			if (data.rights !== "") html += '<span class="rights">' + data.rights + '</span>' ;
			html += '</p>';
		}
		html += '</div>';
		$(obj).html(html);
	});
}

function adnoList(obj) {
	const url = $(obj).attr('data-src');
	const height = $(obj).attr('data-image-max-height') || '600px';
	const width = $(obj).attr('data-image-max-width') || "600px";
	$.getJSON(url).done(function(data){
		const hp = parseInt(height.replace('px',''));
		const wp = parseInt(width.replace('px',''));
		const html_start = '<figure  class="adno-list">';
		const html_end = '</figure>';
		let html = '<div class="adno-list">';
		const annotations = data.first.items;
		for (annotation in annotations) {
			const text = annotations[annotation]["body"][1]["value"];
			const value = '<figcaption>' + text + '</figcaption>';
			const source = annotations[annotation]["target"]["source"];
			const select = annotations[annotation]["target"]["selector"]["value"];
			const iiif = select.slice(11);
			const region = iiif.match(/[+-]?\d+(\.\d+)?/g);
			const wi = parseInt(region[2]);
			const hi = parseInt(region[3]);
			const wt = (wi < wp) ?  wi : wp ;
			const ht = (hi < hp) ?  hi : hp;
			const output = ( wt >= ht ) ? wt + "px," : "," + ht + "px" ;  
			const image = '<img src="' + source + '/' + iiif + '/' + output + '/0/default.jpg" />';
			html += html_start + image + value + html_end;
		};
		html += '</div>';
		$(obj).html(html);
	});
}

function adnoSlider(obj) {
	const url = $(obj).attr('data-src');
	let style = $(obj).attr('data-style');
	if ((style !== "carousel") || (style !== "fade")) style = "nomal";
	const width = $(obj).attr('data-width') || "800px";
	const textwidth = $(obj).attr('data-text-width') || "500px";
	$.getJSON(url).done(function(data){
		let html = '<div class="adno-slide" style="width: '+width+'">';
		html += '<ul style="list-style-type: none; margin:0; padding:0">';
		const annotations = data.first.items;
		for (annotation in annotations) {
			const value = annotations[annotation]["body"][1]["value"];
			const text = '<div class="note" style="position: absolute; top:10px; padding:10px; background: rgba(0, 0, 0, 0.4); width:'+textwidth+'; color: white;" >' + value + '</div>';
			const source = annotations[annotation]["target"]["source"];
			const select = annotations[annotation]["target"]["selector"]["value"];
			const iiif = select.slice(11);
			const image = '<img src="'+source+'/'+iiif+'/'+width+',/0/default.jpg" />';
			html += '<li>' + image + text + '</li>';
		};

		html += '</ul></div>';
		$(obj).html(html);

		$( function(){
			$('.adno-slide').shortslider({
				style : style,
				auto      : false,
				indicatorStyle: true
			});
		});

	});
}
