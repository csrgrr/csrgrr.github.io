

$(() => {

    // PAGES
    

    $(window).on('load', function() {
        let title = $("#about-me").find("div").text();
        let imageSrc = $("#about-me").find("img").attr("src");
    
        createWindow(title, imageSrc, "/about-me/about-me.html");
        initFunctions();
    });

    $("#about-me").dblclick(function() {
        let title = $(this).find("div").text();
        let imageSrc = $(this).find("img").attr("src");
    
        createWindow(title, imageSrc, "/about-me/about-me.html");
        initFunctions();
    });

    $("#projects").dblclick(function() {
        let title = $(this).find("div").text();
        let imageSrc = $(this).find("img").attr("src");
    
        createWindow(title, imageSrc, "/projects/projects.html");
        initFunctions();
    });

    $("#calculator").dblclick(function() {
        let title = $(this).find("div").text();
        let imageSrc = $(this).find("img").attr("src");
    
        createWindow(title, imageSrc, "/calculator/calculator.html");
        initFunctions();
    });

    $("#handbook").dblclick(function() {
        let title = $(this).find("div").text();
        let imageSrc = $(this).find("img").attr("src");
    
        createWindow(title, imageSrc, "/handbook/handbook.html");
        initFunctions();
    });

    $("#third-party-stuff").dblclick(function() {
        let title = $(this).find("div").text();
        let imageSrc = $(this).find("img").attr("src");
    
        createWindow(title, imageSrc, "/third-party-stuff/third-party-stuff.html");
        initFunctions();
    });

    $("#more").dblclick(function() {
        let title = $(this).find("div").text();
        let imageSrc = $(this).find("img").attr("src");
    
        createWindow(title, imageSrc, "/more/more.html");
        initFunctions();
    });

    

    //DESKTOP-ICONS
    $(".desktop-element").click(function (event) {

        $(".desktop-element img").removeClass("img-filter");
        $(".desktop-element div").removeClass("text-filter");

        $(this).find("img").addClass("img-filter");
        $(this).find("div").addClass("text-filter");

        event.stopPropagation();
    });

    $(document).click(function () {
        $(".desktop-element img").removeClass("img-filter");
        $(".desktop-element div").removeClass("text-filter");
    });

    //GIF
    let now = new Date();
    let month = now.getMonth() + 1;

    if (month === 10) {
        $(".gif img").attr("src", "assets/gifs/halloween.gif");
    } else if (month === 12) {
        $(".gif img").attr("src", "assets/gifs/christmas.gif");
    } else {
        let season;
        if (month >= 3 && month <= 5) {
            season = "spring.gif";
        } else if (month >= 6 && month <= 8) {
            season = "summer.gif";
        } else if (month >= 9 && month <= 11) {
            season = "autumn.gif";
        } else {
            season = "winter.gif";
        }

        $(".gif img").attr("src", "assets/gifs/" + season);
    }

    // CLOCK
    displayTime();
    setInterval(displayTime, 60000);


    // SOCIAL
    $('#social').hide();

    $('#social-button').on('click', function () {
        $('#social').toggle();
        $(this).toggleClass("social-active");
    });

    $(document).on('click', function (event) {
        if (!$(event.target).closest('#social-button').length) {
            $('#social').hide();
            $('#social-button').removeClass("social-active");
        }
    });

    $("#social-button").on("mouseover", function () {
        $(this).toggleClass("border-active");
    });

    $("#social-button").on("mouseout", function () {
        $(this).toggleClass("border-active");
    });



});


// FUNCTIONS-------------------------

function createWindow(title, imageSrc, path) {
    let window = $('<div class="window"></div>');

    let windowHeader = $('<div class="window-header"></div>');
    let windowTitle = $('<div class="window-title"><img src="' + imageSrc + '" width="18" height="18" class="title"/><p class="title">' + title + '</p></div>');
    let windowButtons = $('<div class="window-buttons"><button class="minimize"><img src="assets/icons/Minimize.png" width="10" height="10" class="title"/></button><button class="resize-button"><img src="assets/icons/Resize1.png" width="10" height="10" class="title"/></button><button class="exit"><img src="assets/icons/exit.png" width="10" height="10" class="title"/></button></div>');
    let windowBody = $('<div class="window-body"></div>');

    window.append(windowHeader);
    windowHeader.append(windowTitle);
    windowHeader.append(windowButtons);
    window.append(windowBody);
    windowBody.load("/pages" + path);

    $("body").append(window);

    window.show();
    
}

