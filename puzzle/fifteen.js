document.addEventListener("DOMContentLoaded", function() {
    var puzzlePieces = Array.from(document.querySelectorAll("#puzzlearea div"));
    var shuffleButton = document.getElementById("shufflebutton");
    var emptySpace = { top: 300, left: 300 };

    initializePuzzlePieces();

    puzzlePieces.forEach(function(piece) {
        piece.addEventListener("click", movePiece);
        piece.addEventListener("mouseover", highlightPiece);
        piece.addEventListener("mouseout", removeHighlight);
    });

    shuffleButton.addEventListener("click", shufflePuzzle);

    function initializePuzzlePieces() {
        puzzlePieces.forEach(function(piece, index) {
            var x = (index % 4) * 100;
            var y = Math.floor(index / 4) * 100;

            piece.className = "puzzlepiece";
            piece.style.left = x + "px";
            piece.style.top = y + "px";
            piece.style.backgroundPosition = -x + "px " + -y + "px";
        });
    }

    function movePiece() {
        if (isMovablePiece(this)) {
            var top = parseInt(this.style.top);
            var left = parseInt(this.style.left);

            this.style.top = emptySpace.top + "px";
            this.style.left = emptySpace.left + "px";
            emptySpace.top = top;
            emptySpace.left = left;
        }
    }

    function highlightPiece() {
        if (isMovablePiece(this)) {
            this.classList.add("movablepiece");
        }
    }

    function removeHighlight() {
        this.classList.remove("movablepiece");
    }

    function shufflePuzzle() {
        for (var i = 0; i < 1000; i++) {
            var movablePieces = getMovablePieces();
            var randomIndex = Math.floor(Math.random() * movablePieces.length);
            var piece = movablePieces[randomIndex];
            movePiece.call(piece);
        }
    }

    function isMovablePiece(piece) {
        var top = parseInt(piece.style.top);
        var left = parseInt(piece.style.left);

        return (
            (top === emptySpace.top && Math.abs(left - emptySpace.left) === 100) ||
            (left === emptySpace.left && Math.abs(top - emptySpace.top) === 100)
        );
    }

    function getMovablePieces() {
        var movablePieces = [];

        puzzlePieces.forEach(function(piece) {
            if (isMovablePiece(piece)) {
                movablePieces.push(piece);
            }
        });

        return movablePieces;
    }
});
