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

    var colorArr = ['black', 'whitesmoke', 'transparent', '#525252'];
    //#141414 #4a4a4a



    //page slide animation
    function slidepage(elem, color) {



        elem.style = `animation: slidepage 0.7s 1 forwards; background-color:${color};`;

        mainPage.style = `background-color:${color}`;
        pageWrap.style = `background-color:${color}`;

        if (elem === slide[1]) {
            nav.style="color: #3f3d56;"
            $('#circle').style="background-color:#e6e6e6;";
            setAnim(2, 3);
            // console.log(2)
        }
        if (elem === slide[2]) {
            nav.style = "color:#373333;";
            $('#circle').style="background-color:#7c7c7c;"
            setAnim(1, 3);
        }
        if (elem === slide[3]) {
            nav.style = "color:whitesmoke;"
            setAnim(2, 1);
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
        nav.style = "color:#3f3d56;";
        $('#circle').style="background-color:#f9d726;"
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

        if (addInput.value != ""  && nameInput.value != "") {
            // var creatediv=document.createElement("div")
            newList += 1;
            nameList.innerHTML += `<div class="contain-list"> 
        <div class='name-list'><span> ${nameInput.value}<span class='address-list'> (${addInput.value}) </span></span> <img class='comment-png' src="/png/comment.png"  alt=""></div>
        
        </div>`

            nameInput.value = ""
            addInput.value = "";
            update();


            var cL = $All('.contain-list')[newList];

            cL.style = 'transition:1s; opacity:0; transform:translateY(-50px);'
            nameList.parentElement.scrollTop = nameList.parentElement.scrollHeight;
            // console.log(nameList.parentElement);
            setTimeout(function () {
                cL.style = 'transition:1s; opacity:1; transform:translateY(0px);';
            }, 50);

        }
        else {
            // alert("Please fill the given first then click on the button")
            popup('Please Fill the given first then click on the button', 3)
        }



    })
     

















    //open comments
    function update() {
        var commentIcon = $All(".comment-png");
        var commentPage = $('#comment-page');
        for (let i = 0; i < commentIcon.length; i++) {
            commentIcon[i].onclick = () => {
                commentPage.style = 'animation:open-comment 1s 1 forwards;';

                $All('.about-grid-item1')[0].style = 'transform:translateX(-25vw)';

            }

        }
    }

    // popup('this',30);
    function popup(content, interval) {
        let elem = document.createElement('div');
        // elem.class = 'popup';
        document.body.appendChild(elem);
        elem.innerHTML = content;
        // elem.style.zIndex = '999';
        elem.style = `position:absolute;z-index:9999; bottom:60px; padding:10px 15px;
        overflow:hidden;
        background-color:#223;color:#eee;animation:popup-slide ${interval}s 1; border-radius:2px; `;
        // console.log(elem);
        setTimeout(function () {
            elem.style = 'diplay:none;'
            elem.remove();
        }, interval * 1000);

    }


    //us page animations
    var iconBox = $All(".us-icons")
    var usIcon = $All(".us-icon-box")
    var usBox1 = $("#us-box1")
    var usBox2 = $("#us-box2")
    for (let i = 0; i < iconBox.length; i++) {
        iconBox[i].onmouseover = () => {
            usIcon[i].style = "transform:scale(1.5)"


            setTimeout(() => {
                usIcon[i].style = "transform:scale(1)"
            }, 500);
        }

    }



    //rest page animation
    var bool=true
    
    var slideuppage=$("#slideup")
    var listingBtn=$("#listing-btn")
    var restWrapper=$("#rest-page-wrapper")
    listingBtn.onclick=()=>{
        if (bool) {
            slideuppage.style="animation: slideup 1s 1 forwards;"
        restWrapper.style="filter:brightness(90%)"

        bool=false
        }
        else{
            slideuppage.style="animation:slidedown 1s; "
            restWrapper.style="filter:brightness(60%)"
    
            bool=true
        }
        
    }



}
