<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RegionController extends Controller
{

    public function update($region){
    	$regionBG;
    	switch($region){
    		case "southWest":$regionBG="Югозападен район";break;
      		case "southCentral":$regionBG="Южен централен район";break;
    		case "southEast":$regionBG="Югоизточен район";break;
    		case "northWest":$regionBG="Северозападен район";break;
    		case "northCentral":$regionBG="Серен централен район";break;
    		case "northEast":$regionBG="Северноизточен район";break;
    	}
    	return view('../main/chooseRegion')->with('region',$regionBG);
    }
    public function create(){
        return view('main.chooseRegion');
    }

}
