
const reviews = [
    ["Stefan Stad", "Lovely product, definetly helped me out!", "4", "36"],
    ["John Doe", "Great product, highly recommend!", "5", "78"],
    ["Jane Smith", "I'm very satisfied with my purchase.", "4", "53"],
    ["Bob Johnson", "The product didn't meet my expectations.", "2", "12"],
    ["Alice Williams", "I love this product, it's exactly what I needed.", "5", "94"],
    ["Mike Brown", "The product was ok, but not worth the price.", "3", "34"],
    ["Anna Lee", "I'm happy with my purchase.", "4", "63"],
    ["Tom Davis", "The product was defective, I'm disappointed.", "1", "9"],
    ["Jessica Taylor", "I'm satisfied with my purchase, but the delivery was slow.", "3", "32"],
    ["William Anderson", "The product exceeded my expectations, I'm very happy with it.", "5", "97"],
    ["Sara Johnson", "The product was ok, but I've had better.", "3", "23"],
    ["Michael Thompson", "I'm disappointed with my purchase, I wouldn't recommend it.", "2", "11"],
    ["Emma Williams", "The product was exactly what I was looking for, I'm very happy with it.", "5", "87"],
    ["David Smith", "The product was good, but the customer service was bad.", "3", "27"],
    ["Karen Anderson", "I'm happy with my purchase, the product was as described.", "4", "55"],
    ["James Davis", "The product was defective, I had to return it.", "1", "7"],
    ["Laura Taylor", "The product was good, but the delivery was slow.", "3", "29"],
    ["Christopher Johnson", "I'm disappointed with my purchase, I wouldn't recommend it.", "2", "12"],
    ["Elizabeth Thompson", "I'm happy with my purchase, the product was as described.", "4", "53"],
    ["Ashley Williams", "The product exceeded my expectations, I'm very happy with it.", "5", "85"],
    ["Richard Smith", "The product was ok, but I've had better.", "3", "22"],
    ["Diana Anderson", "The product was defective, I'm disappointed.", "1", "10"],
    ["David Lee", "I'm satisfied with my purchase, but the delivery was slow.", "3", "31"]
]


let currentReview = 0;

function GetNextReview() {
    
    currentReview += 1; 

    if (currentReview >= reviews.length){
        currentReview = 0;
    }   
    else if (currentReview <= 0){
        currentReview = reviews.length -1;
    }

    let review = reviews[currentReview];  

    return {
      name: review[0],
      description: review[1],
      starRating: review[2],
      likes: review[3],
    };
  }

  function GetPreviousReview(){
      
    currentReview -= 1; 

    if (currentReview < 0){
        currentReview = reviews.length -1;
    }   
    else if (currentReview >= reviews.length){
        currentReview = 0;
    } 

    let review = reviews[currentReview];  

    return {
      name: review[0],
      description: review[1],
      starRating: review[2],
      likes: review[3],
    };
  }

  function loadReview(review) {

    document.getElementById("reviewname").textContent = review.name;
    document.getElementById("reviewdescription").textContent =
      review.description;

    document.getElementById("reviewlikes").textContent = review.likes;
    document.getElementById("reviewrating").textContent =
      review.starRating + "/5 ";

    setStars(review.starRating);
  }



const fullStarURL = "Images/star.png";
const halfStarURL = "Images/half star.png"
const noStarURL = "Images/no star.png";

function setStars(reviewStars){
    let num = parseInt(reviewStars);
    const stars = document.querySelectorAll(".star");
    
    for(let i = 0; i < stars.length; i++){

        stars[i].querySelector("img").src = noStarURL;

        if(i < num){
            stars[i].querySelector("img").src = fullStarURL;
        } else if (i < Math.floor(num + 0.5)) {
            
            stars[i].querySelector("img").src = halfStarURL;
        } 
    }
}
