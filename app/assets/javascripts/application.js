// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
var htmlentity = 192;
$(document).ready(function() {
	if (level != "50")
	{
resettable()
$("#attemp").html("Your Attempts ---> "+attempts.toString());
}
$(".restartAdmin").live("click", function(){
  $.ajax({
             type: "GET",
                url: "/updateadmin",
                data: {id: $(this).attr("id")}
              }).done();
        });
  $(".deleteadmin").live("click", function(){
  $.ajax({
             type: "GET",
                url: "/deluser",
                data: {id: $(this).attr("id")}
              }).done();
        });
$(".closed").live("click", function(){
	if(flagclicked)
	{
	if(clickdetails[0] == "-1")
	{
		clickdetails[0] = $(this).attr("id")
		if(level == "1")
		{
		$(this).addClass("openfour");
  		$(this).removeClass("closedfour");	
		}
		else
		{
		$(this).addClass("open");
  		$(this).removeClass("closed");
		}
  		attempts = attempts + 1;
  	}
	else
	{
		
		clickdetails[1] = $(this).attr("id")
		attempts = attempts + 1;
		if(level == "1")
		{
		$(this).addClass("openfour");
  		$(this).removeClass("closedfour");	
		}
		else
		{
		$(this).addClass("open");
  		$(this).removeClass("closed");
		}
  		checkvalues()
	}
	$("#attemp").html("Your Attempts ---> "+attempts.toString());

}

})
$(".closedfour").live("click", function(){
	if(flagclicked)
	{
	if(clickdetails[0] == "-1")
	{
		clickdetails[0] = $(this).attr("id")
		if(level == "1")
		{
		$(this).addClass("openfour");
  		$(this).removeClass("closedfour");	
		}
		else
		{
		$(this).addClass("open");
  		$(this).removeClass("closed");
		}
  		attempts = attempts + 1;
  	}
	else
	{
		
		clickdetails[1] = $(this).attr("id")
		attempts = attempts + 1;
		if(level == "1")
		{
		$(this).addClass("openfour");
  		$(this).removeClass("closedfour");	
		}
		else
		{
		$(this).addClass("open");
  		$(this).removeClass("closed");
		}
  		checkvalues()
	}
	$("#attemp").html("Your Attempts ---> "+attempts.toString());

}
});
})
function resettable()
{
for(i=0;i < gridsize;i++)
{
	for(j=0;j < gridsize;j++)
	{
	if(level == "1")
	{
	//	$("#"+(i*gridsize+j).toString()).addClass("closedfour");
			give_new_classes(i,gridsize,j, "closedfour")
		htmlent = htmlentity+parseInt(randomArr[(i*gridsize+j)])*5;
	}
	else if(level == "2")
	{	give_new_classes(i,gridsize,j, "closed")
		//$("#"+(i*gridsize+j).toString()).addClass("closed");
		htmlent = htmlentity+parseInt(randomArr[(i*gridsize+j)])*5;
	}
	else
	{
		give_new_classes(i,gridsize,j, "closedfour")
		//$("#"+(i*gridsize+j).toString()).addClass("closed");
		htmlent = htmlentity+parseInt(randomArr[(i*gridsize+j)]);
	}
	$("#"+(i*gridsize+j).toString()).html("&#"+htmlent+"&#"+htmlent)
	}
}	
}

function td_index(i,gridsize,j){
  return i*gridsize+j;
  }
function give_new_classes(i,gridsize,j, class_name) {
	$("#"+(i*gridsize+j).toString()).addClass("closed");
}

function checkvalues()
{
	flagclicked = false;
	if($.trim(randomArr[clickdetails[0]]) == $.trim(randomArr[clickdetails[1]]))
	{
		clickdetails = [-1,-1];
		opencount++;
		if(opencount == parseInt(totalopen))
		{
			alert("Congratulations you win "+attempts.toString());
			randomizearray();
			opencount = 0;
			attempts = 0;
			$("#attemp").html("Your Attempts ---> "+attempts.toString());
			resettable();
			flagclicked = true;
		}
		flagclicked = true;
	}
	else
	{
		setTimeout('resetopened()',600)
	}

}
function resetopened()
{
	if(level == "1")
	{
		$("#"+clickdetails[0]).addClass("closedfour");
  		$("#"+clickdetails[0]).removeClass("openfour");
  		$("#"+clickdetails[1]).addClass("closedfour");
  		$("#"+clickdetails[1]).removeClass("openfour");	
	}
	else
	{
		$("#"+clickdetails[0]).addClass("closed");
  		$("#"+clickdetails[0]).removeClass("open");
  		$("#"+clickdetails[1]).addClass("closed");
  		$("#"+clickdetails[1]).removeClass("open");
	}
	clickdetails = [-1,-1];
  	flagclicked = true;
}
function resetval()
{

	randomizearray();
			opencount = 0;
			attempts = 0;
			$("#attemp").html("Your Attempts ---> "+attempts.toString());
			resettable();
			flagclicked = true;
}
function randomizearray()
{
  var i = randomArr.length;
   while ( --i ) {
     var j = Math.floor( Math.random() * ( i + 1 ) );
     var tempi = randomArr[i];
     var tempj = randomArr[j];
     randomArr[i] = tempj;
     randomArr[j] = tempi;
   }
}
