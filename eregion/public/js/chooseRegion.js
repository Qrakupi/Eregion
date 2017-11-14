$().ready(function(){
	//Puts hash in variable, and removes the # character
	if(window.location.hash) {
    	var hash = window.location.hash.substring(1);
    	redirectHash(hash);
    }
})
let southWestMap="southWestMap";
let southCentralMap="southCentralMap";
let southEastMap="southEastMap";

let northWestMap="northWestMap";
let northCentralMap="northCentralMap";
let northEastMap="northEastMap";

let chooseRegionMap="chooseRegionMap";

let regionTab="regionTab";
let regionNavContainer="regionNavContainer";

let resultTab="resultTab";
let resultInfoBlock="resultInfoBlock";

let mapField="mapField";
let mapIcon="mapIcon";

//On click on the region or the text of the region, change the region.
$('.'+chooseRegionMap+' path').on('click',function(){changeRegion($(this))});
$('.'+chooseRegionMap+' text').on('click',function(){changeRegion($(this).prev())});

//By focusing the map fields , add effects.
$('.'+mapField).on("focus",function(){
	$(this).attr("placeholder","");
	$(this).css({"border-color":"rgb(95,155,175)","outline":"none"});
})

//Therefore by bluring , remove effects.
$('.'+mapField).on("blur",function(){
	let placeholder=$(this).hasClass('mapSave')?"Запази":"Ново търсене";
	$(this).attr("placeholder",placeholder);
})


$('.'+regionTab).on('click',function(){
	changeSelectedSidebar($('.'+chooseRegionNav));
})

//By given region hash in the URL, change the selected region to the given region.
function redirectHash(id){
		changeRegion($('#'+id));
    }

//Set name and region.
function changeRegion(region){
	$(".mapIcon").css("display","inline");
	hideSearchMapNavigations();
	changeRegionNav(region);
	hideRegionTabContent();
	updateURL(region.attr('id'));

	//If the clicked region is Sofia region,the region is set to Sofia city.
	let townName=region.attr("id")=="Sofia"?$('#Sofia-Grad').next():region.next();
	let townNameX=townName.attr('x');
	let townNameY=townName.attr('y');

	$('.chooseRegionMap').css('clip-path',"circle(120px at "+townNameX+"px "+townNameY+"px)");
	$('.chooseRegionMap').attr('view-box',"200 200 "+townNameX+" "+townNameY);	


	//Get the width of the name.
	let nameWidth=townName[0].getBoundingClientRect().width;
	//Find the center of the name.
	let nameWidthCenter=nameWidth/2;
	//The map icon always goes 30px right from the beginning of the name.
	let mapIconMargin=30;
	//Subtract the width to the center from the icon margin, and->
	let mapIconNeededToCenter=mapIconMargin-nameWidthCenter;
	//-> then subtract the needed px to the center from the starting x coordinate.
	$("."+mapIcon).attr({'x':townNameX-mapIconNeededToCenter,'y':townNameY-45});
}

//Disable the result tab and container.
function hideRegionTabContent(){
        $("."+regionTab).css('opacity','0.7');
        $("."+regionNavContainer).css({"opacity":"0.7","pointer-events":"none"});
        $("."+regionNavContainer+" *").css('opacity',"0.7");

        $("."+resultTab).css('opacity','1');
        $("."+resultInfoBlock).css({"opacity":"1","pointer-events":"auto"});
        $("."+resultInfoBlock+" *").css('opacity',"1");
}

//Write the given region on the navigation bar.
function changeRegionNav(region){
	if(region.hasClass('southWestMap') || region.hasClass('southWestNav')){
		$('.'+pickedRegionNav+' p').text("Югозападен район");
	}
	else if(region.hasClass('southCentralMap') || region.hasClass('southCentralNav')){
		$('.'+pickedRegionNav+' p').text("Южен централен район");
	}
	else if(region.hasClass('southEastMap') || region.hasClass('southEastNav')){
		$('.'+pickedRegionNav+' p').text("Югоизточен район");
	}
	else if(region.hasClass('northWestMap') || region.hasClass('northWestNav')){
		$('.'+pickedRegionNav+' p').text("Северозападен район");
	}
	else if(region.hasClass('northCentralMap') || region.hasClass('northCentralNav')){
		$('.'+pickedRegionNav+' p').text("Север централен район");
	}
	else if(region.hasClass('northEastMap') || region.hasClass('northEastNav')){
		$('.'+pickedRegionNav+' p').text("Североизточен район");
	}

	$("."+pickedRegionNav).addClass(selectedRegionNav);

}

//Hide the navigations for searching and choosing map region and show the navigation for the selected region.
function hideSearchMapNavigations(){
	$('.'+chooseRegionNav).hide();
	$('.'+searchRegionNav).hide();

	$('.'+pickedRegionNav).show();
}

//Show the navigations for searching and choosing map region and hide the navigation for the selected region.
function showSearchMapNavigations(){
	$('.'+chooseRegionNav).show();
	$('.'+searchRegionNav).show();

	$('.'+pickedRegionNav).hide();
}

//Update the URL with the given hash. 
function updateURL(id){
	document.location.hash = id;
}

function setCircleMap(regionName){
	$('.chooseRegionMap').css('clip-path',"circle(120px at "+townNameX+"px "+townNameY+"px)");
}