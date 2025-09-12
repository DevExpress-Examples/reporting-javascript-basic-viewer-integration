<!-- default badges list -->
![](https://img.shields.io/endpoint?url=https://codecentral.devexpress.com/api/v1/VersionRange/230081035/24.2.1%2B)
[![](https://img.shields.io/badge/Open_in_DevExpress_Support_Center-FF7200?style=flat-square&logo=DevExpress&logoColor=white)](https://supportcenter.devexpress.com/ticket/details/T848276)
[![](https://img.shields.io/badge/📖_How_to_use_DevExpress_Examples-e9f6fc?style=flat-square)](https://docs.devexpress.com/GeneralInformation/403183)
[![](https://img.shields.io/badge/💬_Leave_Feedback-feecdd?style=flat-square)](#does-this-example-address-your-development-requirementsobjectives)
<!-- default badges end -->
# Reporting for JavaScript - Integrate the Web Document Viewer (with npm or Yarn package managers)

This example integrates the [HTML5 Document Viewer](https://docs.devexpress.com/XtraReports/17738) in a JavaScript application.

![JavaScript Document Viewer Integration](images/screenshot.png)

## Implementation Details

This example consists of two parts: 

- A server (back-end) ASP.NET Core project that enables [cross-domain requests (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) (Access-Control-Allow-Origin) and implements a custom web report storage.
- A Document Viewer front-end  JavaScript application with the Web docuemnt Viewer control.

To run this example, follow  the steps below:

1. Run the *ServerApp* project.
2. Navigate to the *ClientSide* folder and run one of the following commands to install packages" 
    - If you have the **npm** package manager:

        ```npm install```
		
    - If you have the **Yarn** package manager:
        
        ```yarn install```    

4. Host the client-side part (the *ClientSide* folder ) on the web server. You can add a new website in the **Internet Information Services (IIS) Manager**.
5. Launch the browser and open the website created in the previous step.

## Documentation

* [Document Viewer Integration (with npm or Yarn package managers)](https://docs.devexpress.com/XtraReports/401546)
<!-- feedback -->
## Does this example address your development requirements/objectives?

[<img src="https://www.devexpress.com/support/examples/i/yes-button.svg"/>](https://www.devexpress.com/support/examples/survey.xml?utm_source=github&utm_campaign=reporting-javascript-basic-viewer-integration&~~~was_helpful=yes) [<img src="https://www.devexpress.com/support/examples/i/no-button.svg"/>](https://www.devexpress.com/support/examples/survey.xml?utm_source=github&utm_campaign=reporting-javascript-basic-viewer-integration&~~~was_helpful=no)

(you will be redirected to DevExpress.com to submit your response)
<!-- feedback end -->
