function BowlingGame(str) {
    var score = 0,
        array;

    this.valueConverter = function() {
        var spareEditor = function(str) {
            return str[0] + ', ' + (10 - str[0]);
        };

        var openFrameReplacer = function(str) {
            return str[0] + ', ' + str[2];
        };

        str = str.replace(/X/g, '10');
        str = str.replace(/\d\//g, spareEditor);
        str = str.replace(/\d-\d/g, openFrameReplacer);
        return str.split(', ');
    };

    array = this.valueConverter();

    this.getScore = function() {
        for (var i = 0, j  = 0; i < 10; i++) {
            var offset = i + j;
            if (+array[offset] == 10) {
                score += (10 + +array[offset+1] + +array[offset+2]);
            } else {
                if ((+array[offset] + +array[offset+1]) == 10) {
                    score += (10 + +array[offset+2]);
                } else {
                    score += (+array[offset] + +array[offset+1]);
                }
                j+= 1;
            }
        }
        return score;
    }
};