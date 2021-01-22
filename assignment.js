//kilometerToMeter
function kilometerToMeter(kilometer){
    var meter = kilometer / 1000;
    if(kilometer < 0 ){
        return "Distance can't be a negative value."
    }
    return meter.toFixed(3);
}
var result = kilometerToMeter(100);
console.log(result);



//budgetCalculator
function budgetCalculator(clock, phone, laptop){
    var totalClocks = clock * 50;
    var totalPhone = phone * 100;
    var totalLaptop = laptop * 500;
    var totalCost = totalClocks + totalPhone + totalLaptop;
    if((clock < 0) || (phone < 0) || (laptop < 0)){
        return "Quantity never be a negative number.";
    }
    return totalCost;
}
var result = budgetCalculator(1,2,3);
console.log(result);



//hotelCost
function hotelCost(days){
    if (days>=1 && days<=10){
        if(days < 0){
            return "Day's number never be a negative value";
        }
        for(i = 0; i <= days; i++){
            var firstTenDays = 100*days;
        }
        return firstTenDays;
    }

    else if(days >= 11 && days <= 20){
        if(days < 0){
            return "Day's number never be a negative value";
        }
        for(i = 11; i <= days; i++){
            var secondTenDays = (100*10) + 80*(days-10);
        }
        return secondTenDays;
    }
    else{
        if(days < 0){
            return "Day's number never be a negative value";
        }
        for(i = 21; i <= days; i++){
            var afterTwentyDays = (100*10) + (80*10) + 50*(days-20);
        }
        return afterTwentyDays;
    }
}
var result = hotelCost(365);
console.log(result);



// megaFriend
function megaFriend(friends){
    var largest = friends[0];
    for(var i = 0; i < friends.length; i++){
        var element = friends[i];
        if(element.length > largest.length){
            largest = element;
        }
    }
    return largest;
}
var result = megaFriend(['akhi', 'tareq', 'ferdous',]);
console.log(result);
