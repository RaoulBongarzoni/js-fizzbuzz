const my_container= document.getElementById("container");

for(let i = 1; i <=100 ; i++){

    let my_text;
    let my_bg_color;

    if (i % 15 == 0){
        my_text="fizzbuzz";
        my_bg_color = "green"

    } else if(i % 3 == 0 ){
        my_text = "fizz"
        my_bg_color = "blue"
    } else if(i % 5 == 0 ){
        my_text = "buzz"
        my_bg_color = "red"
        
    } else {
        my_text=  i;
    }

    const box = document.createElement("div");
    box.classList.add("box" , my_bg_color );
    box.innerHTML = my_text;
    my_container.append(box);

}