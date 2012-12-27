describe("Memory Game", function() {

 it("Should return td size", function() {
   var i = 2;
   var j = 3;
   var gridsize = 4;
  expect(td_index(i, gridsize, j)).toEqual(11);
  });
 it("Should add class to boxes", function() {
   myelement = "<td id = '12'> </td>"
    give_new_classes(2,5,2, "closed")
    expect(myElement).toHaveClass("closed");

 });

});
