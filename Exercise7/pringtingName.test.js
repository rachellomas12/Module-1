const printingName = require("../src/printingName");

describe("Print Name Test", () => {
    test("Name Printing", () => {
      // arrange and act
      var result = printingName.printName("Rachel")
  
      // assert
      expect(result).toBe("Hello Rachel");
    });
  
   
  });