Framer.Device.background.backgroundColor = "rgba(20,20,20,1)"


# Import file "start"
plusspacec = Framer.Importer.load("imported/start@1x")

# Import file "install"
page1c = Framer.Importer.load("imported/install@1x")

# Import file "Begining"
beginingc = Framer.Importer.load("imported/Begining@1x")

# Import file "mapStart"
MapStartc = Framer.Importer.load("imported/mapStart@1x")


# Import file "artist"
artistc = Framer.Importer.load("imported/artist@1x")

# Import file "moreArtist"
moreArtistc = Framer.Importer.load("imported/moreArtist@1x")

# Import file "differentArtist"
differentArtistc = Framer.Importer.load("imported/differentArtist@1x")

# Import file "savingCollection"
savingCollectionc = Framer.Importer.load("imported/savingCollection@1x")

# Import file "startStore"
startStorec = Framer.Importer.load("imported/startStore@1x")


# Import file "Search"
searchc = Framer.Importer.load("imported/Search@1x")

# Import file "newLocation"
newLocationc = Framer.Importer.load("imported/newLocation@1x")

# Import file "newLocationAdded"
newLocationAddedc = Framer.Importer.load("imported/newLocationAdded@1x")

# Import file "shareContent"
shareCollectionc = Framer.Importer.load("imported/shareContent@1x")







# MENU -------------------------------------
# Import file "nav"
nav = Framer.Importer.load("imported/nav@1x")

# Import file "BackSearch"
backSearchc = Framer.Importer.load("imported/BackSearch@1x")

# Import file "ScanComplete"
ScanCompleteC = Framer.Importer.load("imported/ScanComplete@1x")

# Import file "Scan"
scan = Framer.Importer.load("imported/Scan@1x")

# Import file "Begining1"
begining1c = Framer.Importer.load("imported/Begining1@1x")






backgroundA = new BackgroundLayer
	backgroundColor: "rgba(230,230,230,1)"

Framer.Defaults.Animation =
	curve: "cubic-bezier(0.2, 0.0, 0.2, 1)"
	time: ".7"




# SCROLL ------------------------ START


# Plusspace
ScrollmainPage = ScrollComponent.wrap plusspacec.plusspace
ScrollmainPage.scrollHorizontal = false
ScrollmainPage.contentInset =
	bottom: 55

# Choose what to see overlay instruction
ScrolloverlayContent = ScrollComponent.wrap begining1c.overlayContent
ScrolloverlayContent.scrollHorizontal = false
ScrolloverlayContent.contentInset =
	bottom: 55

# Choose what to see
Scrollbeginingc = ScrollComponent.wrap beginingc.begining
Scrollbeginingc.scrollHorizontal = false
Scrollbeginingc.contentInset =
	bottom: 55

# Artist page
ScrollArtist = ScrollComponent.wrap artistc.artist
ScrollArtist.scrollHorizontal = false
ScrollArtist.contentInset =
	bottom: 55

# More Artist
ScrollmoreArtistc = ScrollComponent.wrap moreArtistc.moreArtist
ScrollmoreArtistc.scrollHorizontal = false
ScrollmoreArtistc.contentInset =
	bottom: 55

# Different Artist
ScrolldifferentArtistc = ScrollComponent.wrap differentArtistc.differentArtist
ScrolldifferentArtistc.scrollHorizontal = false
ScrolldifferentArtistc.contentInset =
	bottom: 55


# Stored Art work
ScrollstartStorec = ScrollComponent.wrap startStorec.startStore
ScrollstartStorec.scrollHorizontal = false
ScrollstartStorec.contentInset =
	bottom: 55


# Search

Scrollsearchc = ScrollComponent.wrap searchc.search
Scrollsearchc.scrollHorizontal = false
Scrollsearchc.contentInset =
	bottom: 55



#Animation Properties for wifi n download  -------------------------------

page1c.content2.props =
	opacity: 0
	scale: 0.8
	visible: false
	
page1c.page1.props =
	y:-1400
	
page1c.content1.opacity = 0

page1c.headerimg.scale = 1



#Animation properties for nav -1485 ----------------


nav.menu.props = 
	y: -2485

backSearchc.backSearch.props =
	visible: false
	opacity: 0

