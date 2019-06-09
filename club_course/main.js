$(document).ready(function(){
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");
    
    var topicCount = topic.length;
    
    var secondUnit = 1000;
    var minuteUnit = secondUnit * 60;
    var hourUnit = minuteUnit * 60;
    var dayUnit = hourUnit * 24;
    
    for(var x = 0; x < topicCount; x++)
    {
       $("#courseTable").append("<tr>");
       $("#courseTable").append("<td>"+(x+1)"</td>");
       $("#courseTable").append("<td>" + (new Date((startDate.getTime() + x*7*dayUnit))).toLocaleDateString().slice(5)+"</td>");
       $("#courseTable").append("<td>"+topic[x]+"</td>");
       $("#courseTable").append("</tr>");
    }
    
    $("#submit_date").click(function(){
        var input_time = $("#input_date").val();
        //window.alert(input_time);
        var split_time = input_time.split("-");
        var month = parseInt(split_time[1]);
        var day = parseInt(split_time[2]);
        setMonthAndDay(month, day);
        for(var x = 0; x < topicCount; x++)
        { 
            document.getElementById("courseTable").rows[x+1].cells[1].innerHTML = (new Date(startDate.getTime() + x*7*dayUnit)).toLocaleDateString().slice(5)+
            //window.alert(document.getElementById("courseTable").rows[x+1].cells[1].innerHTML);
        }
    });
    
    $("#submit_event").click(function(){
        var input_text = $("#input_event").val();
        topic.push(input_text);
        topicCount = topic.length;
        if(input_text=="不上課")
        {
            $("#courseTable").append("<tr><td class='event'>" + (topicCount) + "</td><td class='time'>" + (new Date(startDate.getTime() + (topicCount-1)*7*dayUnit)).toLocaleDateString().slice(5) + "</td><td style='color: grey;'>" + topic[topicCount-1] + "</td></tr>");
        }
        else
        {
            $("#courseTable").append("<tr><td class='event'>" + (topicCount) + "</td><td class='time'>" + (new Date(startDate.getTime() + (topicCount-1)*7*dayUnit)).toLocaleDateString().slice(5) + "</td><td style='font-weight: bold;'>" + topic[topicCount-1] + "</td></tr>");
        }
    });
});
