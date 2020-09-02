var timeKeeper = [
    {
        id: "0",
        hour: "09",
        time: "09",
        ampm: "am",
        textArea: ""
    },
    {
        id: "1",
        hour: "10",
        time: "10",
        ampm: "am",
        textArea: ""
    },
    {
        id: "2",
        hour: "11",
        time: "11",
        ampm: "am",
        textArea: ""
    },
    {
        id: "3",
        hour: "12",
        time: "12",
        ampm: "pm",
        textArea: ""
    },
    {
        id: "4",
        hour: "01",
        time: "13",
        ampm: "pm",
        textArea: ""
    },
    {
        id: "5",
        hour: "02",
        time: "14",
        ampm: "pm",
        textArea: ""
    },
    {
        id: "6",
        hour: "03",
        time: "15",
        ampm: "pm",
        textArea: ""
    },
    {
        id: "7",
        hour: "04",
        time: "16",
        ampm: "pm",
        textArea: ""
    },
    {
        id: "8",
        hour: "05",
        time: "17",
        ampm: "pm",
        textArea: ""
    }
];

var jumbotronDateText = moment().format('dddd, MMMM Do');
$('#currentDay').text(jumbotronDateText)

timeKeeper.forEach(function(element) {
    //Create a row/form to append objects to
    var newRow = $('<form>').attr({ "class": "row" });
    $('.container').append(newRow);

    //Create the div that displays the rows Hour
    var displayHourField = $('<div>')
        .text(`${element.hour}${element.ampm}`)
        .attr({
            "class": "col-md-2 hour"
    });

    //Create div that will hold the text area in the center of each row
    var textDiv = $('<div>')
        .attr({
            "class": "col-md-9 description p-0"
    });
    
    /*Create the textArea that will go inside of textDiv for user to input items
    Depending on the current hour, display grey if the hour has past,
    display red if current hour, display green if future hour */
    var newTextArea = $('<textarea>').attr("id", element.id);
    if(element.time < moment().format('HH')) {newTextArea.attr("class", "past");}
    if(element.time > moment().format('HH')) {newTextArea.attr('class', 'future');} 
    if(element.time === moment().format('HH')) {newTextArea.attr('class', 'present');}
    
    //Create the save button
    var saveIcon = $("<i class='far fa-save fa-lg'></i>");
    var saveButton = $('<button>').attr('class', 'col-md-1 saveBtn');
    saveButton.append(saveIcon);

    textDiv.append(newTextArea);
    newRow.append(displayHourField, textDiv, saveButton);
});