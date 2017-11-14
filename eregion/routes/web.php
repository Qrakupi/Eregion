<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function(){
	return view('main/chooseRegion');
});
Route::get('/test',function(){
	return view('layout.test');
});
Route::get('/{region}','RegionController@parseUpdate');

Route::get('region/{region}','RegionController@update');
Route::get('ok','RegionController@create');
