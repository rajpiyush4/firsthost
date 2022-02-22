window.onload = () => {

    var $ = document.querySelector.bind(document)
    var $All = document.querySelectorAll.bind(document);

    $("html").style.display = "block";
    $("body").style.display = "block";

    // setTimeout(function () {
    //     if (innerWidth > 650) {
    //         $('#center-wrapper').style = 'opacity:1;transform:translateY(0px)';
    //     }
    //     else {
    //         $('#center-wrapper').style = 'opacity:1;transform:translateY(90px) scale(1.6)';
    //     }
    // }, 400)



    var mainPage = $("#main-page")
    var nav = $("#nav")
    var navlist = $All(".nav-list")
    var aboutPage = $("#about-page")
    var pageWrap = $("#page-wrapper")
    var slide = $All(".slide");

    var colorArr = ['black', '#FFECB3', 'transparent', '#525252'];
    //#141414 #4a4a4a
    //page slide animation
    
    var lastPage;

    function slidepage(elem, color) {

        elem.style = `animation: slidepage 1.8s 1 forwards; background-color:${color};`;

        mainPage.style = `background-color:${color}`;
        pageWrap.style = `background-color:${color}`;

        // slide[lastPage].style = "animation:closepage 1s 1 forwards;";

        if (elem === slide[1]) {
            setAnim(2, 3);

            nav.style = "color: #3f3d56;"
            // $('#circle').style = "background-color:#cfcfcf;";
        }
        if (elem === slide[2]) {
            setAnim(1, 3);

            nav.style = "color:#373333;";
            // $('#circle').style = "background-color:#7c7c7c;"
        }
        if (elem === slide[3]) {
            setAnim(2, 1);

            nav.style = "color:whitesmoke;"
            // $('#circle').style = "background-color:#525252;"
        }
    }

    function setAnim(e, e2) {
        slide[e].style = "animation:closepage 0.7s 1 forwards;"
        slide[e2].style = "animation:closepage 0.7s 1 forwards;"

        navlist[0].style = 'border-bottom:none;';
        navlist[e].style = 'border-bottom:none;';
        navlist[e2].style = 'border-bottom:none;';
    }

    for (let i = 0; i < navlist.length; i++) {
        navlist[i].onclick = () => {
            if (i == 0) {
                mainPage.style = `background-color:#faf2eb;`;
                pageWrap.style = `background-color:#faf2eb;`;
                nav.style = "color:hsl(27, 5%, 47%);";
                // $('#circle').style = "background-color:#a5a29e;"
                slide[lastPage].style = "animation:closepage 1s 1 forwards;";
                navlist[lastPage].style = 'border-bottom:none;';

                lastPage = i;
                navlist[i].style = 'border-bottom:2px solid hsl(27, 5%, 47%);border-radius:1px;';

                $('#center-wrapper').style = 'transition:0s;opacity:0;transform:translateY(200px)';
                setTimeout(function () {
                    if (innerWidth > 650) {
                        $('#center-wrapper').style = 'opacity:1;transform:translateY(0px)';
                    }
                    else {
                        $('#center-wrapper').style = 'opacity:1;transform:translateY(90px) scale(1.6)';
                    }
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
    var nameList = $("#name-list");
    var nameInput = $("#name-input");
    var addInput = $("#address-input");
    var newList = -1;

    // var storeH = {
    //     hostelN: null,
    //     addressN: null
    // };

    $("#btn-add").addEventListener("click", () => {

        if (addInput.value != "" && nameInput.value != "") {
            newList += 1;

            //     nameList.innerHTML += `<div class="contain-list"> 
            // <div class='name-list'><span> ${nameInput.value}<span class='address-list'> (${addInput.value}) </span></span> <span><img class='comment-png' src="/minorpro2.0/png/star.svg"  alt=""></span></div>

            // </div>`
            nameInput.value = ""
            addInput.value = "";
            // storeH.hostelN = nameInput.value;
            // storeH.addressN = addInput.value;
            // pushData(storeH);


            // update();

            //After adding in list animation;;;;;;;
            var cL = $All('.contain-list')[newList];
            cL.style = 'transition:1s; opacity:0; transform:translateY(-50px);';
            nameList.parentElement.scrollTop = nameList.parentElement.scrollHeight;
            setTimeout(function () {
                cL.style = 'transition:1.5s; opacity:1; transform:translateY(0px);';
            }, 50);
            //end;;;;
        }
        else {
            popup('Please Fill the given first then click on the button!', 3);
        }

    });

  






    // open comments
    // function update() {
    //     var commentIcon = $All(".comment-png");
    //     var commentPage = $('#comment-page');
    //     for (let i = 0; i < commentIcon.length; i++) {
    //         commentIcon[i].onclick = () => {
    //             commentPage.style = 'animation:open-comment 1s 1 forwards;';
    //             $All('.about-grid-item1')[0].style = 'transform:translateX(-25vw)';
    //         }
    //     }
    // }


    //us page animations
    var iconBox = $All(".us-icons");
    var usIcon = $All(".us-icon-box");
    for (let i = 0; i < iconBox.length; i++) {
        iconBox[i].onmouseover = () => {
            usIcon[i].style = "transform:scale(1.4);";
            setTimeout(() => {
                usIcon[i].style = "transform:scale(1);";
            }, 500);
        }
    }


    
    //restaurant page animation
    var bool1 = true
    var restWrapper = $("#rest-page-wrapper");
    var slideupWrapper = $("#slideup-wrapper");

    $("#listing-btn").onclick = () => {
        if (bool1) {
            $("#slideup").style = "animation: slideup 1s 1 forwards;"
            restWrapper.style = "filter:brightness(78%);"
            slideupWrapper.style = "opacity:1; transform: translateY(0px);";
            bool1 = false;
        }
        else {
            slideupWrapper.style = "transition:ease-out 1s 0.2s;transform: translateY(40px); opacity:0;";
            setTimeout(function () {
                restWrapper.style = "transition:0.8s;filter:brightness(60%) ;";
                $("#slideup").style = "animation:slidedown 1.3s 1 forwards;";
                bool1 = true;
            }, 860);
        }
    }


    


}
