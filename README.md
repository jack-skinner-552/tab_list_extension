# Tab List Chrome Extension

The Tab List Chrome Extension is a simple utility extension that allows users to list open tabs along with their URLs, tab IDs, and window IDs. The extension provides an organized view of open tabs within your active Chrome window, making it easier to manage and keep track of your browsing sessions. The extension also logs any changes made to these tabs, such as updates, creations, removals in the DevTools console.

Helpful for developers troubleshooting Chrome Extensions that use `chrome.tabs`

![Extension Screenshot](https://i.imgur.com/Ynn1VLH.png)

## Features
* List open tabs in a user-friendly format.
* Display tab favicons for better visual identification.
* Organize tabs by their associated window IDs.
* Update the tab list in real-time when tabs are closed, opened, or updated.
* The active tab in all windows is highlighted.
* Utilizes Chrome's storage API to store and retrieve tab information.
* Any updates made to any tabs are logged in DevTools console to assist in troubleshooting.

## Installation
1. Download the extension's code from the repository or zip file.
2. Open Google Chrome.
3. Type chrome://extensions/ in the address bar and press Enter.
4. Enable "Developer mode" in the top right corner of the Extensions page.
5. Click "Load unpacked" and select the directory containing the extension's code.
6. The Tab List Chrome Extension icon will appear in your browser's toolbar.

## How to Use
1. Click on the Tab List Chrome Extension icon in the browser toolbar.
2. The popup window will display a list of your open tabs, grouped by their respective window IDs.
3. Each tab entry includes its favicon, tab ID, URL, and window ID.
4. The list updates in real-time when you close or open tabs, ensuring accuracy.

## Permissions
The extension requests the following permissions:

* 'activeTab': Required to interact with the currently active tab.
* 'favicon': Required to fetch and display tab favicons.
* 'storage': Required to store and retrieve tab information.
* 'tabs': Required to query and manage open tabs.

## Contributing
Contributions to the Tab List Chrome Extension are welcome! Feel free to fork this repository, make improvements, and submit pull requests.

## License
This project is licensed under the MIT License.

Extension icon by [icons8](https://icons8.com/)

## Acknowledgements
The Tab List Chrome Extension was inspired by the need for a simple way to manage and visualize open tabs within a Chrome window for troubleshooting Chrome Extension projects.
