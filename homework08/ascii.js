$(document).ready(() => {
    let startBtn = $("#startBtn");
    let stopBtn = $("#stopBtn");
    let animationSlt = $("#animationSlt");
    let sizeSlt = $("#sizeSlt");
    let turboIpt = $("#turboIpt");
    let animationTxtArea = $("#animationTxtArea");
    let controlCls = $(".control");

    let count;
    let animation;
    let frames;
    let interval;
    let isRunning;

    let toggle = (running) => {
        isRunning = running;
        if (running) { // true
            startBtn.prop('disabled', true);
            stopBtn.prop('disabled', false);
        } else { // false
            startBtn.prop('disabled', false);
            stopBtn.prop('disabled', true);
        }
    }

    toggle(false);

    let changeFrame = () => {
        animationTxtArea.text(frames[count++]);
        count %= frames.length;
    }

    let run = () => {
        count = 0;
        animation = ANIMATIONS[animationSlt.val()];
        frames = animation.split("=====\n");
        animationTxtArea.css({"font-size": sizeSlt.val() + "pt"})
        interval = setInterval(changeFrame, turboIpt.prop("checked") ? 50 : 250);
    }

    startBtn.click(() => {
        toggle(true);
        run();
    })

    controlCls.change(() => {
        if (isRunning) {
            clearInterval(interval);
            run();
        }
    });

    stopBtn.click(() => {
        clearInterval(interval);
        animationTxtArea.text(animation);
        toggle(false);
    })
})