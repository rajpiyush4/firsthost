window.onload = () => {





    var $ = document.querySelector.bind(document)
    var $All = document.querySelectorAll.bind(document)
    $("html").style.display = "block";
    $("body").style.display = "block";
    setTimeout(function () {
        $('#center-wrapper').style = 'opacity:1;transform:translateY(0px)';
    }, 400)



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

        elem.style = `animation: slidepage 1.8s 1 forwards; background-color:${color};`;

        mainPage.style = `background-color:${color}`;
        pageWrap.style = `background-color:${color}`;

        if (elem === slide[1]) {
            nav.style = "color: #3f3d56;"
            $('#circle').style = "background-color:#e6e6e6;";
            setAnim(2, 3);
            // console.log(2)
        }
        if (elem === slide[2]) {
            nav.style = "color:#373333;";
            $('#circle').style = "background-color:#7c7c7c;"
            setAnim(1, 3);
        }
        if (elem === slide[3]) {
            nav.style = "color:whitesmoke;"
            setAnim(2, 1);
        }
    }

    function setAnim(e, e2) {
        slide[e].style = "animation:closepage 0.7s 1 forwards;"
        slide[e2].style = "animation:closepage 0.7s 1 forwards;"

        navlist[e].style = 'border-bottom:none;';
        navlist[e2].style = 'border-bottom:none;';
        $All(".center")[0].style = "transiton:0.7s; filter:brightness(90%) blur(0.1px);";
        navlist[0].style = 'border-bottom:none;';

    }

    var lastPage;
    for (let i = 0; i < navlist.length; i++) {
        navlist[i].onclick = () => {
            if (i == 0) {
                mainPage.style = `background-color:#373034;`;
                pageWrap.style = `background-color:#373034;`;
                nav.style = "color:whitesmoke;";
                $('#circle').style = "background-color:#a5a29e;"
                slide[lastPage].style = "animation:closepage 1s 1 forwards;";
                navlist[lastPage].style = 'border-bottom:none;';

                lastPage = i;
                $All(".center")[0].style = "transiton:0.7s; filter:brightness(100%) blur(0px);";
                navlist[i].style = 'border-bottom:2px solid honeydew;border-radius:1px;';

                $('#center-wrapper').style = 'transition:0s;opacity:0;transform:translateY(200px)';
                setTimeout(function () {
                    $('#center-wrapper').style = 'transition:2s ease-out`;opacity:1;transform:translateY(0px)';
                }, 400)


            }
            if (i > 0) {
                slidepage(slide[i], colorArr[i])
                lastPage = i;
                navlist[i].style = 'border-bottom:2px solid black;border-radius:1px;';
            }
        }



    }


    //input the empty
    var aboutGrid2 = $All(".about-grid-item2");
    var nameList = $("#name-list")
    var nameInput = $("#name-input")
    var addInput = $("#address-input")
    var btnadd = $("#btn-add")
    var newList = -1;
    // var storeH = {
    //     hostelN: null,
    //     addressN: null
    // };
    btnadd.addEventListener("click", () => {

        if (addInput.value != "" && nameInput.value != "") {
            // var creatediv=document.createElement("div")
            newList += 1;
            nameList.innerHTML += `<div class="contain-list"> 
        <div class='name-list'><span> ${nameInput.value}<span class='address-list'> (${addInput.value}) </span></span> <img class='comment-png' src="/png/comment.png"  alt=""></div>
        
        </div>`
            // storeH.hostelN = nameInput.value;
            // storeH.addressN = addInput.value;
            // pushData(storeH);
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
            popup('Please Fill the given first then click on the button!', 3);
        }



    })

    
       // popup('this',30);
       function popup(content, interval) {
        let elem = document.createElement('div');
        // elem.class = 'popup';
        document.body.appendChild(elem);
        elem.innerHTML = content;
        // elem.style.zIndex = '999';
        elem.style = `position:fixed;z-index:9999; bottom:60px; padding:10px 15px;
        overflow:hidden;width:clamp(70px,100vw,380px);
        background-color:#223;color:#eee;animation:popup-slide ${interval}s 1; border-radius:2px; text-align:center; `;
        // console.log(elem);
        setTimeout(function () {
            elem.style = 'diplay:none;'
            elem.remove();
        }, interval * 1000);

    }









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
    var bool = true

    var slideuppage = $("#slideup")
    var listingBtn = $("#listing-btn")
    var restWrapper = $("#rest-page-wrapper")
    var slideupWrapper = $("#slideup-wrapper")
    listingBtn.onclick = () => {
        if (bool) {
            slideuppage.style = "animation: slideup 1s 1 forwards;"
            restWrapper.style = "filter:brightness(78%);"
            slideupWrapper.style = "opacity:1; transform: translateY(0px);";
            bool = false;
        }
        else {
            slideupWrapper.style = "transition:ease-out 1s 0.2s;transform: translateY(40px); opacity:0;";
            setTimeout(function () {
                restWrapper.style = "transition:0.8s;filter:brightness(60%) ;";
                slideuppage.style = "animation:slidedown 1.3s 1 forwards;";
                bool = true;
            }, 860);
        }

    }


}
