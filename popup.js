//var json;
var t;
var i;
var start;
var upcoming_contests=[];
var ongoing_contest={items:[]};
var d=new Date();
var n=d.getTime();
var FetchedContestUrls = {};
console.log(n);
function contests()
{
	i=0;
	console.log("call");
	$.getJSON("http://codeforces.com/api/contest.list",function(data){
     // json = data.result;
	$.each(data.result, function(key, val) {
   start=new Date(val.startTimeSeconds*1000);
   t=(val.startTimeSeconds+val.durationSeconds)*1000;
   if(n<t)
   {
   	//console.log("fudhs");
   	if(n<val.startTimeSeconds*1000)
   	{
   	upcoming_contests[i]=val;
   //alert(start);
   i+=1;
   console.log("up");
   $("#u").append("<a href='http://codeforces.com/contests/"+val.id+"/'>Click here</a>");
   $("#u").append(val.name);
   $("#u").append("<br>");
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
}

for(var j=0;j<i;j++)
{
	if(((upcoming_contests[i].startTimeSeconds-n/1000)/3600)==1)
	{
      chrome.browserAction.setBadgeText({text:""});		
	}
}

 
