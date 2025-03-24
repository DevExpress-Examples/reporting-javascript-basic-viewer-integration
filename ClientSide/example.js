const host = 'https://localhost:5001',
    reportUrl = "TestReport",
    viewerOptions = {
        reportUrl: reportUrl, // The URL of a report that the Document Viewer loads when the application starts.  
        requestOptions: { // Options for processing requests from the Document Viewer. 
            host: host, // URI of your backend project.
            // invokeAction: "/WebDocumentViewer/Invoke", // Action to enable CORS. 
			invokeAction: "/DXXRDV", // Action to enable CORS. 

        }
    }

new DevExpress.Reporting.Viewer.DxReportViewer(document.getElementById("viewer"), viewerOptions).render();