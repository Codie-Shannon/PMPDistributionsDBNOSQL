// Import React Hooks
import { useState, useEffect } from "react";

// Import Axios
import axios from "axios";

// Import Componenets
import Textblock from "../components/Textblock";
import TextblockLink from "../components/TextblockLink";

// Functions
function Documents()
{
    // Create State For Documents in Database
    const [runList, setRunList] = useState([]);

    // Get Documents
    useEffect(() => {
        // Get Data From Link
            axios.get("http://localhost:3001/read").then((response) => { setRunList(response.data); });
        }, []);

    // Format and Return Documents
    return FormatDocuments(runList);
}

function FormatDocuments(runList)
{
    // Create Variable to Store Document Values
    let doc;

    // Return Page
    return (
        <div className="wrapper">
            {
                // Map (Loop) Through Documents in Database
                runList.map((val, key) => {
                    // Get Data From Current Looped Document 
                    { doc = GetDocument(val); }

                    // Return Formatted-HTML Database Document
                    return (
                        <div key={key} className="document border">
                            {/* Header */}
                            <h1>{doc.title}</h1>

                            {/* Contact */}
                            <h2>Contact</h2>
                            <Textblock h1="Deliverer Name" p1={doc.delivererName} h2="Address" p2={doc.address} />
                            <Textblock h1="Availability" p1={doc.availability} h2="Date Available" p2={doc.dateavail} />
                            <Textblock h1="Phone" p1={doc.phone} h2="Email" p2={doc.email} />

                            {/* Delivery */}
                            <h2>Delivery</h2>
                            <Textblock h1="Delivery Progress" p1={doc.deliveryprog} h2="Delivery Date" p2={doc.deldate} />

                            {/* Map (Loop) Through the Pamphlets Array and Display Them to the Screen */}
                            {doc.pamphlets.map((pamphlet) => {
                                return ( <Textblock h1="Pamphlet" p1={pamphlet.pamtype} h2="Bundle Quantity" p2={pamphlet.bundlequantity}/> );
                            })}

                            {/* Map */}
                            <h2>Map</h2>
                            <TextblockLink lh="Link" lnk={doc.maplink} lnktxt={doc.maptext} h1="Deliverables" p1={doc.deliverables} />
                        </div>
                    );
                })
            }
        </div>
    );
}

function GetDocument(document)
{
    // Create Array
    let doc = [{title: ""}, {delivererName: ""}, {address: ""}, {availability: ""}, {dateavail: ""}, {phone: ""}, {email: ""}, {deliveryprog: ""}, {deldate: ""}, {maplink: ""}, {maptext: ""}, {deliverables: ""}, {pamphlets: ""}, {pamphlet: ""} ];
    
    // Title
    doc.title = document.title;

    // Name
    doc.delivererName = `${document.contact.delivererName.first} ${document.contact.delivererName === true ? document.contact.delivererName.middle : ""} ${document.contact.delivererName.last}`;

    // Address
    doc.address = `${document.contact.address.street}, ${document.contact.address.city}`;

    // Availability
    doc.availability = document.contact.availability.isavailable === true ? "Available" : "Unavailable";

    // Date Available
    doc.dateavail = document.contact.availability.dateavail === true ? document.contact.availability.dateavail : "N / A";

    // Phone
    doc.phone = document.contact.phone;

    // Email
    doc.email = document.contact.email;

    // Delivery Progress
    doc.deliveryprog = document.delivery.isdelivered === true ? "Delivered" : "Not Delivered";

    // Date Delivered
    doc.deldate = document.delivery.deldate != null ? document.delivery.deldate.substring(0, 10).replaceAll('-', '/') : "N / A";

    // Pamphlets
    doc.pamphlets = document.delivery.pamphlets;

    // Map Link
    doc.maplink = document.map.mapimg;
    doc.maptext = "Map Link";

    // Deliverables
    doc.deliverables = document.map.deliverables;

    // Return Data
    return doc;
}

// Export Documents
export default Documents;
