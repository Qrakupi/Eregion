
$(document).ready(function(){
    //Hide the news menu on startup
    $( "." + firstPic).hide();
    $( "." + middleNewsContainer).hide();
    $( "." + rightNewsContainer).hide();
})

//Classes
let mainNewsContainer="background";
let middleNewsContainer="middleNewsContainer";
let rightNewsContainer="rightNewsContainer";
let newsNavigation="navNews";
let firstPic="pic1";
let newsContainer="newsContainer";
let newsContainerExpanded="newsContainerExpanded";
let newsBackground="background";

//Set the height when the news is hidden
let containerDefaultHeight=$( "." + newsBackground).height();

//News nav button on click ->
$( "." + newsNavigation).click(function () {
    //If its NOT expanded, show the elements in the news container and set the expended class.
    if (!($( "." + newsContainer).hasClass( newsContainerExpanded ))) {
    	$("."+mainNewsContainer).css({'background-image':'url("/images/comp.png")','background-size':'auto 130px'});

    	$( "." + firstPic).show();
    	$( "." + middleNewsContainer).show();
    	$( "." + rightNewsContainer).show();
    	$( "." + newsContainer).addClass( newsContainerExpanded );
    	$( "." + newsNavigation).animate({'margin-right':"0px"},200);

    	$( "." + newsBackground).animate({height:containerDefaultHeight+226},400);

    }
    //If its expanded, hide the elements in the news container and remove the expanded class.
     else {

    	$( "." + newsBackground).animate({height:containerDefaultHeight},400,function(){
    		$("."+mainNewsContainer).css({'background-image':'url("/images/comp1.png")','background-size':'auto 180px'});

            $( "." + firstPic).hide();
        	$( "." + middleNewsContainer).hide();
        	$( "." + rightNewsContainer).hide();
        	$( "." + newsContainer).removeClass( newsContainerExpanded );
        	$( "." + newsNavigation).animate({'margin-right':"2.5px"},200);

    	});
    }
});