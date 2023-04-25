The function and purpose of the application is for the user to be able to organize their notes into categories, or folders, as well as add notes and create folders. 

The following features or components have been implemented:

* ScrollView (HomeScreen, FolderScreen, NotesScreen, MarketScreen)

* Pressable (HomeScreen, FolderScreen, NotesScreen)

* SpeedDial (HomeScreen, FolderScreen, NotesScreen)

* PricingCard (MarketScreen)

The Home, Folder, and Notes Screen each use the ScrollView component. Since these three screens have a SpeedDial, when you scroll the SpeedDial will dissappear which is the intended action. The mentioned screens also make use of the Pressable component which depending on which one you click, will take you to a new screen. For example, if you're in the Home Screen and you click on Folders then it will take you to the Folder Screen. Going back to the SpeedDial, if pressed then the user will get the option, depending on the screen, to either add, edit a note or create or edit a folder. 

The MarketScreen has a sample list of sales listings. This was done using the PricingCard component. This screen can be accesed from other screens at anytime. 

Each screen has 3 routes, except the Market Screen. For example, from the Home Screen you could go to the Folder, Market and Mobile Dev(Notes Screen).

An Animated component was added in the Home Screen that affects the SpeedDial. The intended action was to be able to drag the SpeedDial to different parts of the Home Screen. The same would have been implemented in other screens if it worked. It was supposed to be a custom component. Due to not being able to figure it out in time, the code has been commented out.

The goal is to futher extend this application in the future.