#Animation properties for begining of page ----------------


# chooseing the art to view
beginingc.begining.props =
	opacity: 0
	y:-1500
	scale: 1
	visible: false


begining1c.overlayInstruction.props =
	opacity: 0
	visible: false


# Adding the art your seeing
plusspacec.plusspace.props =
	opacity: 0
	y:-100
	scale: 0.8
	visible: false

scan.scanCamera.visible = false

scan.cameroverlay.props =
	opacity: 0
	scale: 0.9

scan.scanner.props =
	opacity: 0

#Map showing selection
MapStartc.mapStart.props =
	opacity: 0
	visible: false
	

# Scan complete page
ScanCompleteC.ScanComplete.props =
	opacity: 0
	visible: false

ScanCompleteC.viewArtist.props =
	y: 2570


# Artist page
artistc.artist.props =
	opacity: 0
	y: -4297
	visible: false

# Artist page back to main btn
artistc.backToMain.props =
	visible: false

# More artist 

moreArtistc.moreArtist.props =
	opacity: 0
	x: 1440


# Different Artist
differentArtistc.differentArtist.props =
	opacity: 1
	x: 1440
	

# new location map

newLocationc.newLocation.props =
	opacity: 0
	visible: false

# New location map added


newLocationAddedc.newLocationAdded.props =
	opacity: 0
	visible: false


# saving the content copy 1
savingCollectionc.savingCollection.props =
	opacity: 0
	visible: false


# saving the content copy 2
savingCollectionc.copy2.props =
	opacity: 0
	visible: false 


# Stored art work
startStorec.startStore.props =
	opacity: 0
	visible: false


# Search
searchc.search.props =
	opacity: 0
	visible: false



# Share content

shareCollectionc.shareCollection.props =
	opacity: 0
	visible: false

shareCollectionc.shareCopy2.props =
	opacity: 0
	visible: false

#Animation for wifi n download -----------------------------------------------------


#content1 fades in
loadAnimation2 = new Animation
	layer: page1c.content1
	properties: 
		opacity: 1
	delay: 2

#page1 animates down into frame
loadAnimation1 = new Animation
	layer: page1c.page1
	properties: 
		y: 0
	delay: 1
	

#image scales up in animation
loadAnimationScale = new Animation
	layer: page1c.headerimg
	properties: 
		scale: 1.5
	time: 100
	repeat: 50
	
#fading out the wifibtn
fadebtnwifiAnimation = new Animation
	layer: page1c.content1
	properties: 
		opacity: 0
		scale: 0.8


#fading in the downloadbtn
fadeInbtndownloadAnimation = new Animation
	layer: page1c.content2
	properties: 
		opacity: 1
		scale: 1
	delay: 1


fadebtnwifiAnimation.on(Events.AnimationEnd, fadeInbtndownloadAnimation.start)

fadebtnwifiAnimation.on Events.AnimationEnd, ->
	page1c.content1.visible = false

#Start Download fade
startDownloadAnimation1 = new Animation
	layer: page1c.content2
	properties: 
		opacity: 0
		scale: 0.8

#Start Download moves page1 up
startDownloadAnimation2 = new Animation
	layer: page1c.page1
	properties: 
		y:-1400

startDownloadAnimation1.on(Events.AnimationEnd, startDownloadAnimation2.start)

startDownloadAnimation2.on Events.AnimationEnd, ->
	page1c.page1.visible = false

startDownloadAnimation1.on Events.AnimationEnd, ->
	page1c.content2.visible = false

#Animation for menu -------------------------------

menuLoadAnimation = new Animation
	layer: nav.menu
	properties: 
		y: -1485

startDownloadAnimation2.on(Events.AnimationEnd, menuLoadAnimation.start)


nav.menu.states.add 
	menuOpenAnimation:
		y: -0
	menuCloseAnimation:
		y: -1485



#Animation for begin of page -------------------------------

# chooseing the art to view
beginingAnimation = new Animation
	layer: beginingc.begining
	properties: 
		opacity: 1
		y: 0
		scale: 1
	time: 1.5


beginingOverlayAnimation = new Animation
	layer: begining1c.overlayInstruction
	properties: 
		opacity: 1
		y: 0


