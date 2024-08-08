# Text Editor Web Application
# Description

This is a Progressive Web Application (PWA) text editor that allows users to create, edit, and save text documents directly in the browser. It provides offline functionality through IndexedDB and a service worker, ensuring that your content is saved and accessible even without an internet connection.

## Features

- **IndexedDB Integration:** Automatically creates a database storage, saves content when the window is unfocused, and retrieves it upon reopening the application.
- **Service Worker with Workbox:** Caches static assets for offline access and ensures the application functions without an internet connection.
- **Webpack Bundling:** JavaScript files are bundled using Webpack, including the use of Babel for next-gen JavaScript features like async/await.
- **PWA Capabilities:** Can be installed as a Progressive Web Application (PWA) and includes a generated `manifest.json` using the `WebpackPwaManifest` plugin.
- **Automatic Content Saving:** Content in the text editor is automatically saved when the user clicks off the DOM window.
- **Cross-Browser Compatibility:** The application functions seamlessly across modern web browsers.



## Installation

To get a local copy of the project up and running, follow these simple steps:

### Prerequisites

Ensure that you have Node.js and npm installed on your machine.

### Clone the Repository

```bash
git clone https://github.com/ElijahWard4/Text-Editor-ElijahWard.git
```

### Navigate to the Project Directory

```bash
cd Text-Editor-ElijahWard
```

### Install Dependencies

```bash
npm install
```

### Start the Application

```bash
npm start
```
## Application Functionality


https://github.com/user-attachments/assets/65033f8f-dcd1-4e06-8fd3-75e2a27f46c4


## Application's manifest.json file
<img width="1392" alt="Screenshot 2024-08-08 at 2 05 44 AM" src="https://github.com/user-attachments/assets/c271e86f-563a-4253-b2f3-8eab98495529">

## Application's registered service worker
<img width="1397" alt="Screenshot 2024-08-08 at 2 07 02 AM" src="https://github.com/user-attachments/assets/4712ec61-e376-46a1-86b1-9bbf3fea9a7e">

## Application's IndexedDB storage
<img width="1397" alt="Screenshot 2024-08-08 at 2 07 49 AM" src="https://github.com/user-attachments/assets/d6ff4732-5551-4e63-96f9-f55c26fa652c">

This will start both the backend server and the client, and the application should open in your default web browser.
