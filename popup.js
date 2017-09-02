var t;
var i=0;
var start;
var upcoming_contests=[];
//var ongoing_contest={items:[]};
var d=new Date();
var offset = d.getTimezoneOffset();
console.log(d);
var n=d.getTime();
//var FetchedContestUrls = {};
	function notice()
  {
chrome.browserAction.setBadgeText({text: ""});
  }
  console.log("call");
	$.getJSON("http://codeforces.com/api/contest.list",function(data){
     // json = data.result;
	$.each(data.result, function(key, val) {
   start=new Date(val.startTimeSeconds*1000);
   t=(val.startTimeSeconds+val.durationSeconds)*1000;
   if(n<t)
   {
   	console.log("fudhs");
   	if(n<val.startTimeSeconds*1000)
   	{
      console.log("ndhsa");
      //console.log((start-n)/60000);
    var diff=start-d;
    console.log(diff/3600000);
    if((diff/3600000)==12)
    {
    console.log("gyfrh");
    setTimeout(notice(),start-d-3600000);
     }
    //console.log((diff/1000)%24);
     //i=1;
    //chrome.browserAction.setBadgeText({text:""});
   console.log("up");
   $("#u").append("<a href='http://codeforces.com/contests/"+val.id+"/'>*</a>");
   $("#u").append(val.name);
   $("#u").append("<br>");
   //$("#u").append(val.startTimeSeconds);
   $("#u").append(start);
   $("#u").append("<br>");
   $("#u").append("Duration in min : ");
   $("#u").append(val.durationSeconds/60);
   $("#u").append("<br><br>");
	}

   	else
   	{
   $("#o").append("<a href='http://codeforces.com/contests/"+val.id+"/'>Click here</a>");
  $("#o").append(val.name);
  $("#o").append("<br>");
  $("#o").append(start);
  $("#o").append("<br>");
   $("#u").append("Duration in min : ");
  $("#o").append(val.durationSeconds/60);
  $("#o").append("<br><br>");
   	} 
   }
});
});
  
