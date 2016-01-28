var app = angular.module("redditClone", []);

app.controller('RedditController', function($scope){
 	
 	// posts object, establishes different posts
    $scope.posts = [{
      title:"I like turtles", 
      author:"Trippy Turtle", 
      imageURL:"http://www.residentadvisor.net/images/profiles/trippyturtle.jpg", 
      description:"Six hasn't been the same since he left Vietnam. He can seldom close his eyes without opening them again at fear of Charlies lurking in the jungle trees. Not that you could ever see the bastards, mind you. They were swift, and they knew their way around the jungle like nothing else. He remembers the looks on the boys' faces as he walked into that village and... oh, Jesus. The memories seldom left him, either. Sometimes he'd reminisce - even hear - Tex's southern drawl. He remembers the smell of Brooklyn's cigarettes like nothing else. He always kept a pack of Lucky's with him. The boys are gone, now. He knows that; it's just that he forgets, sometimes. And, every now and then, the way that seven looks at him with avid concern in his eyes... it makes him think. Sets him on edge. Makes him feel like he's back there... in the jungle.", 
      votes:12,
      date: new Date(1993,05,30),
      comments: [{author:"kevin",
      text: "cats"}, 

      {author:"Luis",
      text:"do you mean cars?"}
      ] },
      {
    	title:"DONT EVA PLAY YOURSELF", 
   		author:"Dj Khaled", 
   		imageURL:"http://www.mtv.com/crop-images/2013/09/11/DJ%20Khaled.jpg", 
   		description:"hi every1 im new!!!!!!! holds up key to success my name is DJ Khaled but u can say my name DJ KHALEEEEEEEEEEED!!!!!!!! lol…as u can see im very smart and loyal!!!! thats why i came here, 2 meet smart and loyal ppl like me … im 40 years old (im smart and loyal 4 my age tho!!) i like 2 go to finga lickin w/ my lion (LIOOOOOOOOOOOOON) its our favorite place to eat!!! bcuz its SOOOO good!!!! we da best 2 of course but i want 2 meet more smart and loyal and genius ppl =) like they say the more the merrier!!!! lol…neways i hope 2 make alot of freinds and give them 10,000$ to buy their mom a house here so give me lots of commentses!!!! ANOTHER ONE!!!!!!!!!!!!!!!! <--- me bein smart and loyal again ^ hehe…eggwhitels!!!!!say my name,say my name,say my name,say my name,DJ KHALEEEEEEEEEEED", 
   		votes:-2,
   		date: new Date(2001,01,20),
   		comments: [{author:"ed",
      text: "edwin is my name-o"},
      {author:"zuzu",
      text: "sqqooosdfas"},
      {author:"cho",
   		text: "zubair did you have a stroke?"}
   		] },
   		
   		{
   		title: "MEMES",
   		author: "Froggy Fresh",
   		imageURL: "http://40.media.tumblr.com/81f9a830ef00f0d807f8a6ad739e5976/tumblr_inline_nzkdhqKIke1tz3q2i_1280.jpg",
   		description: "AAAAAAAAAAH!!! Every FUCKING day with these STUPID fucking MEMES! I've had it up to HERE with stupid fucking memes! You guys make me want to KILL MYSELF! Is that what you fucking want? For me to fucking KILL MYSELF and write on my suicide note Cause of suicide: Couldn't handle all of the stupid fucking memes, killed myself? Because that's what it might as well fucking say! You guys are literally, L I T E R A L L Y incapable of having even the SIMPLEST of fucking discussion without MEME THIS, MEME THAT, PROBABLY TYLO BE CHILLIN, HERE'S A PIC OF HUMBLE CANNONS BY AARON ELLIS, HAHAHAHAHAHAHAHAHA EBIN AMIRITE? Fucking STOP IT you pathetic fucking DOLTS, you are such fucking cancer that I cannot even fathom how you fucking scumbags live your dumb gay lives. Don't you have a job to get to, schoolwork to finish or a family to attend to? Do you literally do ANYTHING productive with your lives other than post stupid fucking memes on the music section of a god damn anime imageboard? You fucking people make me sick and you're damn lucky I don't have any of your fucking addresses you fucking pieces of shits. I'd spit in your faces.",
   		votes: 6,
   		date: new Date(1992,09,21),
   		

   		comments: [{author:"turtle",
   		text: "asdfasdf"}, 
   		
   		{author:"frog",
   		text:"u ok?"}
   		] 	
   	}
   		];


   	// comments object, empty
    $scope.comment = {};
   	   // add comment
    $scope.addComment = function(post){
    	// console.log($scope.posts);
    	// console.log($scope.comment);
      	post.comments.push({
    		author: $scope.comment.author,
    		text: $scope.comment.text
    });

    };




   	// submit new posts
    $scope.addPost = function () {
    	

      $scope.posts.push({
    		title: $scope.ntitle, 
    		author: $scope.nauthor, 
    		imageURL: $scope.nimageURL, 
    		description: $scope.ndescription,
    		votes: 0,
    		date: new Date() ,
        comments:[]
    	});
    	// establishing scope of new posts
        $scope.ntitle = "";
        $scope.nauthor = "";
        $scope.nimageURL = "";
        $scope.ndescription = "";

    };

    // upvote posts
    $scope.upvote = function(post){
    	post.votes ++;

    };  

    // downvote posts
    $scope.downvote = function(post){
    	post.votes --;

    };


});