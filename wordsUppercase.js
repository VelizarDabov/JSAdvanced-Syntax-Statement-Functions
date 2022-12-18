
    function solve(text) {
        let result = text.toUpperCase()
          .match(/\s+/g)
          .join(', ');
        
        console.log(result);
      }
solve('Hi, how are you?')