describe("BowlingGame game object defined", function() {
    it("should be defined", function() {
        expect(bowling).toBeDefined();
    });

    describe("inside the object", function() {
        it("should be a Function valueConverter", function() {
            var test = new Bowling('');
            expect(test.valueConverter).toEqual(jasmine.any(Function));
        });

        it("should be a Function getScore", function() {
            expect(bowling.getScore).toEqual(jasmine.any(Function));
        });
    });




});