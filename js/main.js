window.onload = () => {

    var $ = document.querySelector.bind(document)
    var $All = document.querySelectorAll.bind(document)
    $("html").style.display = "block";
    $("body").style.display = "block";

    var grid = $("#grid")
    var mainPage = $("#main-page")
    var nav = $("#nav")
    var navlist = $All(".nav-list")
    var aboutPage = $("#about-page")
    var scrollpage = $("#scroll-page")
    var pageWrap = $("#page-wrapper")
    var place = $All(".place")
    var slide = $All(".slide");
    var colorArr = ['black', 'whitesmoke', '#ae4f2f', '#507844'];
    



    //page slide animation
    function slidepage(elem, color) {



        elem.style = `animation: slidepage 0.7s 1 forwards; background-color:${color};`;

        mainPage.style = `background-color:${color}`;
        pageWrap.style = `background-color:${color}`;

        if (elem == slide[1]) {
            setAnim(2, 3);
            // console.log(2)
        }
        if (elem == slide[2]) {
            setAnim(1, 3)
        }
        if (elem == slide[3]) {
            setAnim(2, 1)
        }
    }

    function setAnim(e, e2) {
        slide[e].style = "animation:closepage 1s 1 forwards;"
        slide[e2].style = "animation:closepage 1s 1 forwards;"

        navlist[e].style = 'transform:scale(0.9);border-bottom:none;';
        navlist[e2].style = 'transform:scale(0.9); border-bottom:none;';
        navlist[0].style = 'transform:scale(0.9); border-bottom:none;';

    }

    var lastPage;
    for (let i = 1; i < navlist.length; i++) {
        navlist[i].onclick = () => {
            slidepage(slide[i], colorArr[i])
            lastPage = i;
            navlist[i].style = 'transform:scale(1.08);border-bottom:1px solid black;border-radius:3px;';
        }


    }
    navlist[0].onclick = function () {
        mainPage.style = `background-color:white;`;
        pageWrap.style = `background-color:white;`;
        slide[lastPage].style = "animation:closepage 1s 1 forwards;";
        navlist[0].style = 'transform:scale(1.08);border-bottom:1px solid black;border-radius:3px;';
        navlist[lastPage].style = 'transform:scale(0.9); border-bottom:none;';
    }


    //input the empty
    var aboutGrid2 = $All(".about-grid-item2");
    var nameList = $("#name-list")
    var nameInput = $("#name-input")
    var addInput = $("#address-input")
    var btnadd = $("#btn-add")
    var newList = -1;
    btnadd.addEventListener("click", () => {

        if (addInput.value != "") {
            // var creatediv=document.createElement("div")
            newList += 1;
            nameList.innerHTML += `<div class="contain-list"> 
        <div class='name-list'> ${nameInput.value}<span class='address-list'> (${addInput.value}) </span> <img class='comment-png' src="/png/review.png"  alt=""></div>
        
        </div>`

            nameInput.value = ""
            addInput.value = ""
        }
        else {
            alert("Please fill the given first then click on the button")
        }
        var cL = $All('.contain-list')[newList];

        cL.style='transition:1s; opacity:0; transform:translateY(-50px);'
        nameList.parentElement.scrollTop=nameList.parentElement.scrollHeight;
        // console.log(nameList.parentElement);
        setTimeout(function () {
            cL.style = 'transition:1s; opacity:1; transform:translateY(0px);';
        },50);





    })










}