// ./build_installer.js

// 1. Import Modules
const { MSICreator } = require('electron-wix-msi');
const path = require('path');

// 2. Define input and output directory.
// Important: the directories must be absolute, not relative e.g
// appDirectory: "C:\\Users\sdkca\Desktop\OurCodeWorld-win32-x64", 
const APP_DIR = path.resolve(__dirname, './dist_electron/win-unpacked');
// outputDirectory: "C:\\Users\sdkca\Desktop\windows_installer", 
const OUT_DIR = path.resolve(__dirname, './gescapro');

// 3. Instantiate the MSICreator
const msiCreator = new MSICreator({
    appDirectory: APP_DIR,
    outputDirectory: OUT_DIR,

    // Configure metadata
    description: 'GesCaPro: Gestion de Carnet et Produit',
    exe: 'gescapro',
    name: 'GesCaPro',
    manufacturer: 'GesCaPro',
    version: '1.0.0',
    appIconPath: path.resolve(__dirname, './public/images/logo.ico'),
    

    // Configure installer User Interface
    ui: {
        chooseDirectory: true,
        images: path.resolve(__dirname, './public/images/logo.ico'),
    },
});

// 4. Create a .wxs template file
msiCreator.create().then(function(){
    // Step 5: Compile the template to a .msi file
    msiCreator.compile();
});