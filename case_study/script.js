// Fixed Day and Schedule
const scheduleData = [
    {
        day: "Monday",
        schedule: "8:00 a.m. - 5:00 p.m."
    },
    {
        day: "Tuesday",
        schedule: "8:00 a.m. - 11:00 a.m."
    },
    {
        day: "Tuesday",
        schedule: "11:00 a.m. - 2:00 p.m."
    },
    {
        day: "Tuesday",
        schedule: "2:00 p.m. - 5:00 p.m."
    },
    {
        day: "Wednesday",
        schedule: "8:00 a.m. - 12:00 p.m."
    }
];


// Original Topics
const defaultTopics = [
    {
        name: "Introduction to XML",
        description: "This session introduces the basic concepts of XML.\nIt explains XML structure, elements and attributes."
    },

    {
        name: "Validity: DTD and Relax NG",
        description: "This session explains how XML documents are validated.\nDTD and Relax NG are discussed for defining XML structure."
    },

    {
        name: "XPath",
        description: "This session introduces XPath for navigating XML documents.\nIt explains how specific elements and data can be selected."
    },

    {
        name: "XSL Transformations",
        description: "This session explains XSL transformations in XML.\nIt shows how XML data can be transformed into different formats."
    },

    {
        name: "XSL Formatting Objects",
        description: "This session introduces XSL Formatting Objects.\nIt explains how XML content can be formatted for presentation."
    }
];


// Store fixed schedule in Local Storage
localStorage.setItem(
    "seminarSchedule",
    JSON.stringify(scheduleData)
);


// Check whether topics already exist in Local Storage
if (localStorage.getItem("seminarTopics") === null) {

    localStorage.setItem(
        "seminarTopics",
        JSON.stringify(defaultTopics)
    );
}


// Get topics from Local Storage
let topics = JSON.parse(
    localStorage.getItem("seminarTopics")
);


// Display topics when page loads
function displayTopics() {

    for (let i = 0; i < topics.length; i++) {

        document.getElementById("topic" + i).textContent =
            topics[i].name;
    }
}


// Edit Topic
function editTopic(index) {

    const topicSpan = document.getElementById(
        "topic" + index
    );

    const oldTopic = topics[index].name;

    // Create input box
    const input = document.createElement("input");

    input.type = "text";

    input.value = oldTopic;

    input.className = "topic-input";


    // Create Save button
    const saveButton = document.createElement("button");

    saveButton.textContent = "Save";


    // Replace topic text with input
    topicSpan.innerHTML = "";

    topicSpan.appendChild(input);


    // Add Save button
    topicSpan.appendChild(saveButton);


    // Save when button is clicked
    saveButton.onclick = function () {

        const newTopic = input.value.trim();

        if (newTopic === "") {

            alert("Topic cannot be empty.");

            return;
        }


        // Update topic
        topics[index].name = newTopic;


        // Save updated topics in Local Storage
        localStorage.setItem(
            "seminarTopics",
            JSON.stringify(topics)
        );


        // Display updated topic
        topicSpan.textContent = newTopic;

        alert("Topic updated successfully!");
    };


    // Automatically select the text
    input.focus();

    input.select();
}


// Display the topics when the webpage loads
displayTopics();