function copyToClipboard() {
    let range = document.createRange();
    range.selectNode(document.getElementById("copy-mail"));
    window.getSelection().removeAllRanges(); 
    window.getSelection().addRange(range); 
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
}

function displayTime() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    let formattedTime = hours + ':' + minutes + ' ' + ampm;
    document.getElementById('clock').innerHTML = formattedTime;
}

function refreshButtons(programWindows) {
    programWindows = {};
    $("p.title").each(function () {
        var programName = $(this).text();
        var programWindow = $(this).closest('.window');
        programWindows[programName] = programWindow;
    });

    let leftFooterContainer = $("#left-footer-container");
    $(".program").remove();


    $.each(programWindows, function (name) {

        let idName = name.split(" ")[0];
        let button = $('<button class="program" id="' + idName + '">' + name + '</button>');
        leftFooterContainer.append(button);

        button.click(function () {

            if (programWindows[name].is(":visible") && programWindows[name].find('.window-header').css('background-color') === 'rgb(0, 0, 255)') {
                programWindows[name].hide();
            } else {
                programWindows[name].show();
            }

            $(".window-header").css("background-color", "grey");
            let allWindows = $(".window");
            allWindows.css("z-index", 10);
            $(".window-header").css("background-color", "grey");

            programWindows[name].css("z-index", 11);
            programWindows[name].find('.window-header').css("background-color", "blue");


            let programs = $(".program");
            programs.removeClass("social-active");

            if (programWindows[name].is(":visible")) {
                button.addClass("social-active");
            }


        });
    });

    $(".program").last().addClass("social-active");

}


function initFunctions(){
        // BUTTONS FOOTER
        let programWindows = {};
        refreshButtons(programWindows)
    
    
    
    
        // LOGIC CLICK
        $(".window").on("mousedown", function () {
            let clickedWindow = $(this);
            let allWindows = $(".window");
    
            allWindows.css("z-index", 10);
            $(".window-header").css("background-color", "grey");
    
            clickedWindow.css("z-index", 11);
            clickedWindow.find(".window-header").css("background-color", "blue");
    
            // Obtener el primer segmento de la ventana como identificador
            let programName = clickedWindow.find(".title").text().split(" ")[0];
            let programButton = $("#left-footer-container #" + programName);
            let programs = $(".program");
    
            programs.removeClass("social-active");
            programButton.addClass("social-active");
            programButton.addClass("social-active");
        });
    
    
    
        // MINIMIZE
        $(".minimize").on("click", function () {
            $(this).closest(".window").hide()
            let programName = $(this).closest(".window").find(".title").text().split(" ")[0];
            let programButton = $("#left-footer-container #" + programName);
            programButton.removeClass("social-active");
        });
    
        //EXIT
        $(".exit").on("click", function () {
            $(this).closest(".window").remove();
            refreshButtons(programWindows)
        });
    
        //RESIZE
        let isResized = false;
    
        $(".resize-button").click(function () {
            let window = $(this).closest(".window");
    
            if (!isResized) {
                $(this).find("img").attr("src", "assets/icons/Resize2.png");
                window.css({
                    top: "0vh",
                    left: "0vw",
                    width: "99.35vw",
                    height: "calc(100vh - 45px)"
                });
            } else {
                $(this).find("img").attr("src", "assets/icons/Resize1.png");
                window.css({
                    top: "5vh",
                    left: "20vw",
                    width: "60vw",
                    height: "80vh"
                });
            }
    
            isResized = !isResized;
        });
    
        //DRAG
        let isDragging = false;
        let initialMouseX, initialMouseY;
        let initialWindowX, initialWindowY;
        let currentWindow = null;
    
        $(".window-header").on("mousedown", function (event) {
            if (!isResized) {
                isDragging = true;
                initialMouseX = event.clientX;
                initialMouseY = event.clientY;
                let windowPos = $(this).closest(".window").position();
                initialWindowX = windowPos.left;
                initialWindowY = windowPos.top;
                currentWindow = $(this).closest(".window");
            }
        });
    
        $(document).on("mousemove", function (event) {
            if (isDragging) {
                if (currentWindow) {
                    let deltaX = event.clientX - initialMouseX;
                    let deltaY = event.clientY - initialMouseY;
                    let newWindowX = initialWindowX + deltaX;
                    let newWindowY = initialWindowY + deltaY;
    
                    currentWindow.css({
                        left: newWindowX + "px",
                        top: newWindowY + "px"
                    });
                }
            }
        });
    
        $(document).on("mouseup", function () {
            isDragging = false;
            currentWindow = null;
        });
}


