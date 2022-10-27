var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg", "https://clipground.com/images/peppa-pig-clipart-png-20.png", "https://vignette.wikia.nocookie.net/peppapig/images/3/32/Chloe_Pig.png/revision/latest?cb=20170816050028", "https://tse3.explicit.bing.net/th?id=OIP.-APcj5zD_pcE9dsAHSD_9wAAAA&pid=Api&P=0","https://vignette.wikia.nocookie.net/peppapedia/images/e/e2/Polly_Pig.png/revision/latest?cb=20191229214721"];
var names = ["Family Book", "Abhishake", "Siya", "Tarvinder","Me(Geet)"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage =images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName =names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
