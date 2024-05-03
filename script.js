var data = [
    {
        id: 0,
        name: "Janu",
        English: 50,
        Maths: 86,
        Science: 77,
        SocialScience: 88
    },
    {
        id: 1,
        name: "Thanu",
        English: 75,
        Maths: 96,
        Science: 67,
        SocialScience: 91
    },
    {
        id: 2,
        name: "Tara",
        English: 90,
        Maths: 35,
        Science: 86,
        SocialScience: 100
    },
    {
        id: 3,
        name: "Glen",
        English: 79,
        Maths: 68,
        Science: 77,
        SocialScience: 78
    },
    {
        id: 4,
        name: "Zara",
        English: 80,
        Maths: 85,
        Science: 96,
        SocialScience: 68
    }
]




function onPageLoad() {
    // code goes here to display table on page loads
displayStudent(data);


}




function filterBy() {
    // code goes here to select filter by option
    var mode=document.querySelector('input[name="mode"]:checked').value;
    var subject=document.getElementById("subjects").value;
    var mark=parseInt(document.getElementById("mark").value);
    var maxmark=parseInt(document.getElementById("maxMark").value);
   if(mode=="between" && (!maxmark || isNaN(maxmark)))
   {
    document.getElementById("to").style.display="inline";
    document.getElementById("maxMark").style.display="inline";
    return;
   }
   else{
    document.getElementById("to").style.display="none";
    document.getElementById("maxMark").style.display="none";
   }
   var filteredData = data.filter(function(student) {
    if (mode === "above") {
        return student[subject] > mark;
    } else if (mode === "below") {
        return student[subject] < mark;
    } else if (mode === "between") {
        return student[subject] > mark && student[subject] < maxmark;
    }
});
   displayStudent(filteredData);
}
function displayStudent(students)
{
    var table = document.getElementById("studentData");
    table.innerHTML = "";


    students.forEach(function(student, index) {
        var row = table.insertRow();
        row.insertCell(0).textContent = index + 1;
        row.insertCell(1).textContent = student.name;
        row.insertCell(2).textContent = student.English;
        row.insertCell(3).textContent = student.Maths;
        row.insertCell(4).textContent = student.Science;
        row.insertCell(5).textContent = student.SocialScience;
    });
   
}
function Clear() {
    // code goes here to clear filter
    document.getElementById("subjects").selectedIndex=0;
    document.querySelector('input[name="mode"][value="above"]').checked=true;
    document.getElementById("mark").value = "";
    document.getElementById("maxMark").value = "";
    displayStudent(data);
}




function filterClick() {
    // code goes here to handle filter button
    var subject=document.getElementById("subjects").value;
    if(subject=="")
        return;
    filterBy();
}