beginingOverlayfade = new Animation
	layer: begining1c.overlayInstruction
	properties: 
		opacity: 0
	

beginingFade = new Animation
	layer: beginingc.begining
	properties: 
		opacity: 0
	

beginingAnimationleft = new Animation
	layer: beginingc.begining
	properties: 
		x:-1440
	time: 0

beginingAnimationright = new Animation
	layer: beginingc.begining
	properties: 
		x:0
	time: 0


menuLoadAnimation.on(Events.AnimationEnd, beginingAnimation.start)

beginingAnimation.on(Events.AnimationEnd, beginingOverlayAnimation.start)


beginingOverlayAnimation.on(Events.AnimationEnd, beginingAnimationleft.start)

beginingOverlayfade.on(Events.AnimationStart, beginingAnimationright.start)

beginingOverlayfade.on Events.AnimationEnd, ->
	begining1c.overlayInstruction.visible = false



beginingFade.on Events.AnimationEnd, ->
	beginingc.begining.visible = false




#Map showing selection fadein
MapStartcAnimation = new Animation
	layer: MapStartc.mapStart
	properties: 
		opacity: 1

MapStartcClose = new Animation
	layer: MapStartc.mapStart
	properties: 
		opacity: 0

MapStartcStart = new Animation
	layer: MapStartc.mapStart
	properties: 
		opacity: 0

MapStartcStart.on(Events.AnimationStart, beginingFade.start)


MapStartcClose.on Events.AnimationEnd, ->
	MapStartc.mapStart.visible = false

MapStartcStart.on Events.AnimationEnd, ->
	MapStartc.mapStart.visible = false

# Main page
plusspacecAnimationOn = new Animation
	layer: plusspacec.plusspace
	properties: 
		opacity: 1
		y: 0
		scale: 1
	time: 1.5

plusspacecAnimationOff = new Animation
	layer: plusspacec.plusspace
	properties: 
		opacity: 0
		y: 0
		scale: 1
		

beginingFade.on(Events.AnimationEnd, plusspacecAnimationOn.start)

# Scanner 

scanCameraAnimation = new Animation
	layer: scan.cameroverlay
	properties: 
		opacity: 1
		scale: 1
	delay: 1


plusspacecAnimationOff.on(Events.AnimationEnd, scanCameraAnimation.start)
#scanCameraAnimation.on(Events.AnimationStart, plusspacecAnimationOff.start)

# Scanner

scanPicture = new Animation
	layer: scan.scanner
	properties: 
		opacity: 1
		x: 160
	time: 1.5

scanBack = new Animation 
	layer: scan.scanner
	properties: 
		opacity: 1
		x: 1220
	time: 4


# 	Utils.delay 1, -> scan.scanCamera.visible = false
scanClose = new Animation
	layer: scan.scanCamera
	properties: 
		opacity: 0
	delay: 1





scanPicture.on(Events.AnimationEnd, scanBack.start)
scanBack.on(Events.AnimationEnd, scanClose.start)


scanPicture.on Events.AnimationStart, ->
	plusspacec.plusspace.visible = false

scanClose.on Events.AnimationEnd, ->
	scan.scanCamera.visible = false
	






# Scan complete 

ScanCompleteAnimation = new Animation
	layer: ScanCompleteC.ScanComplete
	properties: 
		opacity: 1

ScanCompleteArtistAnimation = new Animation
	layer: ScanCompleteC.viewArtist
	properties: 
		y: 2102
	delay: 1
	time: 1.5


ScanCompleteFinish = new Animation
	layer: ScanCompleteC.ScanComplete
	properties: 
		opacity: 0

scanPicture.on(Events.AnimationStart, ScanCompleteAnimation.start)

scanClose.on(Events.AnimationEnd, ScanCompleteArtistAnimation.start)



ScanCompleteFinish.on Events.AnimationEnd, ->
	ScanCompleteC.ScanComplete.visible = false
	



# Artist Animation

artistcAnimation = new Animation
	layer: artistc.artist
	properties:
		opacity: 1
		y: 0

artistcAnimationStore = new Animation
	layer: artistc.artist
	properties:
		opacity: 1
		y: 0
		x: 0


