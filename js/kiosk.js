
var total = 0;
var totalCount = 0;
var menu_list = {
  pizza1 : { price : 22900, count : 0 },
  pizza2 : { price : 22900, count : 0 },
  pizza3 : { price : 21900, count : 0 },
  pizza4 : { price : 22900, count : 0 },
  pizza5 : { price : 21900, count : 0 },
  pizza6 : { price : 22900, count : 0 },
  pizza7 : { price : 22900, count : 0 },
  pizza8 : { price : 24900, count : 0 },
  pizza9 : { price : 22900, count : 0 },

  spaghetti1 : { price : 7000, count : 0 },
  spaghetti2 : { price : 8000, count : 0 },

  side1 : { price : 3500, count : 0 },
  side2 : { price : 3500, count : 0 },
  side3 : { price : 9000, count : 0 },
  side4 : { price : 12000, count : 0 },
  side5 : { price : 7500, count : 0 },
  side6 : { price : 7000, count : 0 },
  side7 : { price : 9000, count : 0 },
  side8 : { price : 9000, count : 0 },
  side9 : { price : 5000, count : 0 },

  sauce1 : { price : 500, count : 0 },
  sauce2 : { price : 200, count : 0 },
  sauce3 : { price : 200, count : 0 },
  sauce4 : { price : 300, count : 0 },
  sauce5 : { price : 1000, count : 0 },
  sauce6 : { price : 1000, count : 0 },
  sauce7 : { price : 1000, count : 0 },
  sauce8 : { price : 500, count : 0 },
  sauce9 : { price : 1000, count : 0 }
};

function buy(elem){
  let product = elem.id;

  total += menu_list[product].price;
  menu_list[product].count++;

  let items = document.querySelector(".shopcart");
  items.innerHTML = "";
  
  for(let i = 0; i < Object.keys(menu_list).length; i++)
  {
    let tmp = Object.keys(menu_list);
    let n = menu_list[[tmp[i]]];

    if (n.count > 0)
    {
      items.innerHTML += "<div class='menuList'>" 
      + "<span class='menu'>" + MenutransKO(tmp[i]) + "</span>"
      + "<span class='amount'>" + n.count + "개" + "</span>"
      + "<span class='price'>" + (n.count * n.price) + "원" + "</span>"
      + "<button onClick='deleteMenu(this);'>X</button>" + "</div>";
    }
  }

  document.querySelector("#result").innerHTML = total + "원";
  
}

function deleteMenu(menu){
  let product = MenutransEN(menu.parentNode.firstChild.innerHTML);

  menu_list[product].count -= 1;

  if(menu_list[product].count < 0)
  {
    menu_list[product].count = 0;
  }
  else if(menu_list[product].count == 0) {
    menu.parentNode.remove();
    total -= menu_list[product].price;
  }
  else {
    total -= menu_list[product].price;
  }
  menu.previousSibling.innerHTML = menu_list[product].count * menu_list[product].price + "원";
  menu.previousSibling.previousSibling.innerHTML = menu_list[product].count + "개";
  
  document.querySelector("#result").innerHTML = total + "원";
}

function allDelete(){
document.querySelector(".shopcart").innerHTML = "";

for(let i = 0; i < Object.keys(menu_list).length; i++)
{
  let tmp = Object.keys(menu_list);
  let n = menu_list[[tmp[i]]];

  n.count = 0;
}

total = 0;
document.querySelector("#result").innerHTML = 0 + "원";
}


function MenutransKO(product){
  let resultString = "";

  switch(product){
    case "pizza1":
      resultString = "왕손콤비네이션";
      break;
    case "pizza2":
      resultString = "왕손페페로니";  
      break;
    case "pizza3":
      resultString = "웰빙다이어트야채";
      break;
    case "pizza4":
      resultString = "화이트고구마무스";
      break;
    case "pizza5":
      resultString = "왕손치즈피자";
      break;
    case "pizza6":
      resultString = "베이컨왕손포테이토";
      break;
    case "pizza7":
      resultString = "왕손하와이언";
      break;
    case "pizza8":
      resultString = "왕손궁중불고기";
      break;
    case "pizza9":
      resultString = "고르곤졸라맛있따";
      break;
    
    case "spaghetti1":
      resultString = "치즈오븐스파게티";
      break;
    case "spaghetti2":
      resultString = "까르보나라";
      
    case "side1":
      resultString="바싹통다리치킨";
      break;
    case "side2":
      resultString="매콤점보닭다리";
      break;
    case "side3":
      resultString="버팔로윙";
      break;
    case "side4":
      resultString="훈제치킨";
      break;
    case "side5":
      resultString="크림치즈볼";
      break;
    case "side6":
      resultString="치즈스틱";
      break;
    case "side7":
      resultString="치킨텐더";
      break;
    case "side8":
      resultString="새우링";
      break;
    case "side9":
      resultString="미트웨지감자";
      break;

    case "sauce1":
      resultString="피클";
      break;
    case "sauce2":
      resultString="핫소스";
      break;
    case "sauce3":
      resultString="치즈가루";
      break;
    case "sauce4":
      resultString="갈릭소스";
      break;
    case "sauce5":
      resultString="꿀";
      break;
    case "sauce6":
      resultString="스리라차딥핑소스";
      break;
    case "sauce7":
      resultString="렌치소스";
      break;
    case "sauce8":
      resultString="요거트";
      break;
    case "sauce9":
      resultString="할라피뇨";
      break;
  }

  return resultString;
}

function MenutransEN(product){
  let resultString = "";

  switch(product){
    case "왕손콤비네이션":
      resultString = "pizza1";
      break;
    case "왕손페페로니":
      resultString = "pizza2";  
      break;
    case "웰빙다이어트야채":
      resultString = "pizza3";
      break;
    case "화이트고구마무스":
      resultString = "pizza4";
      break;
    case "왕손치즈피자":
      resultString = "pizza5";
      break;
    case "베이컨왕손포테이토":
      resultString = "pizza6";
      break;
    case "왕손하와이언":
      resultString = "pizza7";
      break;
    case "왕손궁중불고기":
      resultString = "pizza8";
      break;
    case "고르곤졸라맛있따":
      resultString = "pizza9";
      break;
    
    case "치즈오븐스파게티":
      resultString = "spaghetti1";
      break;
    case "까르보나라":
      resultString = "spaghetti2";
      
    case "바싹통다리치킨":
      resultString="side1";
      break;
    case "매콤점보닭다리":
      resultString="side2";
      break;
    case "버팔로윙":
      resultString="side3";
      break;
    case "훈제치킨":
      resultString="side4";
      break;
    case "크림치즈볼":
      resultString="side5";
      break;
    case "치즈스틱":
      resultString="side6";
      break;
    case "치킨텐더":
      resultString="side7";
      break;
    case "새우링":
      resultString="side8";
      break;
    case "미트웨지감자":
      resultString="side9";
      break;

    case "피클":
      resultString="sauce1";
      break;
    case "핫소스":
      resultString="sauce2";
      break;
    case "치즈가루":
      resultString="sauce3";
      break;
    case "갈릭소스":
      resultString="sauce4";
      break;
    case "꿀":
      resultString="sauce5";
      break;
    case "스리라차딥핑소스":
      resultString="sauce6";
      break;
    case "렌치소스":
      resultString="sauce7";
      break;
    case "요거트":
      resultString="sauce8";
      break;
    case "할라피뇨":
      resultString="sauce9";
      break;
  }

  return resultString;
}

function orderRequest(){
  alert(total+"원 결제되었습니다.");
  allDelete();
}