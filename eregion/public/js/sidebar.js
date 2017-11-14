$(document).ready(function(){
    changeSelectedSidebar($('.'+chooseRegionNav));
    $( "." + sidebarSubNav).hide();
    $("."+pickedRegionNav).hide();
})
let sidebarNavigations="sidebarNav";
let sidebarSubNav="sidebarSubNav";
//Main sidebar navigation classes
let chooseRegionNav="chooseRegionNav";
let searchRegionNav="searchRegionNav";
let pickedRegionNav="pickedRegionNav";
let guideNav="guideNav";
//Selected classes
let selectedGuide="selectedGuide";
let selectedRegionNav="selectedRegionNav";


//When clicked on the main navigations->
$( "." + sidebarNavigations + ">a li").on('click',function(){
	//If the selected navigation is guideNav, expand the sub sidebar.
	if( $(this).hasClass(guideNav)){

		$navGuide = $(this);

		if( $navGuide.hasClass(selectedGuide)){
			$( "." + sidebarSubNav).hide( "slow" , function(){
    			$navGuide.removeClass(selectedGuide);
    		});
		}
		else{
    		$navGuide.addClass(selectedGuide);
    		$( "." + sidebarSubNav).show( "slow" , function(){
    		});
		}

	}
	//Otherwise give the selected one a selectedRegionNav.
	else{
    	changeSelectedSidebar($(this));
	}
});

$("."+sidebarSubNav+" li").on("click",function(){
    	$(this).append($("<div class='rightArrow'>"));
})

function changeSelectedSidebar($selectedSidebarNav){
	$( "." + sidebarNavigations + " li").removeClass(selectedRegionNav);
	$($selectedSidebarNav).addClass(selectedRegionNav);

	if($selectedSidebarNav.hasClass(chooseRegionNav)){
        hideResultTabContent();
	}
	else{
		$(".mapIcon").css("display","none");
		$("."+chooseRegionNav+" p").text('Търсене по карта');
	}
}
function hideResultTabContent(){
        $("."+chooseRegionNav+" p").text('Моля направете избор на картата');
        //Disable the result tab and container.
        $("."+resultTab).css('opacity','0.7');
        $("."+resultInfoBlock).css({"opacity":"0.7","pointer-events":"none"});
        $("."+resultInfoBlock+" *").css('opacity',"0.7");

        $("."+regionTab).css('opacity','1');
        $("."+regionNavContainer).css({"opacity":"1","pointer-events":"auto"});
        $("."+regionNavContainer+" *").css('opacity',"1");

        $('.'+mapIcon).css("display","none");
}