ScanCompleteFinish.on(Events.AnimationEnd, artistcAnimation.start)


artistcOff = new Animation
	layer: artistc.artist
	properties:
		x: -1440
		opacity: 1

artistcOn = new Animation
	layer: artistc.artist
	properties:
		x: 0
		opacity: 1

artistcHide = new Animation
	layer: artistc.artist
	properties:
		x: 0
		opacity: 0

# More artist page animation

moreArtistcAnimation = new Animation
	layer: moreArtistc.moreArtist
	properties:
		x: 0
		opacity: 1

moreArtistcOff = new Animation
	layer: moreArtistc.moreArtist
	properties:
		x: 1440
		opacity: 1

moreArtistcOffLeft = new Animation
	layer: moreArtistc.moreArtist
	properties:
		x: -1440
		opacity: 1

back2moreArtist = new Animation
	layer: moreArtistc.moreArtist
	properties:
		x: 0
		opacity: 1

artistcOff.on(Events.AnimationStart, moreArtistcAnimation.start)

artistcOn.on(Events.AnimationStart, moreArtistcOff.start)




# NewLocation animation
LocationcAnimation = new Animation
	layer: newLocationc.newLocation
	properties:
		opacity: 1
		

LocationcOff = new Animation
	layer: newLocationc.newLocation
	properties:
		opacity: 0
		

LocationcOff.on Events.AnimationEnd, ->
	newLocationc.newLocation.visible = false
	


# New Location Added Animation


newLocationAddedcAnimation = new Animation
	layer: newLocationAddedc.newLocationAdded
	properties:
		opacity: 1

newLocationAddedcOff = new Animation
	layer: newLocationAddedc.newLocationAdded
	properties:
		opacity: 0

LocationcOff.on(Events.AnimationStart, newLocationAddedcAnimation.start)

newLocationAddedcOff.on Events.AnimationEnd, ->
	newLocationAddedc.newLocationAdded.visible = false


# Different Artist Animation

differentArtistcAnimation = new Animation
	layer: differentArtistc.differentArtist
	properties: 
		x: 0
		opacity: 1

differentArtistcOff = new Animation
	layer: differentArtistc.differentArtist
	properties: 
		x: 1440
		opacity: 1





moreArtistcOffLeft.on(Events.AnimationStart, differentArtistcAnimation.start)

back2moreArtist.on(Events.AnimationStart, differentArtistcOff.start)




# Saving collection animation
savingCollectioncCopy1On = new Animation
	layer: savingCollectionc.savingCollection
	properties: 
		opacity: 1

savingCollectioncCopy1Off = new Animation
	layer: savingCollectionc.copy1 
	properties: 
		opacity: 0



savingCollectioncCopy2On = new Animation
	layer: savingCollectionc.copy2
	properties: 
		opacity: 1


savingCollectioncCopy2Off = new Animation
	layer: savingCollectionc.copy2
	properties: 
		opacity: 0

savingCollectioncOff = new Animation
	layer: savingCollectionc.savingCollection
	properties: 
		opacity: 0


savingCollectioncCopy1On.on(Events.AnimationEnd, artistcHide.start)

savingCollectioncCopy1Off.on(Events.AnimationEnd, savingCollectioncCopy2On.start)
savingCollectioncCopy2Off.on(Events.AnimationStart, savingCollectioncOff.start)

savingCollectioncCopy1On.on Events.AnimationEnd, ->
	artistc.artist.visible = false
	

savingCollectioncCopy1Off.on Events.AnimationEnd, ->
	savingCollectionc.copy1.visible = false

savingCollectioncOff.on Events.AnimationEnd, ->
	savingCollectionc.copy2.visible = false
	savingCollectionc.savingCollection.visible = false


# Share content

shareCollectioncCopy1On = new Animation
	layer: shareCollectionc.shareCollection
	properties: 
		opacity: 1

shareCollectioncCopy1Off = new Animation
	layer: shareCollectionc.copy1
	properties: 
		opacity: 0

shareCollectioncCopy2On = new Animation
	layer: shareCollectionc.shareCopy2
	properties: 
		opacity: 1

shareCollectioncCopy2Off = new Animation
	layer: shareCollectionc.shareCopy2
	properties: 
		opacity: 0

