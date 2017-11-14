<div class="container">
	<div class="row background">
		<div class="col-lg-12">
			<div class="row logoRow">
				<div class="col-lg-2 logoHolder">
					<img src="/images/eLOGO.png" class="logo">
				</div>
				<div class="col-lg-4 logoCaption">
					<img src="/images/esign.png" class="esign">
					<p class="logoCaptionInfo">Български портал за електронни услуги по региони</p>
				</div>
				<form class="col-lg-6 searchbar">
					<input type="text" class="search" placeholder="Търсене в сайта" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Търсене в сайта'">
				</form>
			</div>
			<div class="row newsContainer">

				<div class="col-lg-5 leftNewsContainer">
					<div class="navNews">
					<p><span>e</span> НОВИНИ</p>
					</div>
					<img class="pic1" src="/images/pic1.jpg">
				</div>

				<div class="col-lg-3 middleNewsContainer">
					<img class="pic2" src="/images/pic2.png">
					<img class="pic3" src="/images/pic3.jpg">
				</div>

				<div class="col-lg-4 rightNewsContainer">
				@foreach($news as $currentNews)
					<div class="newNewsContainer">
						<p class="newNewsHeader">
						{{$currentNews->title}}
						</p>
						<p class="newNewsInfo">
						Съдържанието и снимките на новините са примерни
						</p>
						<p class="newNewsBody">
						@if(strlen($currentNews->body)>280)
						{{substr($currentNews->body,0,280)}}...
						@else
						{{$currentNews->body}}
						@endif
						</p>
						<a href="#" class="newNewsMore">
							<div class="rightArrow"></div><p>още</p>
						</a>
					</div>
				@endforeach
				</div>
			</div>
		</div>
	</div>
	<div class="row">
		<div class="col-lg-12 navRow">
			<div class="row">
				<div class="col-lg-5 navLocalTax">
					<div class="navContainer"><p>МЕСТНИ ДАНЪЦИ И ТАКСИ</p></div>
				</div>
				<div class="col-lg-3 navPhysicalPerson">
					<div class="navContainer"><p>ЗА ФИЗИЧЕСКИ ЛИЦА</p></div>
				</div>
				<div class="col-lg-2 navServiceTypes">
					<div class="navContainer"><p>ВИДОВЕ УСЛУГИ</p></div>
				</div>
				<div class="col-lg-2 navPaymentTypes">
					<div class="navContainer"><p>НАЧИНИ НА ПЛАЩАНЕ</p></div>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-5 navRegionServices">
					<div class="navContainer"><p>ЕЛЕКТРОННИ УСЛУГИ ПО ОБЩИНИ</p></div>
				</div>
				<div class="col-lg-3 navLegalEntity">
					<div class="navContainer"><p>ЗА ЮРИДИЧЕСКИ ЛИЦА</p></div>
				</div>
				<div class="col-lg-2 navDocuments">
					<div class="navContainer"><p>ДОКУМЕНТИ</p></div>
				</div>
				<div class="col-lg-2 navDeadlines">
					<div class="navContainer"><p>СРОКОВЕ</p></div>
				</div>
			</div>
		</div>
	</div>
</div>