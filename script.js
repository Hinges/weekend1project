var array = [];
var totalSalary;
$(document).ready(function(){
	$("#employeeInformation").on('submit', function(event){
		event.preventDefault();

		var values = {};
		$.each($("#employeeInformation").serializeArray(), function(info, field){
			values[field.name] = field.value;
		})

		$("#employeeInformation").find("input[type=text]").val("");
		$("#employeeInformation").find("input[type=number]").val("");

		console.log(values);
		array.push(values);
		calcSalaries(values);
		showInfo(values);
		console.log(array);
	});
});

function showInfo(object){
	$("#results").append("<div></div>");
	var $info = $("#results").children().last();
	console.log(object)

	$info.append("<p>" + object.employeeFirstName + "</p>");
	$info.append("<p>" + object.employeeLastName + "</p>");
	$info.append("<p>" + object.employeeId + "</p>");
	$info.append("<p>" + object.employeeJobTitle + "</p>");
	$info.append("<p>$" + object.employeeYearlySalary + "</p>");
	$info.append("<p>Total salary of employees: $" + totalSalary + "</p>");
}

function calcSalaries(object){
	totalSalary = 0;
	for(var i = 0; i<array.length;i++){
	totalSalary += Math.round((array[i].employeeYearlySalary)/12);
	}
}