shareCollectioncOff = new Animation
	layer: shareCollectionc.shareCollection
	properties: 
		opacity: 0


startStorecAnimationHide = new Animation
	layer: startStorec.startStore
	properties: 
		opacity: 0

shareCollectioncCopy1On.on(Events.AnimationEnd, startStorecAnimationHide.start)

shareCollectioncCopy1Off.on(Events.AnimationEnd, shareCollectioncCopy2On.start)
shareCollectioncCopy2Off.on(Events.AnimationStart, shareCollectioncOff.start)

shareCollectioncCopy1On.on Events.AnimationEnd, ->
	startStorec.startStore.visible = false
	

shareCollectioncCopy1Off.on Events.AnimationEnd, ->
	shareCollectionc.copy1.visible = false

savingCollectioncOff.on Events.AnimationEnd, ->
	shareCollectionc.shareCopy2.visible = false
	shareCollectionc.shareCollection.visible = false






# Start store

startStorecAnimation = new Animation
	layer: startStorec.startStore
	properties: 
		opacity: 1

startStorecAnimationOff = new Animation
	layer: startStorec.startStore
	properties: 
		opacity: 0

startStorecAnimationOff.on(Events.AnimationEnd, artistcAnimationStore.start)

startStorecAnimationOff.on Events.AnimationEnd, ->
	startStorec.startStore.visible = false

startStorecAnimation.on Events.AnimationStart, ->
	plusspacec.plusspace.visible = false
	artistc.saveCollection.visible = false
	artistc.backToMain.visible = true
	

artistcHide.on(Events.AnimationEnd, startStorecAnimation.start)



savingCollectioncOff.on(Events.AnimationEnd, startStorecAnimation.start)


artistcHide.on Events.AnimationEnd, ->
	artistc.artist.visible = false


# Search

searchcOn = new Animation
	layer: searchc.search
	properties: 
		opacity: 1

searchcOff = new Animation
	layer: searchc.search
	properties: 
		opacity: 0

artistcHideSearch = new Animation
	layer: artistc.artist
	properties: 
		opacity: 0

artistcOnSearch = new Animation
	layer: artistc.artist
	properties: 
		opacity: 1

backSearchcOn = new Animation
	layer: backSearchc.backSearch
	properties:
		opacity: 1

backSearchcOff = new Animation
	layer: backSearchc.backSearch
	properties:
		opacity: 0



artistcHideSearch.on(Events.AnimationEnd, searchcOn.start)
searchcOn.on(Events.AnimationStart, backSearchcOn.start)

searchcOff.on(Events.AnimationEnd, artistcOnSearch.start)
artistcOnSearch.on(Events.AnimationStart, backSearchcOff.start)


searchcOn.on Events.AnimationEnd, ->
	artistc.artist.visible = false

artistcOnSearch.on Events.AnimationEnd, ->
	searchc.search.visible = false
	backSearchc.backSearch.visible = false


#Animation start ---------------------------------------------------



loadAnimation1.start()
loadAnimation2.start()
loadAnimationScale.start()




#btns -------------------


# wifi activation
page1c.btnwifi.onTap (event, layer) ->
	page1c.content2.visible = true
	fadebtnwifiAnimation.start()

# download activation
page1c.btndownload.onTap (event, layer) ->
	startDownloadAnimation1.start()
	#begining1c.overlayInstruction.visible = true
	beginingc.begining.visible = true

startDownloadAnimation1.on Events.AnimationEnd, ->
	begining1c.overlayInstruction.visible = true

# Going back to the selecting phase after reading instructions
begining1c.DOWNLOAD.onTap (event, layer) ->
	beginingOverlayfade.start()

# When you pick what you want to see in the gallary
beginingc.beginingPage.onTap (event, layer) ->
	MapStartc.mapStart.visible = true
	MapStartcAnimation.start()

MapStartc.close.onTap (event, layer) ->
	MapStartcClose.start()

MapStartc.continueMapStart.onTap (event, layer) ->
	MapStartcStart.start()
	plusspacec.plusspace.visible = true


# Menu Open
nav.menubtn.onTap (event, layer) ->
	nav.menu.states.next("menuOpenAnimation", "menuCloseAnimation")

