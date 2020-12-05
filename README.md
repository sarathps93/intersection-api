# Intersection Observer

Intersection observer api enables you to load only those assets which are above the fold. It means if you have an long / infinite scrolling application you can choose to load assets which are currently in the viewport thus improving user experience and less data is flown across the network

## Demo

Clone the repo and install the `node modules` using `npm install`. This is for installing the `http-server` module for serving the html in your browser. You may skip this part if you have any other global packages installed in your system for this purpose.

Once installed, you can start the server using `npm start` command. Or use your own solution.

Open the localhost url in your browser and keep the network tab ready. In the starting you can notice that only one image is getting downloaded along with a compressed size lazy image which will be used as a fallback image until the original image is downloaded.

As you scroll through the application, you can notice that the subsequent images are downloaded only when it comes into the viewport