plusspacec.plusspacebtn.onTap (event, layer) ->
	scan.scanCamera.visible = true
	#ScanCompleteC.ScanComplete.visible = true
	plusspacecAnimationOff.start()

scanCameraAnimation.on Events.AnimationEnd, ->
	ScanCompleteC.ScanComplete.visible = true

scan.cameroverlay.onTap (event, layer) ->
	scanPicture.start()

	
ScanCompleteC.viewArtist.onTap (event, layer) ->
	artistc.artist.visible = true
	ScanCompleteFinish.start()


# Artist page, more Artist btn
artistc.viewmore.onTap (event, layer) ->
	artistcOff.start()

# More Artist Page, Back

moreArtistc.gobackBottom.onTap (event, layer) ->
	artistcOn.start()


# New location map btn
moreArtistc.moreArtist1map.onTap (event, layer) ->
	newLocationc.newLocation.visible = true
	LocationcAnimation.start()

moreArtistc.moreArtist2map.onTap (event, layer) ->
	newLocationc.newLocation.visible = true
	LocationcAnimation.start()


# New location added map btn

newLocationc.newLocationContinue.onTap (event, layer) ->
	newLocationAddedc.newLocationAdded.visible = true
	LocationcOff.start()

# New location close btn

newLocationc.newLocationClose.onTap (event, layer) ->
	LocationcOff.start()


# New location added map off btn
newLocationAddedc.newLocationContinue.onTap (event, layer) ->
	newLocationAddedcOff.start()

# Different artist btn
moreArtistc.viewmoreLikeHim.onTap (event, layer) ->
	moreArtistcOffLeft.start()

# Different artist back btn
differentArtistc.dagoback.onTap (event, layer) ->
	back2moreArtist.start()
# Save your collection
artistc.saveCollection.onTap (event, layer) ->
	savingCollectionc.savingCollection.visible = true
	savingCollectioncCopy1On.start()

# Facebook or email
savingCollectionc.saveFacebook.onTap (event, layer) ->
	savingCollectionc.copy2.visible = true
	savingCollectioncCopy1Off.start()
	
savingCollectionc.saveEmail.onTap (event, layer) ->
	savingCollectionc.copy2.visible = true
	savingCollectioncCopy1Off.start()

# Back to home page
savingCollectionc.backToHome.onTap (event, layer) ->
	savingCollectioncCopy2Off.start()
	startStorec.startStore.visible = true





# Share your collection
startStorec.startStoreShare.onTap (event, layer) ->
	shareCollectionc.shareCollection.visible = true
	shareCollectioncCopy1On.start()
	
shareCollectioncCopy1On.on Events.AnimationEnd, ->
	shareCollectionc.copy1.visible = true
	shareCollectionc.copy1.opacity = 1

# Facebook or email
shareCollectionc.saveFacebook.onTap (event, layer) ->
	shareCollectionc.shareCopy2.visible = true
	shareCollectioncCopy1Off.start()
	
shareCollectionc.saveEmail.onTap (event, layer) ->
	shareCollectionc.shareCopy2.visible = true
	shareCollectioncCopy1Off.start()

# Back to home page
shareCollectionc.backToHome.onTap (event, layer) ->
	savingCollectioncCopy2Off.start()
	startStorec.startStore.visible = true







# startStore plus btn

startStorec.firstArtistStored.onTap (event, layer) ->
	artistc.artist.visible = true
	startStorecAnimationOff.start()

artistc.backToMain.onTap (event, layer) ->
	startStorec.startStore.visible = true
	artistcHide.start()

artistc.searchMore.onTap (event, layer) ->
	searchc.search.visible = true
	backSearchc.backSearch.visible = true
	artistcHideSearch.start()

backSearchc.backSearch.onTap (event, layer) ->
	artistc.artist.visible = true
	searchcOff.start()


differentArtistc.map1.onTap (events, layer) ->
	newLocationc.newLocation.visible = true
	LocationcAnimation.start()

differentArtistc.map2.onTap (events, layer) ->
	newLocationc.newLocation.visible = true
	LocationcAnimation.start()

differentArtistc.map3.onTap (events, layer) ->
	newLocationc.newLocation.visible = true
	LocationcAnimation.start()

